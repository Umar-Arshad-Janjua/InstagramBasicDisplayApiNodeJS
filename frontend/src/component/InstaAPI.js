import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InstaContent from './InstaContent'


const InstaAPI = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=IGQVJVazFvdzFFOFZAMUHR4MllHZA2VWRXBnVGtTN1c0U3J1SWt6eE02YUcwMWVrQ25URk91aTE5WGNxRTQ0aXZA4VkVhUDYwejk1QkVCRHlMQTFMYXVLY1ZAHUlNGd251ZAFdpMmFidzNn`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <InstaContent key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaAPI;