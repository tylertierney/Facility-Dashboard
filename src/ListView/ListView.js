import PropertyListItem from "./PropertyListItem/PropertyListItem";
import * as React from "react";
import { Flex } from "@chakra-ui/react";
import "./listView.css";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

const ListView = ({ propertiesArray, sortConfig, setSortConfig }) => {
  const propertyLIarray = propertiesArray.map((item, index) => {
    const {
      market,
      address,
      projectstage,
      whoscourt,
      projectstatusupdate,
      strategicdirection,
      size,
      expdate,
      featuredimg
    } = item;
    const key = index;

    return (
      <PropertyListItem
        market={market}
        address={address}
        projectstage={projectstage}
        whoscourt={whoscourt}
        projectstatusupdate={projectstatusupdate}
        strategicdirection={strategicdirection}
        size={size}
        expdate={expdate}
        featuredimg={featuredimg}
        key={key}
      />
    );
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    console.log(direction);
  };

  let arrowUpOrDown;
  sortConfig.direction === "ascending"
    ? (arrowUpOrDown = <ArrowDownIcon />)
    : (arrowUpOrDown = <ArrowUpIcon />);

  return (
    <Flex justify="center" mt="2vh" mb="10" wrap="wrap">
      <table className="propertyTable">
        <thead className="thead">
          <tr>
            <th className="th" onClick={() => requestSort("address")}>
              <span>Address</span>
              <span>{sortConfig.key === "address" ? arrowUpOrDown : ""}</span>
            </th>
            <th className="th" onClick={() => requestSort("market")}>
              <span>Market</span>
              <span>{sortConfig.key === "market" ? arrowUpOrDown : ""}</span>
            </th>
            <th className="th" onClick={() => requestSort("size")}>
              <span>Size</span>
              <span>{sortConfig.key === "size" ? arrowUpOrDown : ""}</span>
            </th>
            <th className="th" onClick={() => requestSort("expdate")}>
              <span>Exp Month</span>
              <span>{sortConfig.key === "expdate" ? arrowUpOrDown : ""}</span>
            </th>
          </tr>
        </thead>
        <tbody className="tbody">{propertyLIarray}</tbody>
      </table>
    </Flex>
  );
};

export default ListView;
