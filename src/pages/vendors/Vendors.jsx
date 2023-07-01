import "./vendors.scss"

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React from 'react'
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Line from "../../components/line/Line";
import SimpleBarGraph from "../../components/simpleBarGraph/SimpleBarGraph";
import StackedBarGraph from "../../components/stackedBar/StackedBarGraph";
import SmallStackedBar from "../../components/smallstackedBar/SmallStackedBar"
import Pie_Chart from "../../components/PieChart/PieChart";

const Applicant = [
  {
    name: 'Referrals',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: 'Campus',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: 'Vendors',
    male: 9800,
    female: 2000,
    amt: 2290,
  }
];

const diversityOfCandidatesFromReferalls = [
  {
    name: 'Male',
    uv: 4000,
    amt: 2400,
  },
  {
    name: 'Female',
    uv: 3000,
    amt: 2210,
  }
];

const campusRecruitementEffectiveness = [
  {
    name: 'BITS',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: 'IIM',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: 'IIT',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
    name: 'NIT',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
    name: 'SPIT',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
    name: 'SPJMR',
    male: 9800,
    female: 2000,
    amt: 2290,
  }
];

const malesAndFemalesByCompany = [
  {
    name: 'Accenture',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: 'Barclays',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: 'DB',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
    name: 'Infosys',
    male: 9800,
    female: 5000,
    amt: 2290,
  },
  {
    name: 'JPMC',
    male: 9800,
    female: 1000,
    amt: 2290,
  },
  {
    name: 'TCS',
    male: 9800,
    female: 8000,
    amt: 2290,
  }
];

const FemaleApplicantDiversityBySource = [
  { name: 'Company Site', value: 400 },
  { name: 'LinkedIn', value: 300 },
  { name: 'Indeed', value: 300 },
  { name: 'Other Organic sources', value: 200 },
  { name: 'Referrals', value: 200 },
];





function Vendors() {
  return (
    <div className="vendors">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="noofempFromReferrals" />
          <Widget type="noemployeesfromcampuses" />
          <Widget type="empfromvendors" />
          <Widget type="TotalCampuses" />
        </div> 
        <div className="charts">
        <SimpleBarGraph title="Referral Diversity" data={diversityOfCandidatesFromReferalls} aspect={2 /1} />
        <SmallStackedBar title="Campus Recruitment Effectiveness" data={campusRecruitementEffectiveness} aspect={2 /1  } />
        </div>
        <div className="charts">
        <SmallStackedBar title="Distribution of Male and Female by Company" data={malesAndFemalesByCompany} aspect={2 /1  } />
        <Pie_Chart title="Female Applicant Diversity By Source" data={FemaleApplicantDiversityBySource} aspect={2 /1  } />

        </div>
        <div className="listContainer">
            <div className="listTitle">Suggested Campuses</div>
            <Table/>
        </div>
      </div>
        
    </div>
  )
}

export default Vendors