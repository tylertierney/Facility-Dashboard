import React, { useState } from "react";
import "./propertyListItem.css";
import PropertyModal from "../../PropertyModal/PropertyModal";
import {
  convertDateToMMYYYY,
  convertSqftToString,
  getStreetAddress,
  preventScrollOnBody
} from "../../HelperFunctions";

const PropertyListItem = ({
  market,
  address,
  projectstage,
  whoscourt,
  projectstatusupdate,
  strategicdirection,
  size,
  expdate,
  featuredimg,
  key
}) => {
  const showModal = () => {
    setModalShowing(true);
    preventScrollOnBody("prevent");
  };

  const [isModalShowing, setModalShowing] = useState(false);

  return (
    <tr className="propertyTR" onClick={() => showModal()}>
      {isModalShowing ? (
        <PropertyModal
          isModalShowing={isModalShowing}
          setModalShowing={setModalShowing}
          market={market}
          address={address}
          projectstage={projectstage}
          whoscourt={whoscourt}
          projectstatusupdate={projectstatusupdate}
          strategicdirection={strategicdirection}
          size={size}
          expdate={expdate}
          featuredimg={featuredimg}
        />
      ) : (
        <></>
      )}
      <td className="propertyTD">{getStreetAddress(address)}</td>
      <td className="propertyTD">{market}</td>
      <td className="propertyTD">{convertSqftToString(size)}</td>
      <td className="propertyTD">{convertDateToMMYYYY(expdate)}</td>
    </tr>
  );
};

export default PropertyListItem;
