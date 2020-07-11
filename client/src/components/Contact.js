import React from 'react';
import './Contact.css';
 
class Contact extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }

   render() { 
      return (
      <div className="bg1">
         <div class="bottom-right">
          <h1>Contact US</h1>
          <p>Chan Ee Zheng, Benjamin<br/>Year 3 Computer Engineering</p>
          </div>
       </div>
    );}
}

export default Contact;