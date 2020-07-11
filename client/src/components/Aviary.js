import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from 'mdbreact';
/*
   African Forest

· SEA Terraces (Thailand)

· Crimson Wetland Lookout South American Wetland

· South American Forest

· SEA Forest

· Lory Loft

· Papua New Guinean Forest

· Australian Outback (Dry Forest)

· Fly with Penguin (Penguin Habitat)

· Amphitheatre
*/

class Aviary extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       data: [
          {name: 'African Forest'}, 
          {name: 'SEA Terraces (Thailand)'}, 
          {name: 'Crimson Wetland Lookout South American Wetland'},          
          {name: 'South American Forest'},
          {name: 'SEA Forest'},
          {name: 'Lory Loft'}, 
          {name: 'Papua New Guinean Forest'}, 
          {name: 'Australian Outback (Dry Forest)'},
          {name: 'Fly with Penguin (Penguin Habitat)'},
          {name: 'Amphitheatre'}
         ],
      //  data: [],
       isLoaded: true,
     };
   }
 
   // componentDidMount() {
   //   fetch('http://192.168.1.109:5000/bird')
   //     .then(res => res.json())
   //     .then(result => {
   //       this.setState({
   //         isLoaded: true,
   //         data: result
   //       });
   //     });
   // }
 
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
               <MDBCol md="4"><MDBMedia object src=  {require('./asset/logo.jpg')}                                                                    
                     alt={data.name} width="300" height="300"/>  </MDBCol>   
               <MDBCol md="8">
                     <h2> {data.name} </h2>             
                     
                     </MDBCol>
            </MDBRow></tr>))}
            <br/><br/><br/><br/><br/><br/>
         </MDBContainer>
            
            );
     }
   }
 }

export default Aviary;
