import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia, MDBTypography, MDBBtn, MDBProgress } from 'mdbreact'; 

class Aviary extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
      //  data: [
      //     {name: 'African Forest'}, 
      //     {name: 'SEA Terraces (Thailand)'}, 
      //     {name: 'Crimson Wetland Lookout South American Wetland'},          
      //     {name: 'South American Forest'},
      //     {name: 'SEA Forest'},
      //     {name: 'Lory Loft'}, 
      //     {name: 'Papua New Guinean Forest'}, 
      //     {name: 'Australian Outback (Dry Forest)'},
      //     {name: 'Fly with Penguin (Penguin Habitat)'},
      //     {name: 'Amphitheatre'}
      //    ],
       data: [],
       isLoaded: false
     };
   }
 
   componentDidMount() {
     this.getData();
   }

   getData = () => {
      fetch('http://192.168.1.110:5000/aviary')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          data: result
        });
      });
      // this.intervalID = setTimeout(this.getData.bind(this), 15000);
   }

   fetchImage = (path) => {
      try {
        return (<MDBMedia object src = {require('./asset/' + path + '.jpg')}  alt = {path} width="200" height="200"/>);
      } catch (err) {
        return path + ' not found';
      }    
    };
    
    displayData(data) {
      var dataOut = "", i; 
      for (i = 0; i < data.length; i++) {
        dataOut += data[i] + "\n";
      }
      return dataOut;
    }

    displayAbsent(data1, data2) {
      if (data1 == null) {
        return null;
      }
      var dataOut = "", i; 
      for (i = 0; i < data1.length; i++) {
        dataOut += (data1[i] + "\n");
      }
      
      if (data2 != null) {
        for (i = 0; i < data2.length; i++) {
          dataOut -= (data2[i] + "\n");
        }
      }

      return dataOut;
    }

    displaySize(data) {
      return data.aviary_bird_collection.length;
    }

    displayReported(data) {
      if (data.aviary_bird_reported == null) {
        return 0;
      }
      return data.aviary_bird_reported.length;
    }
    
    displayAttendance(data) {
      return 0;
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
              {data.map(data => (
              <MDBRow>
                <MDBCol md="4"> {this.fetchImage(data.aviary_image)} </MDBCol>   
                
                <MDBCol md="8">
                <MDBTypography tag='h3' colorText="teal"><strong>{data.aviary_name}</strong> </MDBTypography> 
                <MDBTypography tag='p'><dl className="row">  
                    <dt className="col-sm-3" >Total Size:</dt>
                    <dd className="col-sm-9" >{this.displaySize(data)} </dd>

                    <dt className="col-sm-3">Number of reported:</dt>
                    <dd className="col-sm-9">{this.displayReported(data)} </dd>

                    <dt className="col-sm-3">Yet to report:</dt>
                    <dd className="col-sm-9">{this.displaySize(data) - this.displayReported(data)} </dd>

                    <dt className="col-sm-3">Alert:</dt>
                    <dd className="col-sm-9">{this.displayAttendance(data)} </dd>
                    <MDBBtn floating gradient="blue" onClick={() => alert(this.displayData(data.aviary_bird_collection))}>Bird Collection</MDBBtn>
                    <MDBBtn floating gradient="blue" onClick={() => alert(data.aviary_bird_reported)}>Bird Reported</MDBBtn>
                    <MDBBtn floating gradient="blue" onClick={() => alert(this.displayAbsent(data.aviary_bird_collection, data.aviary_bird_reported))}>Bird Absent</MDBBtn>
                    
                  </dl></MDBTypography>
                  {/* <MDBProgress value= className="my-2" /> */}
                  <MDBProgress material value={25} height="20px" animated> 25% placeholder </MDBProgress>
                </MDBCol>
              </MDBRow>))}
              <br/><br/><br/><br/><br/><br/>
          </MDBContainer>
          );
      }
   }
 }

export default Aviary;
