'use client'

import { Button } from "@mui/material"

export default function PostButton(){

   async function handleClick(){
    try {
        const response = await fetch('http://localhost:3000/examples', { method: 'POST' });
    
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          return;
        }
    
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Response is not JSON');
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    }

    return (
        <Button data-test='post-btn' onClick={handleClick}>
            Post Data
        </Button>
    )
}