import PropertyCard from "../PropertyCard/PropertyCard";
import React from "react";
import { Flex } from "@chakra-ui/react";

const GridView = ({
  propertiesArray,
  sortingBy,
  setSortingBy,
  gridSmallOrLarge,
}) => {
  const propertyCardArray = propertiesArray.map((item, index) => {
    const {
      market,
      address,
      projectstage,
      whoscourt,
      projectstatusupdate,
      strategicdirection,
      size,
      expdate,
      featuredimg,
    } = item;
    const key = index;

    return (
      <PropertyCard
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
        gridSmallOrLarge={gridSmallOrLarge}
      />
    );
  });

  return (
    <Flex justify="space-around" mt="13px" wrap="wrap" pl="10px" pr="10px">
      {propertyCardArray}
    </Flex>
  );
};

export default GridView;
