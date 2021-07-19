import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import "./propertyCard.css";
import PropertyModal from "../PropertyModal/PropertyModal";
import React, { useState } from "react";
import {
  convertDateToString,
  convertSqftToString,
  determineBadgeColor,
  getStreetAddress,
  preventScrollOnBody,
} from "../HelperFunctions";

const PropertyCard = ({
  market,
  address,
  projectstage,
  whoscourt,
  projectstatusupdate,
  strategicdirection,
  size,
  expdate,
  featuredimg,
  gridSmallOrLarge,
}) => {
  const [isModalShowing, setModalShowing] = useState(false);

  let sizingVariables;
  if (gridSmallOrLarge === true) {
    sizingVariables = {
      badgeFontSize: "sm",
      marketFontSize: "sm",
      addressFontSize: "xl",
      boxFontSize: "md",
      boxMaxWidth: "300px",
      actionNeededFontSize: "sm",
      imageBoxSize: "",
      warningIconSize: "28px",
    };
  } else {
    sizingVariables = {
      badgeFontSize: "0.5rem",
      marketFontSize: "0.55rem",
      addressFontSize: "sm",
      boxFontSize: "xs",
      boxMaxWidth: "175px",
      actionNeededFontSize: "xs",
      imageBoxSize: "150px",
      warningIconSize: "20px",
    };
  }

  let actionNeeded, notificationBadge;
  if (whoscourt === "Avocat Group") {
    actionNeeded = <></>;
  } else if (whoscourt === "Inactive") {
    actionNeeded = (
      <Flex mt={2} align="center">
        <Text ml={1} fontSize={sizingVariables.actionNeededFontSize}>
          <b>Note:</b> {projectstatusupdate}
        </Text>
      </Flex>
    );
  } else {
    actionNeeded = (
      <Flex mt={2} align="center">
        <Text ml={1} fontSize={sizingVariables.actionNeededFontSize}>
          <b>Action Required:</b> {projectstatusupdate}
        </Text>
      </Flex>
    );

    notificationBadge = (
      <WarningIcon
        color="red.400"
        boxSize={sizingVariables.warningIconSize}
        className="warningIcon"
      />
    );
  }

  const showModal = () => {
    setModalShowing(true);
    preventScrollOnBody("prevent");
  };

  return (
    <Box
      className="propertyCard"
      p="5"
      maxW={sizingVariables.boxMaxWidth}
      borderWidth="1px"
      mb="30px"
      onClick={() => showModal()}
      fontSize={sizingVariables.boxFontSize}
    >
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
      {notificationBadge}
      <Image
        borderRadius="md"
        src={featuredimg}
        objectFit="cover"
        boxSize={sizingVariables.imageBoxSize}
      />
      <Flex align="baseline" mt={2}>
        <Badge
          fontSize={sizingVariables.badgeFontSize}
          colorScheme={determineBadgeColor(projectstage)}
        >
          {projectstage}
        </Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize={sizingVariables.marketFontSize}
          fontWeight="bold"
          color="pink.800"
        >
          {market}
        </Text>
      </Flex>
      <Text
        mt={2}
        fontSize={sizingVariables.addressFontSize}
        fontWeight="semibold"
        lineHeight="short"
        className="propertyCardAddress"
      >
        {getStreetAddress(address)}
      </Text>
      <Text mt={2}>{convertSqftToString(size) + " SQFT"}</Text>
      <span mt={2}>
        {expdate ? "Exp Date: " + convertDateToString(expdate) : expdate}
      </span>
      {actionNeeded}
    </Box>
  );
};

export default PropertyCard;
