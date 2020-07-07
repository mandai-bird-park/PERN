import React, { Fragment, useEffect, useState } from "react";
import LastUpdate from "./LastUpdate";
import { MDBTable, MDBTableHead, MDBTableBody, MDBMedia } from "mdbreact";
import Logo from "./placeholder.jpg"

const DataTable = () => {
  
  const [datatable, setDatatable] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://192.168.1.109:5000/attendance");
      const jsonData = await response.json();
      setDatatable(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const getImage = (path) => {
    return require('./images/' + path);
  };
  

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
              <td> <img src = {getImage(datatable.image_path)} 
                  alt = {datatable.image_path} width="80" height="80"></img></td>
              <td> {datatable.time_stamp}</td>
            </tr>
          ))}             
        </MDBTableBody></MDBTable><LastUpdate/>
    </Fragment>
    
  );
};

export default DataTable;
