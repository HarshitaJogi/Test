import "./hiring.scss"
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


function Hiring() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="TotalEmp" />
          <Widget type="Totolwom" />
          <Widget type="NewHire" />
          <Widget type="TotalCampuses" />
        </div>
       
      </div>
    </div>
  )
}

export default Hiring