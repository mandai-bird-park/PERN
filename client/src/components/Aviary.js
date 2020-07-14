import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia, MDBTypography, MDBNavLink } from 'mdbreact';

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
       isLoaded: true,
     };
   }
 
   componentDidMount() {
     fetch('http://192.168.1.110:5000/aviary')
       .then(res => res.json())
       .then(result => {
         this.setState({
           isLoaded: true,
           data: result
         });
       });
   }

   fetchImage = (path) => {
      try {
        return (<MDBMedia object src = {require('./asset/' + path + '.jpg')}  alt = {path} width="130" height="130"/>);
      } catch (err) {
        return path + ' not found';
      }    
    };
    
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
               <MDBCol md="4"> {this.fetchImage(data.aviary_image)} </MDBCol>   
               <MDBCol md="8">
               <MDBTypography tag='h1'><MDBNavLink link to="#">{data.aviary_name}</MDBNavLink> </MDBTypography>       
               <MDBTypography tag='p'><MDBNavLink link to="#">{data.bird_list.map(data =><tr>{data}</tr>)}</MDBNavLink> </MDBTypography>   
               </MDBCol>
            </MDBRow></tr>))}
            <br/><br/><br/><br/><br/><br/>
         </MDBContainer>
         );
     }
   }
 }

export default Aviary;
