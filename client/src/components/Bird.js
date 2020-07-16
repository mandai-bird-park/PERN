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

  getData(data) {
    if (data == null) {
      return "-";
    } else {
      return data;
    }
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
          <MDBCol md="4"><br/><MDBMedia object src=  {data.bird_image}                                                                    
               alt={data.bird_id} width="400" height="300"/>  </MDBCol>
          <MDBCol md="8">
          <MDBTypography tag='h1'><MDBNavLink link to="#">{data.bird_name} </MDBNavLink> </MDBTypography>  
          <dl className="row">  
              <dt className="col-sm-3">Bird_id :</dt>
              <dd className="col-sm-9">{data.bird_id}</dd>
              
              <dt className="col-sm-3">Description: </dt>
              <dd className="col-sm-9">{data.bird_description}</dd>     

              <dt className="col-sm-3">Aviary: </dt>
              <dd className="col-sm-9">{this.getData(data.bird_aviary)} </dd>

              <dt className="col-sm-3">Status: </dt>
              <dd className="col-sm-9">{this.getData(data.bird_status)} </dd>

              <dt className="col-sm-3">Weight: </dt>
              <dd className="col-sm-9">{this.getData(data.bird_weight)} </dd>

              <dt className="col-sm-3">Last Seen:</dt>
              <dd className="col-sm-9">{this.getData(data.bird_last_seen)}</dd>     

              
          </dl>  
                </MDBCol>
      </MDBRow></tr>))}
      <br/><br/><br/><br/><br/><br/>
    </MDBContainer>
      
     );

    }
  }
}

export default Bird;
