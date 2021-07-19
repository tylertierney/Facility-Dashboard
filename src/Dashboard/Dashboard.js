import React, { useState, useRef, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";
import data from "../data";
import "./dashboard.css";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";

const Dashboard = ({ navbarHeight }) => {
  const [viewPreference, setViewPreference] = useState("feed");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [stickyPageHeader, setStickyPageHeader] = useState(false);

  let propertiesArray = [...data];
  let propertiesArray1;

  if (sortConfig !== "") {
    propertiesArray1 = propertiesArray.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  let selectedView;
  switch (viewPreference) {
    case "feed":
      selectedView = (
        <GridView
          propertiesArray={propertiesArray1}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
          gridSmallOrLarge={true}
        />
      );
      break;
    case "grid":
      selectedView = (
        <GridView
          propertiesArray={propertiesArray1}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
          gridSmallOrLarge={false}
        />
      );
      break;
    case "list":
      selectedView = (
        <ListView
          propertiesArray={propertiesArray1}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
        />
      );
      break;
    default:
  }

  return (
    <>
      <div className="pageHeader">
        <PageHeader
          pageTitle="Your Dashboard"
          viewPreference={viewPreference}
          setViewPreference={setViewPreference}
        />
      </div>
      <div className="selectedView" style={{ marginTop: "0.5rem" }}>
        {selectedView}
      </div>
    </>
  );
};

export default Dashboard;
