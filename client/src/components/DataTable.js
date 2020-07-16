import React from "react";
import LastUpdate from "./LastUpdate";
import { MDBMedia, MDBDataTableV5, MDBContainer } from "mdbreact";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datatable: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://192.168.1.110:5000/attendance')
      .then(res => res.json())
      .then(result => {
        const ar = result.reduce((transformed, bird) => {   
        transformed.push({    ...bird,     image: this.fetchImage(bird.attendance_image_path)   } )   
        return transformed
        }, []) 
                
        const r = {
          columns: [
            {
              label: 'Bird_id',
              field: 'attendance_bird_id',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Weight',
              field: 'attendance_weight_recorded',
              width: 150,
            },
            {
              label: 'Aviary_id',
              field: 'attendance_aviary_id',
              width: 150,
            },
            {
              label: 'Image',
              field: 'image',
              width: 150,
            },            
            {
              label: 'Date',
              field: 'attendance_created_on',
              width: 150,
            },
            {
              label: 'Time',
              field: 'attendance_created_at',
              width: 150,
            },
            {
              label: 'Date',
              field: 'created_on',
              width: 150,
            }

          ],
          
          rows: ar,
        }

        this.setState({
          isLoaded: true,
          datatable: r
        });
      });
  }

  fetchImage = (path) => {
    try {
      return (<MDBMedia object src = {require('./images/' + path)}  alt = {path} width="80" height="80"/>);
    } catch (err) {
      return path + ' not found';
    }    
  };

  render() {
    
    const { datatable } = this.state;
    console.log(datatable);
    if (!this.state.isLoaded) {
      return <div><br/><br/><br/>   Loading ... </div>;
    } else {
      return (<MDBContainer><br/><br/><br/> <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable}/><LastUpdate/></MDBContainer>);
    }
    
  }
}

export default DataTable;
