import React, { Fragment, useEffect, useState } from "react";
import LastUpdate from "./LastUpdate";
import { MDBTable, MDBTableHead, MDBTableBody, MDBMedia } from "mdbreact";
import Logo from "./placeholder.jpg"

const DataTable = () => {
  
  const [datatable, setDatatable] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/attendance");
      const jsonData = await response.json();
      setDatatable(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        <getImage/>
          {datatable.map(datatable => (
            
            <tr key={datatable.time_stamp}>
              <td> {datatable.bird_id}</td>
              <td> {datatable.aviary_id}</td>
              <td> {datatable.weight}</td>
              <td>                 
                <MDBMedia object src= {Logo} //{require('./' + data.image_path)} // {Logo}                                                                             
               alt={datatable.image_path} width="100" height="100"/> </td>
              <td> {datatable.time_stamp}</td>
            </tr>
          ))}
        </MDBTableBody></MDBTable><LastUpdate/>
    </Fragment>
    
  );
};

export default DataTable;