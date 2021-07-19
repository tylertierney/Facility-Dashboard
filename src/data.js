const data = [
  {
    market: "New Jersey",
    address: "110 Asia Place, Carlstadt, NJ 07072",
    projectstage: "On Hold",
    whoscourt: "Inactive",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Relocate",
    size: 17010,
    expdate: "2028-08-31T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/GgGQbonzwXxvbG-Ktey2TFQfwxMGUCGo2fDIEA4zXXA/116/345-Middlefield-Rd-Menlo-Park-CA-Building-Photo-1-LargeHighDefinition.jpg"
  },
  {
    market: "Seattle",
    address: "8280 Perimeter Road South, Seattle, WA 89108",
    projectstage: "Negotiation",
    whoscourt: "Avocat Group",
    projectstatusupdate: "Have made counter offer to Landlord",
    notes: "Landlord is REIT, owns 3 other buildings",
    strategicdirection: "Rent Concessions",
    size: 55498,
    expdate: "2022-06-30T04:00:00.000Z",
    targetdate: "2020-05-31T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/2I_VwrP27rTXhUbQ1F9v5mp_ZUIrwfwti3jJgDlLWj0/116/20-Liberty-Ship-Way-Sausalito-CA-Driveway-and-Entrance-1-LargeHighDefinition.jpg",
    startdate: "2020-03-26T04:00:00.000Z"
  },
  {
    market: "Denver",
    address: "6860 S. Bush Drive, Greenwood Village, CO 80112",
    projectstage: "Negotiation",
    whoscourt: "Avocat Group",
    projectstatusupdate: "RFP's submitted",
    notes: "Objective is to get at least $1M allowance",
    strategicdirection: "Blend & Extend",
    size: 19870,
    expdate: "2022-12-01T05:00:00.000Z",
    targetdate: "2021-06-30T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/M1HIKJoewk8n8NSjR7mGftfXNwCDNdyxSLEBXPO8RK8/116/880-Parkview-Dr-N-El-Segundo-CA-Freestanding-One-of-a-Kind-High-Image-Corporate-Office-Building-1-LargeHighDefinition.jpg",
    startdate: "2020-05-12T04:00:00.000Z"
  },
  {
    market: "San Jose",
    address: "1098 San Diego Avenue, South San Francisco, CA 94080",
    projectstage: "Negotiation",
    whoscourt: "Avocat Group",
    projectstatusupdate: "In negotiation with existing LL",
    notes: "Requested 6 months fee and add to term",
    strategicdirection: "Rent Concessions",
    size: 25444,
    expdate: "2023-01-31T05:00:00.000Z",
    targetdate: "2020-09-30T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/zQ2p39hEVKs9muW0Ku9bM1B3Gb2LPsQF8zeg8ogLNZI/116/1771-N-State-Road-7-Fort-Lauderdale-FL-Primary-Photo-1-LargeHighDefinition.jpg",
    startdate: "2020-03-15T04:00:00.000Z"
  },
  {
    market: "San Bruno",
    address: "1098 San Mateo Blvd., South San Francisco, CA 94080",
    projectstage: "Negotiation",
    whoscourt: "Avocat Group",
    projectstatusupdate: "Negotiating improvement allowance and term extension",
    notes: "Regional LL",
    strategicdirection: "Rent Concessions",
    size: 49320,
    expdate: "2024-01-15T05:00:00.000Z",
    targetdate: "2020-09-30T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/zQ2p39hEVKs9muW0Ku9bM1B3Gb2LPsQF8zeg8ogLNZI/116/1771-N-State-Road-7-Fort-Lauderdale-FL-Primary-Photo-1-LargeHighDefinition.jpg",
    startdate: "2020-02-18T05:00:00.000Z"
  },
  {
    market: "Chicago",
    address: "9417 Ogden Ave., Brookfield, IL 60513",
    projectstage: "Negotiation",
    whoscourt: "Avocat Group",
    projectstatusupdate:
      "In discussion for 30,000 SQFT expansion for immediate rent concession",
    notes: "Currently $1.15/SQFT below market average",
    strategicdirection: "Expand or Relo",
    size: 36840,
    expdate: "2024-02-28T05:00:00.000Z",
    targetdate: "2020-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/fYu1KX0HteghLYC3YZxOKIBrnaG1kmfA7Pi8OPRdFSY/112/301-E-Las-Olas-Blvd-Fort-Lauderdale-FL-301-E-Las-Olas-1-HighDefinition.jpg",
    startdate: "2020-05-15T04:00:00.000Z"
  },
  {
    market: "Las Vegas",
    address: "3790 W Oquendo Rd, Las Vegas, NV 89118",
    projectstage: "Evaluating",
    whoscourt: "Google",
    projectstatusupdate: "Developing 3 year plan",
    notes: "CapEx requirement will favor purchase",
    strategicdirection: "Purchase",
    size: 33786,
    expdate: "2022-12-31T05:00:00.000Z",
    targetdate: "2021-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/U9pDEs3A0_xIKhz3Sdk-npL_vCPeoI2PACFBAuMHF0k/116/16760-Schoenborn-St-North-Hills-CA-Primary-Photo-1-LargeHighDefinition.jpg",
    startdate: "2020-04-06T04:00:00.000Z"
  },
  {
    market: "New Jersey",
    address: "2330 Green St., South Hackensack, NJ 07606",
    projectstage: "Evaluating",
    whoscourt: "Google",
    projectstatusupdate: "Developing 3 year plan",
    notes: "Have excess space",
    strategicdirection: "Contract or Relo",
    size: 25050,
    expdate: "2022-12-31T05:00:00.000Z",
    targetdate: "2021-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/qTLX0xKsU9P7TJFPgGLOwKKbAfGfuNMri0tu-2cPb7k/116/1200-Riverplace-Blvd-Jacksonville-FL-Known-as-One-of-Jacksonvilles-Most-Iconic-Buildings-4-LargeHighDefinition.jpg",
    startdate: "2020-04-08T04:00:00.000Z"
  },
  {
    market: "Long Beach",
    address: "4155 Carson Street, Lakewood, CA 90712",
    projectstage: "Evaluating",
    whoscourt: "Google",
    projectstatusupdate: "Developing 3 year plan",
    notes: "Have excess space",
    strategicdirection: "Contract or Relo",
    size: 38350,
    expdate: "2024-05-31T04:00:00.000Z",
    targetdate: "2021-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/Jn9-IwMPTRGkF6Y-9CwOa8B_o29xo1C3o-w0TGX9fu8/116/Central-Corporate-Center-6021-S-Rio-Grande-Avenue-Exterior-and-Parking-1-LargeHighDefinition.jpg",
    startdate: "2020-04-07T04:00:00.000Z"
  },
  {
    market: "Dallas",
    address: "8001 Grand View Avenue, Dallas, TX 75209",
    projectstage: "Construction",
    whoscourt: "Avocat Group",
    projectstatusupdate: "Plans in for permitting",
    notes: "Landlord providing $1.7M improvement allowance",
    strategicdirection: "Renew",
    size: 22150,
    expdate: "2023-12-31T05:00:00.000Z",
    targetdate: "2020-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/fITzcroLD3ltCJx0oNUsYGpxjaJiLqfyPbPd94R1PSg/116/2090-Palm-Beach-Lakes-Blvd-West-Palm-Beach-FL-The-Concourse-West-Tower-1-LargeHighDefinition.jpg",
    startdate: "2020-04-15T04:00:00.000Z"
  },
  {
    market: "Atlanta",
    address: "305 Best Friend Ct., Norcross GA",
    projectstage: "Complete",
    whoscourt: "Avocat Group",
    projectstatusupdate: "Waiting for architect's space plan",
    notes: "Converting to hotel seating strategy",
    strategicdirection: "Contract or Relo",
    size: 40000,
    expdate: "2023-10-31T04:00:00.000Z",
    targetdate: "2020-10-31T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/6WQedxiN_q03ffrOhm-8JG6SRYc0XfhYcf2x25xhMfI/116/4200-NW-16th-St-Lauderhill-FL-4200-NW-16th-Street-1-LargeHighDefinition.jpg",
    startdate: "2020-05-01T04:00:00.000Z"
  },
  {
    market: "Chicago",
    address: "935 Cargo Way, Chicago, IL 60666",
    projectstage: "Waiting",
    whoscourt: "Google",
    projectstatusupdate: "Need client demand study",
    notes: "Determining if airport proximity is required",
    strategicdirection: "Need Direction",
    size: 86000,
    expdate: "2024-09-30T04:00:00.000Z",
    targetdate: "2020-09-30T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/SFRYHZJTJgbFZwDWS6I3AocQ1iYuHfFgLdLHq1EZOpI/112/Blue-Lagoon-Drive-Miami-FL-800-Waterford-Waterfront-Views-1-HighDefinition.jpg",
    startdate: "2020-04-01T04:00:00.000Z"
  },
  {
    market: "San Diego",
    address: "Signature Flight Support",
    projectstage: "On Hold",
    whoscourt: "Google",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Need Direction",
    expdate: "2023-02-28T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/a17M3vqkc3HJAne1MBRK_O5JhXYCa7aVLoGJ4rKZe6E/112/2425-2435-N-Central-Expy-Richardson-TX-Palisades-Central-II-1-HighDefinition.jpg"
  },
  {
    market: "Van Nuys",
    address: "5927 Noble Avenue, Van Nuys, CA 91411",
    projectstage: "On Hold",
    whoscourt: "Google",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Need Direction",
    size: 14230,
    expdate: "2023-06-30T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/naJ4IeUGTRKkt36JIIISc-A11TtbvTMdSZlCvMcJNzw/112/10235-W-Little-York-Rd-Houston-TX-View-Over-the-Treetops-of-Curving-Glass-Line-1-HighDefinition.jpg"
  },
  {
    market: "Tampa",
    address: "5660-6840 West Cypress Street, Tampa, FL",
    projectstage: "On Hold",
    whoscourt: "Google",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Need Direction",
    size: 21440,
    expdate: "2022-12-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/6cdrfXoKrBTLOizB6Qw0PZkQGMpF9mJMOiBezFA0h-8/112/440-Louisiana-St-Houston-TX-Iconic-Downtown-Houston-Office-Tower-1-HighDefinition.jpg"
  },
  {
    market: "West Palm Beach",
    address: "1399 N Military Trail, West Palm Beach, FL 33409",
    projectstage: "On Hold",
    whoscourt: "Inactive",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Purchase",
    size: 16000,
    expdate: "2023-05-31T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/Z17JUNpxNMuRJ2ZXRxd6z6Epxd3ccLEjZ5J4bY4zEBI/112/8701-FM-2244-Austin-TX-8701-FM-2244-1-HighDefinition.jpg"
  },
  {
    market: "Miami",
    address: "3300 NW 35 Avenue, Miami, Florida 33142",
    projectstage: "On Hold",
    whoscourt: "Inactive",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Relocate",
    expdate: "2023-10-31T04:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/3xD7zGnLdUIpk5YnOzNyZspPzU9MGrRiN9wg2CytSOQ/112/6400-Fannin-St-Houston-TX-6400-Fannin-St-1-HighDefinition.jpg"
  },
  {
    market: "Washington DC (Virginia)",
    address: "21750 Red Rum Dr, Ste 142., Ashburn, VA 20147",
    projectstage: "On Hold",
    whoscourt: "Inactive",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Relocate",
    size: 4380,
    expdate: "2023-11-30T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/aovLuFPGkpGKEnrtn4Uvukp9S8V6pZo9YGF42trcS1c/112/8200-8355-NW-53rd-St-Doral-FL-Picturesque-Office-Campus-1-HighDefinition.jpg"
  },
  {
    market: "White Plains (New York)",
    address: "Westchester County Airport",
    projectstage: "On Hold",
    whoscourt: "Inactive",
    projectstatusupdate: "Waiting for budget approval",
    strategicdirection: "Purchase",
    size: 2700,
    expdate: "2024-01-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/inIiEQO4FUx3QNizxEgu6DfHdewVG8JR7pqX78k7CJ4/112/800-Fairway-Dr-Deerfield-Beach-FL-800-Fairway-1-HighDefinition.jpg"
  },
  {
    market: "Philadelphia",
    address: "1331 Chester Pike, Sharon Hill, PA 19079",
    projectstage: "Closed",
    whoscourt: "Inactive",
    projectstatusupdate: "Facility closed, decommissioning",
    strategicdirection: "Closing",
    expdate: "2023-11-07T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/m7IolJj0KbXBeWPyF3akc6wM4TOj5moXeJBJ18EwABk/116/11900-Biscayne-Blvd-North-Miami-FL-Biscayne-Centre-1-LargeHighDefinition.jpg"
  },
  {
    market: "Scottsdale",
    address: "7311 E. Evans, Scottsdale, AZ 85260",
    projectstage: "Closed",
    whoscourt: "Inactive",
    projectstatusupdate: "Construction complete, in FF&E stage",
    strategicdirection: "Complete",
    expdate: "2024-01-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/MuOSJCaXnCvyP9DfSLMxWJgkeIujZ6kN4RQc3bsENFw/112/220-E-Central-Pky-Altamonte-Springs-FL-CenterPointe-Two-Main-Entrance-and-Driveway-1-HighDefinition.jpg"
  },
  {
    market: "Van Nuys II",
    address: "7535A Valjean Avenue, Van Nuys, CA 91406",
    projectstage: "Closed",
    whoscourt: "Inactive",
    projectstatusupdate: "Construction complete, in FF&E stage",
    strategicdirection: "Complete",
    expdate: "2024-01-31T05:00:00.000Z",
    featuredimg:
      "https://images1.loopnet.com/i2/S8-DXDkWMjF-LjFkF8T1MDk0ItmGsVN8M0iiwRNsCAk/112/31-Ocean-Reef-Dr-Key-Largo-FL-View-of-the-Front-of-the-Building-1-HighDefinition.jpg"
  },
  {
    market: "Boston",
    address: "375 Revere Street, Revere, MA 02151",
    projectstage: "Closed",
    whoscourt: "Inactive",
    projectstatusupdate: "Construction complete, in FF&E stage",
    strategicdirection: "Complete",
    featuredimg:
      "https://images1.loopnet.com/i2/5nl89CDhXtgg-tzcmxwbS2MpXZj2ftgBBpLJkfCkimo/116/8875-Hidden-River-Pkwy-Tampa-FL-8875-Hidden-River-Pkwy-Tampa-FL-33637-3-LargeHighDefinition.jpg"
  }
];

export default data;
