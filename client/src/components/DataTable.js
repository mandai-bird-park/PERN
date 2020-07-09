import React, { Fragment } from "react";
import LastUpdate from "./LastUpdate";
import { MDBTable, MDBTableHead, MDBTableBody, MDBMedia } from "mdbreact";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datatable: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://192.168.1.109:5000/attendance')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          datatable: result
        });
      });
  }

  fetchImage = (path) => {
    try {
      return require('./images/' + path);
    } catch (err) {
      return 'image not found';
    }
  };

  render() {
    
    const { datatable } = this.state;
    console.log (datatable);
    if (!this.state.isLoaded) {
      return <div>  Loading ... </div>;
    } else {
      return (
        <Fragment>
      <br/>
       <MDBTable hover className="table mt-5 text-center" >
       <MDBTableHead>
           <tr>
             <th>bird_id</th>
             <th>aviary_id</th>
             <th>weight</th>
             <th>image_path</th>
            <th>time_stamp</th> 
           </tr>
         </MDBTableHead>
        <MDBTableBody>
           {datatable.map(datatable => (
            
            <tr key={datatable.time_stamp}>
              <td> {datatable.bird_id}</td>
              <td> {datatable.aviary_id}</td>
              <td> {datatable.weight}</td>
              <td> <MDBMedia object src = {this.fetchImage(datatable.image_path)} 
                  alt = {datatable.image_path} width="80" height="80"/></td>
              <td> {datatable.time_stamp}</td>
            </tr>
          ))}             
        </MDBTableBody></MDBTable><LastUpdate/>
    </Fragment>
      );
    }
    
  }
}

export default DataTable;
