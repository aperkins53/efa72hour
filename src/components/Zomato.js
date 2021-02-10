import React, { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardImg,
} from "reactstrap";

const key = "deff7a1635040141caacd2232812ea3a";
// const baseURL = "https://developers.zomato.com/api/v2.1/geocode";
function Zomato(props) {
  const [zomData, setZomData] = useState("");

  const fetchZomato = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`,
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "user-key": `${key}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setZomData(
          data.nearby_restaurants.map((restaurants, index) => {
            console.log(restaurants);

            const ifImage = () => {
              if (ifImage.restaurants.restaurant.featured_image == "") {
                restaurants.restaurant.featured_image.innerText =
                  "restaurants: null";
              } else {
                restaurants.restaurant.featured_image.innerText =
                  "restaurants" + restaurants.restaurant.featured_image;
              }
            };

            // const ifImage = () => {
            //   if (restaurants.restaurant) {
            //     restaurants.restaurant.featured_image;
            //   } else {
            //     return;
            //   }
            // };
            return (
              <Card
                className="card"
                key={index}
                style={{
                  backgroundColor: "lightslategrey",
                  margin: "2em",
                  width: "25%",
                  borderRadius: ".5",
                  color: "white",
                }}
              >
                {/* <CardImg
                  top
                  width="100%"
                  src={restaurants.restaurant.photos_url}
                  alt="Card image cap"
                /> */}
                <CardBody>
                  <CardTitle tag="h5">{restaurants.restaurant.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 ">
                    {restaurants.restaurant.location.address}
                  </CardSubtitle>
                  <CardText>{restaurants.restaurant.cuisines}</CardText>
                </CardBody>
              </Card>
            );
          })
        )
      );
  };
  useEffect(() => {
    fetchZomato();
  }, []);
  return <div>{zomData}</div>;
}
export default Zomato;
