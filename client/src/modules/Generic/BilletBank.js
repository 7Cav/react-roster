//Regimental Staff

const regiCommand = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "9",
  "10",
  "60",
  "62",
  "676",
  "743",
];

//1-7

const oneSevenCommand = ["178", "179", "180", "530"];
const alpha1 = [
  "196",
  "197",
  "198",
  "199",
  "200",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "207",
  "208",
  "209",
  "210",
  "211",
  "212",
  "213",
  "214",
  "215",
  "216",
  "217",
  "218",
  "219",
  "220",
  "221",
  "222",
  "223",
  "224",
  "225",
  "226",
];
const bravo1 = [
  "227",
  "228",
  "229",
  "230",
  "231",
  "232",
  "233",
  "234",
  "235",
  "236",
  "237",
  "238",
  "239",
  "240",
  "241",
  "242",
  "243",
  "244",
  "245",
  "246",
  "247",
  "248",
  "249",
  "250",
  "251",
  "252",
  "253",
  "254",
  "255",
  "256",
  "257",
  "258",
  "259",
  "260",
  "261",
  "262",
  "263",
  "264",
  "265",
  "266",
  "267",
  "268",
  "269",
  "270",
  "271",
  "272",
  "273",
  "274",
  "275",
  "276",
  "277",
  "278",
  "279",
  "280",
  "281",
  "282",
  "283",
  "284",
  "285",
];
const charlie1 = [
  "286",
  "287",
  "288",
  "289",
  "290",
  "291",
  "292",
  "293",
  "294",
  "295",
  "296",
  "297",
  "298",
  "299",
  "300",
  "301",
  "302",
  "303",
  "304",
  "305",
  "306",
  "307",
  "308",
  "309",
  "310",
  "311",
  "312",
  "313",
  "314",
  "315",
  "316",
  "317",
  "318",
  "319",
  "320",
  "321",
  "322",
  "323",
  "324",
  "325",
  "326",
  "327",
  "328",
  "329",
  "330",
  "331",
  "332",
  "333",
  "334",
  "335",
  "336",
  "337",
  "338",
  "339",
  "340",
  "341",
  "342",
  "343",
  "344",
];

//2-7

const twoSevenCommand = ["182", "183", "184"];
const alpha2 = [
  "345",
  "346",
  "347",
  "348",
  "349",
  "350",
  "351",
  "352",
  "353",
  "354",
  "355",
  "356",
  "357",
  "358",
  "359",
  "360",
  "361",
  "362",
  "363",
  "364",
  "365",
  "366",
  "367",
  "368",
  "369",
  "370",
  "371",
  "372",
  "373",
  "374",
  "375",
  "376",
  "377",
  "378",
  "379",
  "380",
  "381",
  "382",
  "383",
  "384",
  "385",
  "386",
  "387",
  "388",
  "389",
  "649",
  "650",
  "651",
  "652",
  "653",
  "654",
];
const bravo2 = [
  "390",
  "391",
  "392",
  "393",
  "394",
  "395",
  "396",
  "397",
  "398",
  "399",
  "400",
  "401",
  "402",
  "403",
  "404",
  "405",
  "406",
  "407",
  "408",
  "409",
  "410",
  "411",
  "412",
  "413",
  "414",
  "415",
  "416",
  "417",
  "418",
  "419",
  "420",
  "421",
  "422",
  "423",
  "424",
  "425",
  "426",
  "427",
  "428",
  "429",
  "430",
  "431",
  "432",
  "433",
  "434",
];
const charlie2 = [
  "435",
  "436",
  "437",
  "438",
  "439",
  "440",
  "441",
  "442",
  "443",
  "444",
  "445",
  "446",
  "447",
  "448",
  "449",
  "450",
  "451",
  "452",
  "453",
  "454",
  "455",
  "456",
  "457",
  "458",
  "459",
  "460",
  "461",
  "462",
  "463",
  "464",
  "465",
  "466",
  "467",
  "468",
  "469",
  "470",
  "471",
  "472",
  "473",
  "474",
  "475",
  "476",
  "477",
  "478",
  "479",
];

//ACD

const acdCommand = ["552", "627", "645", "11"];
const alpha3 = [
  "555",
  "556",
  "557",
  "558",
  "559",
  "560",
  "561",
  "562",
  "563",
  "564",
  "565",
  "566",
  "567",
  "568",
  "569",
  "570",
  "571",
  "572",
  "573",
  "574",
  "683",
  "684",
  "685",
  "686",
  "687",
  "688",
  "689",
  "690",
  "691",
  "692",
  "693",
  "694",
  "695",
  "696",
  "691",
  "760",
  "761",
  "747",
  "748",
  "750",
  "762",
  "763",
  "764",
  "765",
  "766",
  "767",
  "768",
  "769",
  "770",
];
const bravo3 = [
  "590",
  "591",
  "592",
  "593",
  "594",
  "595",
  "596",
  "597",
  "598",
  "599",
  "600",
  "601",
  "602",
  "603",
  "604",
  "605",
  "606",
  "607",
  "608",
  "609",
  "610",
  "611",
  "612",
  "613",
  "614",
  "615",
  "616",
  "617",
  "618",
  "619",
  "620",
  "621",
  "622",
  "623",
  "624",
  "625",
  "626",
];
const charlie3 = [
  "656",
  "657",
  "658",
  "659",
  "660",
  "661",
  "662",
  "663",
  "664",
  "665",
  "666",
  "667",
  "668",
  "669",
  "670",
  "671",
  "672",
];
const delta3 = [
  "538",
  "698",
  "699",
  "700",
  "701",
  "702",
  "704",
  "705",
  "706",
  "712",
  "713",
  "714",
  "715",
  "716",
  "717",
  "718",
  "719",
  "720",
  "707",
  "708",
  "709",
  "710",
  "711",
  "721",
  "722",
  "723",
  "724",
  "725",
  "726",
  "727",
  "728",
  "729",
  "739",
  "740",
  "741",
];
const echo3 = [];
const starterPlatoon = ["759"];
const futureC = ["753"];

