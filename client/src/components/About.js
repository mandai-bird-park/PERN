import React from 'react';
import { MDBContainer, MDBRow, MDBCol  } from 'mdbreact';
import './About.css'
 
const About = () => {
    const test = require('./test.jpg');
    return (
         
         <MDBContainer size="xl">
            
         <div className="sticky-top">
         <br/><br/><br/>
         <h2> Abstract </h2>
         <p className="text-justify"><br/>
               Jurong Bird Park is home to close to 3,500 birds across 400 different species. It has been operating
               for close to 50 years and will be moving to its new location in Mandai by the year 2022. The new
               park in Mandai will feature nine large walk-in aviaries, where birds will be allowed to fly around
               freely. Each aviary will be about 1 hectare large, up to 9 storeys high and house up to 800 birds.
               The large number of birds combined with the huge areas pose a problem to zookeepers and vets to
               keep track of each individual bird and monitor their health. Currently, this is an existing issue in
               the Jurong Bird Park with smaller aviaries and fewer birds. As a result, many birds are left
               unaccounted for and many with medical conditions go untreated. Hence, the bird park would be
               unable to ensure the welfare of the birds, this is a major issue, especially for birds that are from a
               threatened species.
               In this report, an intelligent system is proposed to track birds, remotely monitor different species
               of birds’ health and capture birds within a large aviary in the new Mandai Bird Park. The system
               collects the birds’ data, namely their identification, time of entry, weight and image. This would
               help keepers to ensure that birds within the aviary are not only accounted for but are healthy. If a
               bird is deemed to need medical attention, the trap will activate upon identifying that particular bird
               and alert the zookeeper to retrieve it.
               The project is currently in the prototyping phase and is being tested on small arboreal birds. Some
               data has been successfully collected by the system from tests. Future developments would include
               optimising the system for more accurate and reliable data collection.</p></div>
               <MDBRow className="mb-4">
                   <MDBCol md="100">
                     <img src={test} 
                    //   <img src="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2016/06/01/aviaryjune1.jpg?itok=4RKF1tqn&timestamp=1464750922" 
                      className="center" alt="no image found" />
                   </MDBCol>
               </MDBRow>
         </MDBContainer>
    );
}
 
export default About;