export const convertDateToString = (expdate) => {
  let date = new Date(expdate);
  let expdateString =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
  return expdateString;
};

export const convertDateToMMYYYY = (expdate) => {
  let date = new Date(expdate);
  let expdateString = date.getMonth() + 1 + "/" + date.getFullYear();
  return expdateString;
};

export const convertSqftToString = (size) => {
  if (size !== undefined) {
    const size2 = size.toLocaleString("en-US");
    return size2;
  }
};

export const determineBadgeColor = (projectstage) => {
  let badgeColor = "blue";
  switch (projectstage) {
    case "Negotiation":
      badgeColor = "green";
      break;
    case "Waiting":
      badgeColor = "pink";
      break;
    case "On Hold":
      badgeColor = "red";
      break;
    case "Closed":
      badgeColor = "red";
      break;
    default:
      badgeColor = "blue";
  }

  return badgeColor;
};

export const getStreetAddress = (address) => {
  let firstComma = address.indexOf(",");
  let streetAddress = address.substr(0, firstComma);
  return streetAddress;
};

export const getCityStateZip = (address) => {
  let firstComma = address.indexOf(",");
  let cityStateZip = address.substr(firstComma + 2, address.length);
  return cityStateZip;
};

export const preventScrollOnBody = (preventOrAllow) => {
  if (preventOrAllow === "prevent") {
    document.body.classList.add("preventScroll");
  } else {
    document.body.classList.remove("preventScroll");
  }
};
