import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

const NASA = (props) => {
    const [image, setImage] = useState('');

    
    useEffect(() => {
        if (props.longitude === undefined || props.latitude === undefined) {
            return;
        }

        console.log(props.latitude, props.longitude);

        const url = `https://api.nasa.gov/planetary/earth/assets?lon=${props.longitude}&lat=${props.latitude}&date=2020-02-07&dim=0.5&api_key=R4umF8g5DMrB6R2FNqPDMEMBPyUN9H9ni2VMZeZA`;

        if (url){
            fetch(url)
                .then(res => res.json())
                .then(json => setImage(json.url))
        }
    }, [props.longitude, props.latitude]);

    let styles = {img: {maxHeight: '400px', maxWidth: '350px', border: '2px solid black', borderRadius: '20%'}}

    return(
    <div>
        <Image id='image' src={image} style={styles.img} />
    </div>
    );
};

export default NASA;