import { ButtonGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import "./pageHeader.css";
import { BiGridAlt } from "react-icons/bi";
import { BsViewList, BsList } from "react-icons/bs";

const PageHeader = ({
  pageTitle,
  gridOrList,
  setGridOrList,
  viewPreference,
  setViewPreference,
}) => {
  let color1, color2, color3;

  switch (viewPreference) {
    case "feed":
      color1 = "blue";
      color2 = "gray";
      color3 = "gray";
      break;
    case "grid":
      color1 = "gray";
      color2 = "blue";
      color3 = "gray";
      break;
    case "list":
      color1 = "gray";
      color2 = "gray";
      color3 = "blue";
      break;
    default:
  }

  return (
    <div className="pageHeaderContainer">
      <h1 className="pageHeaderTitle">{pageTitle}</h1>
      <ButtonGroup
        isAttached
        size="sm"
        variant="outline"
        className="pageHeaderBtnGroup"
      >
        <IconButton
          borderTopLeftRadius="lg"
          borderBottomLeftRadius="lg"
          icon={<BsViewList />}
          colorScheme={color1}
          className="viewIcons"
          onClick={() => setViewPreference("feed")}
        />
        <IconButton
          icon={<BiGridAlt size="1rem" />}
          colorScheme={color2}
          className="viewIcons"
          onClick={() => setViewPreference("grid")}
        />
        <IconButton
          borderTopRightRadius="lg"
          borderBottomRightRadius="lg"
          icon={<BsList />}
          colorScheme={color3}
          className="viewIcons"
          onClick={() => setViewPreference("list")}
        />
      </ButtonGroup>
    </div>
  );
};

export default PageHeader;