//IMO

const imoCommand = ["5", "9"];
const s1 = [
  "7",
  "8",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
];
const s6 = ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
const wag = ["39", "40", "41", "42", "43", "44", "45", "46", "47", "48"];

//ROO

const rooCommand = ["4", "60"];
const rrd = [
  "64",
  "65",
  "577",
  "578",
  "579",
  "580",
  "751",
  "734",
  "736",
  "738",
];
const rtc = ["98", "99", "100", "101", "102", "103"];
const s5 = [
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "739",
  "740",
  "741",
];

//SecOps

const secOpsCommand = ["2", "62"]; //Interesting case for Kleinmen, will need to be renamed to a new billetID if he ever leaves
const jag = ["584"];
const mp = ["168", "169", "170", "171", "172", "173"];
const s2 = ["161", "162", "163", "164", "165", "166"];

//Support

const s3 = [
  "134",
  "135",
  "136",
  "137",
  "138",
  "139",
  "140",
  "141",
  "142",
  "143",
  "144",
  "145",
  "146",
  "147",
  "148",
  "149",
  "150",
  "151",
  "152",
  "153",
  "154",
  "155",
  "156",
  "157",
  "158",
  "159",
  "540",
  "541",
  "542",
  "543",
  "673",
  "674",
  "673",
  "674",
  "675",
  "646",
  "647",
  "648",
];

const s7 = [
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
  "118",
  "119",
  "120",
  "121",
  "122",
  "123",
  "124",
  "125",
  "531",
  "532",
  "533",
  "534",
  "535",
  "536",
  "537",
  "544",
  "545",
  "546",
  "547",
  "548",
  "549",
  "550",
  "551",
  "629",
  "630",
  "631",
  "632",
  "633",
  "634",
  "635",
  "636",
  "637",
  "638",
  "639",
  "640",
  "641",
  "642",
  "643",
  "644",
];
const ld = ["126", "127", "128", "129", "130", "131", "132", "539"];
const spd = ["175", "176"];


//Bulk Billets for export

const regi = {
  positionIds: [regiCommand],
  positionTitles: ['Command Staff']
}
const oneSeven = {
  positionIds: [oneSevenCommand,alpha1,bravo1,charlie1],
  positionTitles: ["1-7 Headquarters", "Alpha Company", "Bravo Troop", "Charlie Company"]
}
const twoSeven = {
  positionIds: [twoSevenCommand,alpha2,bravo2,charlie2],
  positionTitles: ["2-7 Headquarters", "Alpha Company", "Bravo Company", "Charlie Company"]
};

const acd = {
  positionIds: [acdCommand,alpha3,bravo3,charlie3,delta3,echo3,starterPlatoon,futureC],
  positionTitles: ["ACD Headquarters", "Alpha Company", "Bravo Company", "Charlie Company", "Delta Company", "Echo Company", "Star Citizen Starter Platoon", "Future Concepts Center"]
};

const imo = {
  positionIds: [imoCommand,s1,s6,wag],
  positionTitles:["Information Management Command","S1 - Administration","S6 - Information Management", "Wiki Administration Group"]
};

const secOps = {
  positionIds: [secOpsCommand,jag,mp,s2],
  positionTitles: ["Security Operations Command", "Judge Advocate General Corps", "Military Police", "S2 - Intelligence and Security"]
};

const roo = {
  positionIds: [rooCommand,rrd,rtc,s5],
  positionTitles: ["Recruitment Oversight Command","Regimental Recruiting Department","Recruit Training Command", "S5 - Public Relations"]
};

const supportDepartments = {
  positionIds: [spd,s3,s7,ld],
  positionTitles: ["Special Projects Division", "S3 - Operations", "S7 - Training", "Leadership Development"]
}

// Overall export
const billetBankObject = {
  regi: regi,
  oneSeven: oneSeven,
  twoSeven: twoSeven,
  acd: acd,
  imo: imo,
  secOps: secOps,
  roo: roo,
  supportDepartments: supportDepartments
};


//keeping a shortlist of individual exports open so that it doesnt break the Statistics section.

const billetBank = {
  billetBankObject,
  regiCommand,
  oneSevenCommand,
  alpha1,
  bravo1,
  charlie1,
  twoSevenCommand,
  alpha2,
  bravo2,
  charlie2,
  acdCommand,
  alpha3,
  bravo3,
  charlie3,
  delta3,
  echo3,
  starterPlatoon,
};

export default billetBank;
