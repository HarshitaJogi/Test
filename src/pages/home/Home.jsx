import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Line from "../../components/line/Line";
import DoubleBarGraph from "../../components/doubleBarGraph/DoubleBarGraph";
import HorizontalBarGraph from "../../components/horizontalBarGraph/HorizontalBarGraph"
import StackedBarGraph from "../../components/stackedBar/StackedBarGraph";
import SmallStackedBar from "../../components/smallstackedBar/SmallStackedBar"
import { Link } from "react-router-dom";
import PositiveAndNegativeBarChart from "../../components/positiveAndNegativeBarChart/PositiveAndNegativeBarChart";

const Department = [
  {
    name: 'Enginnering',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: 'Accounting',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: 'HR',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
      name: 'Legal',
      male: 4000,
      female: 2400,
      amt: 2400,
    },
    {
      name: 'Marketing',
      male: 3000,
      female: 1398,
      amt: 2210,
    },
    {
      name: 'Sales',
      male: 9800,
      female: 2000,
      amt: 2290,
    }
];

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

const FemaleRatiobyYear = [
  {
    name: '2017',
    female: 1398,
    male: 4000,
    amt: 2400,
  },
  {
    name: '2018',
    female: 1398,
    male: 3000,
    amt: 2210,
  },
  {
    name: '2019',
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: '2020',
    female: 2780,
    male: 3908,
    amt: 2000,
  },
  {
    name: '2021',
    female: 1890,
    male: 4800,
    amt: 2181,
  },
  {
    name: '2022',
    female: 2390,
    male: 3800,
    amt: 2500,
  },
  {
    name: '2023',
    female: 3490,
    male: 4300,
    amt: 2100,
  },
];

const diversityAtEachStageHiring = [
  {
    name: 'Coding',
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    name: 'Technical',
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    name: 'HR',
    male: 9800,
    female: 2000,
    amt: 2290,
  },
  {
    name: 'Fitness',
    male: 9800,
    female: 2000,
    amt: 2290,
  }
];

const AttritionAcrossDepartments = [
  {
    name: 'Operations',
    joiners: 4000,
    resigned: 2400,
    amt: 2400,
  },
  {
    name: 'Sales',
    joiners: 3000,
    resigned: -1398,
    amt: 2210,
  },
  {
    name: 'Marketing',
    joiners: 2000,
    resigned: -1800,
    amt: 2290,
  },
  {
    name: 'HR',
    joiners: 2780,
    resigned: 3908,
    amt: 2000,
  },
  {
    name: 'Finance',
    joiners: 1890,
    resigned: -1800,
    amt: 2181,
  },
  {
    name: 'IT',
    joiners: 2390,
    resigned: -3800,
    amt: 2500,
  }
];



const Home = () => {
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
        <div className="charts">
          <Line title="Female Ratio By Year" data={FemaleRatiobyYear} aspect={2 /1  } />
          <DoubleBarGraph title="Diversity Across Position" aspect={2 /1  } />
        </div>
        {/* <div className="charts">
        <StackedBarGraph title="Diversity Across Department" data={Department} aspect={2 /1  } />
        </div> */}
        <div className="charts">
        <SmallStackedBar title="Applicant Diversity" data={Applicant} aspect={2 /1  } />
        <SmallStackedBar title="Diversity At Each Stage of Hiring" data={diversityAtEachStageHiring} aspect={2 /1  } />
        </div>
        <div className="gotobuttons">

        <Link to="/vendors" style={{ textDecoration: "none" }}>
          <button className="goto">
              Check Vendors
          </button>
        </Link>
        <Link to="/hiring" style={{ textDecoration: "none" }}>
          <button className="goto">
              Check Hiring
          </button>
        </Link>
        </div>

        <div className="charts">
        <PositiveAndNegativeBarChart title="Attrition Across Department" data={AttritionAcrossDepartments}aspect={2 /1  } />
        <Line title="Future Hiring" data={Applicant} aspect={2 /1  } />
        </div>

        <div className="gotobuttons">

        <Link to="/reports" style={{ textDecoration: "none" }}>
          <button className="goto">
              Check Reports
          </button>
        </Link>

        <Link to="/predictions" style={{ textDecoration: "none" }}>
          <button className="goto">
              Check Predictions
          </button>
        </Link>

        </div>

      </div>
    </div>
  );
};

export default Home;
