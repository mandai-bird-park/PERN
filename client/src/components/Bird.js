import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from 'mdbreact';
import './bird.css';
 
class Bird extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://192.168.1.110:5000/bird')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          data: result
        });
      });
  }

  render() {
    const { data } = this.state;
    console.log (data);
    if (!this.state.isLoaded) {
      return <div><br/><br/><br/> Loading ... </div>;
    } else {
    return (    
      <MDBContainer>
      <br/><br/><br/><br/><br/><br/>
      {data.map(data => (<tr>
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
  }
}

export default Bird;
