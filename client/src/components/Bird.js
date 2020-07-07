import React, { useEffect, useState }  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from 'mdbreact';
import './bird.css';
 
const Bird = () => {

   const [data, setTodos] = useState([]);
   const getData = async () => {
      try {
        const response = await fetch("http://192.168.1.109:5000/bird");
        const jsonData = await response.json();
        setTodos(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);

   return (
    
    <MDBContainer>
    <br/><br/><br/><br/><br/><br/>
    {data.map(data => (<tr key={data.time_stamp}>
    <MDBRow>
        <MDBCol md="4"><MDBMedia object src=  {data.last_updated_image_path}                                                                    
             alt={data.bird_id} width="400" height="300"/>  </MDBCol>
        

        <MDBCol md="8">
             <h2> {data.bird_name} </h2>             
             <p> Bird_id : {data.bird_id} </p>
             <p> Average Weight: {data.last_updated_weight} </p>
             <p> Last Seen: {data.last_updated_timestamp} </p>
             <p> Description </p>
             <p> {data.bird_description} </p>
              </MDBCol>
    </MDBRow></tr>))}
    <br/><br/><br/><br/><br/><br/>
  </MDBContainer>
    
   );

}

export default Bird;
