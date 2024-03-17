import React from 'react'
import Logo from "@assets/images/logo/logo.svg"
import { useForm } from "@hooks"
import FormInput from "@forms/FormInput/FormInput"
import CustomButton from "@forms/CustomButton/CustomButton"
import FormCheckbox from "@forms/FormCheckbox/FormCheckbox"
import FormMobile from "@forms/FormMobile/FormMobile"
import FormSelect from "@forms/FormSelect/FormSelect"

const Login = () => {
  const getDateYear = () => {
    return new Date().getFullYear()
  }
  const {
    handleSubmit,
    formData,
    formLoading,
    handleInputChange,
    handleCheckBoxChange,
    handleSelectChange
  } = useForm({
    onSubmitCallback: () => { console.log(formData) }
  })

  const testOptions = [
    {
      "id": 1,
      "iso2": "AF",
      "iso3": "AFG",
      "name": "Afghanistan",
      "countrycode": 93
    },
    {
      "id": 2,
      "iso2": "AX",
      "iso3": "ALA",
      "name": "Aland Islands",
      "countrycode": 358
    },
    {
      "id": 3,
      "iso2": "AL",
      "iso3": "ALB",
      "name": "Albania",
      "countrycode": 355
    },
    {
      "id": 4,
      "iso2": "DZ",
      "iso3": "DZA",
      "name": "Algeria",
      "countrycode": 213
    },
    {
      "id": 5,
      "iso2": "AS",
      "iso3": "ASM",
      "name": "American Samoa",
      "countrycode": 1684
    },
    {
      "id": 6,
      "iso2": "AD",
      "iso3": "AND",
      "name": "Andorra",
      "countrycode": 376
    },
    {
      "id": 7,
      "iso2": "AO",
      "iso3": "AGO",
      "name": "Angola",
      "countrycode": 244
    },
    {
      "id": 8,
      "iso2": "AI",
      "iso3": "AIA",
      "name": "Anguilla",
      "countrycode": 1264
    },
    {
      "id": 9,
      "iso2": "AQ",
      "iso3": "ATA",
      "name": "Antarctica",
      "countrycode": 672
    },
    {
      "id": 10,
      "iso2": "AG",
      "iso3": "ATG",
      "name": "Antigua and Barbuda",
      "countrycode": 1268
    },
    {
      "id": 11,
      "iso2": "AR",
      "iso3": "ARG",
      "name": "Argentina",
      "countrycode": 54
    },
    {
      "id": 12,
      "iso2": "AM",
      "iso3": "ARM",
      "name": "Armenia",
      "countrycode": 374
    },
    {
      "id": 13,
      "iso2": "AW",
      "iso3": "ABW",
      "name": "Aruba",
      "countrycode": 297
    },
    {
      "id": 14,
      "iso2": "AU",
      "iso3": "AUS",
      "name": "Australia",
      "countrycode": 61
    },
    {
      "id": 15,
      "iso2": "AT",
      "iso3": "AUT",
      "name": "Austria",
      "countrycode": 43
    },
    {
      "id": 16,
      "iso2": "AZ",
      "iso3": "AZE",
      "name": "Azerbaijan",
      "countrycode": 994
    },
    {
      "id": 17,
      "iso2": "BS",
      "iso3": "BHS",
      "name": "Bahamas",
      "countrycode": 1242
    },
    {
      "id": 18,
      "iso2": "BH",
      "iso3": "BHR",
      "name": "Bahrain",
      "countrycode": 973
    },
    {
      "id": 19,
      "iso2": "BD",
      "iso3": "BGD",
      "name": "Bangladesh",
      "countrycode": 880
    },
    {
      "id": 20,
      "iso2": "BB",
      "iso3": "BRB",
      "name": "Barbados",
      "countrycode": 1246
    },
    {
      "id": 21,
      "iso2": "BY",
      "iso3": "BLR",
      "name": "Belarus",
      "countrycode": 375
    },
    {
      "id": 22,
      "iso2": "BE",
      "iso3": "BEL",
      "name": "Belgium",
      "countrycode": 32
    },
    {
      "id": 23,
      "iso2": "BZ",
      "iso3": "BLZ",
      "name": "Belize",
      "countrycode": 501
    },
    {
      "id": 24,
      "iso2": "BJ",
      "iso3": "BEN",
      "name": "Benin",
      "countrycode": 229
    },
    {
      "id": 25,
      "iso2": "BM",
      "iso3": "BMU",
      "name": "Bermuda",
      "countrycode": 1441
    },
    {
      "id": 26,
      "iso2": "BT",
      "iso3": "BTN",
      "name": "Bhutan",
      "countrycode": 975
    },
    {
      "id": 27,
      "iso2": "BO",
      "iso3": "BOL",
      "name": "Bolivia",
      "countrycode": 591
    },
    {
      "id": 28,
      "iso2": "BQ",
      "iso3": "BES",
      "name": "Bonaire, Sint Eustatius and Saba",
      "countrycode": 599
    },
    {
      "id": 29,
      "iso2": "BA",
      "iso3": "BIH",
      "name": "Bosnia and Herzegovina",
      "countrycode": 387
    },
    {
      "id": 30,
      "iso2": "BW",
      "iso3": "BWA",
      "name": "Botswana",
      "countrycode": 267
    },
    {
      "id": 31,
      "iso2": "BV",
      "iso3": "BVT",
      "name": "Bouvet Island",
      "countrycode": 55
    },
    {
      "id": 32,
      "iso2": "BR",
      "iso3": "BRA",
      "name": "Brazil",
      "countrycode": 55
    },
    {
      "id": 33,
      "iso2": "IO",
      "iso3": "IOT",
      "name": "British Indian Ocean Territory",
      "countrycode": 246
    },
    {
      "id": 34,
      "iso2": "BN",
      "iso3": "BRN",
      "name": "Brunei Darussalam",
      "countrycode": 673
    },
    {
      "id": 35,
      "iso2": "BG",
      "iso3": "BGR",
      "name": "Bulgaria",
      "countrycode": 359
    },
    {
      "id": 36,
      "iso2": "BF",
      "iso3": "BFA",
      "name": "Burkina Faso",
      "countrycode": 226
    },
    {
      "id": 37,
      "iso2": "BI",
      "iso3": "BDI",
      "name": "Burundi",
      "countrycode": 257
    },
    {
      "id": 38,
      "iso2": "KH",
      "iso3": "KHM",
      "name": "Cambodia",
      "countrycode": 855
    },
    {
      "id": 39,
      "iso2": "CM",
      "iso3": "CMR",
      "name": "Cameroon",
      "countrycode": 237
    },
    {
      "id": 40,
      "iso2": "CA",
      "iso3": "CAN",
      "name": "Canada",
      "countrycode": 1
    },
    {
      "id": 41,
      "iso2": "CV",
      "iso3": "CPV",
      "name": "Cape Verde",
      "countrycode": 238
    },
    {
      "id": 42,
      "iso2": "KY",
      "iso3": "CYM",
      "name": "Cayman Islands",
      "countrycode": 1345
    },
    {
      "id": 43,
      "iso2": "CF",
      "iso3": "CAF",
      "name": "Central African Republic",
      "countrycode": 236
    },
    {
      "id": 44,
      "iso2": "TD",
      "iso3": "TCD",
      "name": "Chad",
      "countrycode": 235
    },
    {
      "id": 45,
      "iso2": "CL",
      "iso3": "CHL",
      "name": "Chile",
      "countrycode": 56
    },
    {
      "id": 46,
      "iso2": "CN",
      "iso3": "CHN",
      "name": "China",
      "countrycode": 86
    },
    {
      "id": 47,
      "iso2": "CX",
      "iso3": "CXR",
      "name": "Christmas Island",
      "countrycode": 61
    },
    {
      "id": 48,
      "iso2": "CC",
      "iso3": "CCK",
      "name": "Cocos (Keeling) Islands",
      "countrycode": 672
    },
    {
      "id": 49,
      "iso2": "CO",
      "iso3": "COL",
      "name": "Colombia",
      "countrycode": 57
    },
    {
      "id": 50,
      "iso2": "KM",
      "iso3": "COM",
      "name": "Comoros",
      "countrycode": 269
    },
    {
      "id": 51,
      "iso2": "CG",
      "iso3": "COG",
      "name": "Congo",
      "countrycode": 242
    },
    {
      "id": 52,
      "iso2": "CD",
      "iso3": "COD",
      "name": "Congo, Democratic Republic of the Congo",
      "countrycode": 242
    },
    {
      "id": 53,
      "iso2": "CK",
      "iso3": "COK",
      "name": "Cook Islands",
      "countrycode": 682
    },
    {
      "id": 54,
      "iso2": "CR",
      "iso3": "CRI",
      "name": "Costa Rica",
      "countrycode": 506
    },
    {
      "id": 55,
      "iso2": "CI",
      "iso3": "CIV",
      "name": "Cote D&#39;Ivoire",
      "countrycode": 225
    },
    {
      "id": 56,
      "iso2": "HR",
      "iso3": "HRV",
      "name": "Croatia",
      "countrycode": 385
    },
    {
      "id": 57,
      "iso2": "CU",
      "iso3": "CUB",
      "name": "Cuba",
      "countrycode": 53
    },
    {
      "id": 58,
      "iso2": "CW",
      "iso3": "CUW",
      "name": "Curacao",
      "countrycode": 599
    },
    {
      "id": 59,
      "iso2": "CY",
      "iso3": "CYP",
      "name": "Cyprus",
      "countrycode": 357
    },
    {
      "id": 60,
      "iso2": "CZ",
      "iso3": "CZE",
      "name": "Czech Republic",
      "countrycode": 420
    },
    {
      "id": 61,
      "iso2": "DK",
      "iso3": "DNK",
      "name": "Denmark",
      "countrycode": 45
    },
    {
      "id": 62,
      "iso2": "DJ",
      "iso3": "DJI",
      "name": "Djibouti",
      "countrycode": 253
    },
    {
      "id": 63,
      "iso2": "DM",
      "iso3": "DMA",
      "name": "Dominica",
      "countrycode": 1767
    },
    {
      "id": 64,
      "iso2": "DO",
      "iso3": "DOM",
      "name": "Dominican Republic",
      "countrycode": 1809
    },
    {
      "id": 65,
      "iso2": "EC",
      "iso3": "ECU",
      "name": "Ecuador",
      "countrycode": 593
    },
    {
      "id": 66,
      "iso2": "EG",
      "iso3": "EGY",
      "name": "Egypt",
      "countrycode": 20
    },
    {
      "id": 67,
      "iso2": "SV",
      "iso3": "SLV",
      "name": "El Salvador",
      "countrycode": 503
    },
    {
      "id": 68,
      "iso2": "GQ",
      "iso3": "GNQ",
      "name": "Equatorial Guinea",
      "countrycode": 240
    },
    {
      "id": 69,
      "iso2": "ER",
      "iso3": "ERI",
      "name": "Eritrea",
      "countrycode": 291
    },
    {
      "id": 70,
      "iso2": "EE",
      "iso3": "EST",
      "name": "Estonia",
      "countrycode": 372
    },
    {
      "id": 71,
      "iso2": "ET",
      "iso3": "ETH",
      "name": "Ethiopia",
      "countrycode": 251
    },
    {
      "id": 72,
      "iso2": "FK",
      "iso3": "FLK",
      "name": "Falkland Islands (Malvinas)",
      "countrycode": 500
    },
    {
      "id": 73,
      "iso2": "FO",
      "iso3": "FRO",
      "name": "Faroe Islands",
      "countrycode": 298
    },
    {
      "id": 74,
      "iso2": "FJ",
      "iso3": "FJI",
      "name": "Fiji",
      "countrycode": 679
    },
    {
      "id": 75,
      "iso2": "FI",
      "iso3": "FIN",
      "name": "Finland",
      "countrycode": 358
    },
    {
      "id": 76,
      "iso2": "FR",
      "iso3": "FRA",
      "name": "France",
      "countrycode": 33
    },
    {
      "id": 77,
      "iso2": "GF",
      "iso3": "GUF",
      "name": "French Guiana",
      "countrycode": 594
    },
    {
      "id": 78,
      "iso2": "PF",
      "iso3": "PYF",
      "name": "French Polynesia",
      "countrycode": 689
    },
    {
      "id": 79,
      "iso2": "TF",
      "iso3": "ATF",
      "name": "French Southern Territories",
      "countrycode": 262
    },
    {
      "id": 80,
      "iso2": "GA",
      "iso3": "GAB",
      "name": "Gabon",
      "countrycode": 241
    },
    {
      "id": 81,
      "iso2": "GM",
      "iso3": "GMB",
      "name": "Gambia",
      "countrycode": 220
    },
    {
      "id": 82,
      "iso2": "GE",
      "iso3": "GEO",
      "name": "Georgia",
      "countrycode": 995
    },
    {
      "id": 83,
      "iso2": "DE",
      "iso3": "DEU",
      "name": "Germany",
      "countrycode": 49
    },
    {
      "id": 84,
      "iso2": "GH",
      "iso3": "GHA",
      "name": "Ghana",
      "countrycode": 233
    },
    {
      "id": 85,
      "iso2": "GI",
      "iso3": "GIB",
      "name": "Gibraltar",
      "countrycode": 350
    },
    {
      "id": 86,
      "iso2": "GR",
      "iso3": "GRC",
      "name": "Greece",
      "countrycode": 30
    },
    {
      "id": 87,
      "iso2": "GL",
      "iso3": "GRL",
      "name": "Greenland",
      "countrycode": 299
    },
    {
      "id": 88,
      "iso2": "GD",
      "iso3": "GRD",
      "name": "Grenada",
      "countrycode": 1473
    },
    {
      "id": 89,
      "iso2": "GP",
      "iso3": "GLP",
      "name": "Guadeloupe",
      "countrycode": 590
    },
    {
      "id": 90,
      "iso2": "GU",
      "iso3": "GUM",
      "name": "Guam",
      "countrycode": 1671
    },
    {
      "id": 91,
      "iso2": "GT",
      "iso3": "GTM",
      "name": "Guatemala",
      "countrycode": 502
    },
    {
      "id": 92,
      "iso2": "GG",
      "iso3": "GGY",
      "name": "Guernsey",
      "countrycode": 44
    },
    {
      "id": 93,
      "iso2": "GN",
      "iso3": "GIN",
      "name": "Guinea",
      "countrycode": 224
    },
    {
      "id": 94,
      "iso2": "GW",
      "iso3": "GNB",
      "name": "Guinea-Bissau",
      "countrycode": 245
    },
    {
      "id": 95,
      "iso2": "GY",
      "iso3": "GUY",
      "name": "Guyana",
      "countrycode": 592
    },
    {
      "id": 96,
      "iso2": "HT",
      "iso3": "HTI",
      "name": "Haiti",
      "countrycode": 509
    },
    {
      "id": 97,
      "iso2": "HM",
      "iso3": "HMD",
      "name": "Heard Island and Mcdonald Islands",
      "countrycode": 0
    },
    {
      "id": 98,
      "iso2": "VA",
      "iso3": "VAT",
      "name": "Holy See (Vatican City State)",
      "countrycode": 39
    },
    {
      "id": 99,
      "iso2": "HN",
      "iso3": "HND",
      "name": "Honduras",
      "countrycode": 504
    },
    {
      "id": 100,
      "iso2": "HK",
      "iso3": "HKG",
      "name": "Hong Kong",
      "countrycode": 852
    },
    {
      "id": 101,
      "iso2": "HU",
      "iso3": "HUN",
      "name": "Hungary",
      "countrycode": 36
    },
    {
      "id": 102,
      "iso2": "IS",
      "iso3": "ISL",
      "name": "Iceland",
      "countrycode": 354
    },
    {
      "id": 103,
      "iso2": "IN",
      "iso3": "IND",
      "name": "India",
      "countrycode": 91
    },
    {
      "id": 104,
      "iso2": "ID",
      "iso3": "IDN",
      "name": "Indonesia",
      "countrycode": 62
    },
    {
      "id": 105,
      "iso2": "IR",
      "iso3": "IRN",
      "name": "Iran, Islamic Republic of",
      "countrycode": 98
    },
    {
      "id": 106,
      "iso2": "IQ",
      "iso3": "IRQ",
      "name": "Iraq",
      "countrycode": 964
    },
    {
      "id": 107,
      "iso2": "IE",
      "iso3": "IRL",
      "name": "Ireland",
      "countrycode": 353
    },
    {
      "id": 108,
      "iso2": "IM",
      "iso3": "IMN",
      "name": "Isle of Man",
      "countrycode": 44
    },
    {
      "id": 109,
      "iso2": "IL",
      "iso3": "ISR",
      "name": "Israel",
      "countrycode": 972
    },
    {
      "id": 110,
      "iso2": "IT",
      "iso3": "ITA",
      "name": "Italy",
      "countrycode": 39
    },
    {
      "id": 111,
      "iso2": "JM",
      "iso3": "JAM",
      "name": "Jamaica",
      "countrycode": 1876
    },
    {
      "id": 112,
      "iso2": "JP",
      "iso3": "JPN",
      "name": "Japan",
      "countrycode": 81
    },
    {
      "id": 113,
      "iso2": "JE",
      "iso3": "JEY",
      "name": "Jersey",
      "countrycode": 44
    },
    {
      "id": 114,
      "iso2": "JO",
      "iso3": "JOR",
      "name": "Jordan",
      "countrycode": 962
    },
    {
      "id": 115,
      "iso2": "KZ",
      "iso3": "KAZ",
      "name": "Kazakhstan",
      "countrycode": 7
    },
    {
      "id": 116,
      "iso2": "KE",
      "iso3": "KEN",
      "name": "Kenya",
      "countrycode": 254
    },
    {
      "id": 117,
      "iso2": "KI",
      "iso3": "KIR",
      "name": "Kiribati",
      "countrycode": 686
    },
    {
      "id": 118,
      "iso2": "KP",
      "iso3": "PRK",
      "name": "Korea, Democratic People&#39;s Republic of",
      "countrycode": 850
    },
    {
      "id": 119,
      "iso2": "KR",
      "iso3": "KOR",
      "name": "Korea, Republic of",
      "countrycode": 82
    },
    {
      "id": 120,
      "iso2": "XK",
      "iso3": "XKX",
      "name": "Kosovo",
      "countrycode": 381
    },
    {
      "id": 121,
      "iso2": "KW",
      "iso3": "KWT",
      "name": "Kuwait",
      "countrycode": 965
    },
    {
      "id": 122,
      "iso2": "KG",
      "iso3": "KGZ",
      "name": "Kyrgyzstan",
      "countrycode": 996
    },
    {
      "id": 123,
      "iso2": "LA",
      "iso3": "LAO",
      "name": "Lao People&#39;s Democratic Republic",
      "countrycode": 856
    },
    {
      "id": 124,
      "iso2": "LV",
      "iso3": "LVA",
      "name": "Latvia",
      "countrycode": 371
    },
    {
      "id": 125,
      "iso2": "LB",
      "iso3": "LBN",
      "name": "Lebanon",
      "countrycode": 961
    },
    {
      "id": 126,
      "iso2": "LS",
      "iso3": "LSO",
      "name": "Lesotho",
      "countrycode": 266
    },
    {
      "id": 127,
      "iso2": "LR",
      "iso3": "LBR",
      "name": "Liberia",
      "countrycode": 231
    },
    {
      "id": 128,
      "iso2": "LY",
      "iso3": "LBY",
      "name": "Libyan Arab Jamahiriya",
      "countrycode": 218
    },
    {
      "id": 129,
      "iso2": "LI",
      "iso3": "LIE",
      "name": "Liechtenstein",
      "countrycode": 423
    },
    {
      "id": 130,
      "iso2": "LT",
      "iso3": "LTU",
      "name": "Lithuania",
      "countrycode": 370
    },
    {
      "id": 131,
      "iso2": "LU",
      "iso3": "LUX",
      "name": "Luxembourg",
      "countrycode": 352
    },
    {
      "id": 132,
      "iso2": "MO",
      "iso3": "MAC",
      "name": "Macao",
      "countrycode": 853
    },
    {
      "id": 133,
      "iso2": "MK",
      "iso3": "MKD",
      "name": "Macedonia, the Former Yugoslav Republic of",
      "countrycode": 389
    },
    {
      "id": 134,
      "iso2": "MG",
      "iso3": "MDG",
      "name": "Madagascar",
      "countrycode": 261
    },
    {
      "id": 135,
      "iso2": "MW",
      "iso3": "MWI",
      "name": "Malawi",
      "countrycode": 265
    },
    {
      "id": 136,
      "iso2": "MY",
      "iso3": "MYS",
      "name": "Malaysia",
      "countrycode": 60
    },
    {
      "id": 137,
      "iso2": "MV",
      "iso3": "MDV",
      "name": "Maldives",
      "countrycode": 960
    },
    {
      "id": 138,
      "iso2": "ML",
      "iso3": "MLI",
      "name": "Mali",
      "countrycode": 223
    },
    {
      "id": 139,
      "iso2": "MT",
      "iso3": "MLT",
      "name": "Malta",
      "countrycode": 356
    },
    {
      "id": 140,
      "iso2": "MH",
      "iso3": "MHL",
      "name": "Marshall Islands",
      "countrycode": 692
    },
    {
      "id": 141,
      "iso2": "MQ",
      "iso3": "MTQ",
      "name": "Martinique",
      "countrycode": 596
    },
    {
      "id": 142,
      "iso2": "MR",
      "iso3": "MRT",
      "name": "Mauritania",
      "countrycode": 222
    },
    {
      "id": 143,
      "iso2": "MU",
      "iso3": "MUS",
      "name": "Mauritius",
      "countrycode": 230
    },
    {
      "id": 144,
      "iso2": "YT",
      "iso3": "MYT",
      "name": "Mayotte",
      "countrycode": 269
    },
    {
      "id": 145,
      "iso2": "MX",
      "iso3": "MEX",
      "name": "Mexico",
      "countrycode": 52
    },
    {
      "id": 146,
      "iso2": "FM",
      "iso3": "FSM",
      "name": "Micronesia, Federated States of",
      "countrycode": 691
    },
    {
      "id": 147,
      "iso2": "MD",
      "iso3": "MDA",
      "name": "Moldova, Republic of",
      "countrycode": 373
    },
    {
      "id": 148,
      "iso2": "MC",
      "iso3": "MCO",
      "name": "Monaco",
      "countrycode": 377
    },
    {
      "id": 149,
      "iso2": "MN",
      "iso3": "MNG",
      "name": "Mongolia",
      "countrycode": 976
    },
    {
      "id": 150,
      "iso2": "ME",
      "iso3": "MNE",
      "name": "Montenegro",
      "countrycode": 382
    },
    {
      "id": 151,
      "iso2": "MS",
      "iso3": "MSR",
      "name": "Montserrat",
      "countrycode": 1664
    },
    {
      "id": 152,
      "iso2": "MA",
      "iso3": "MAR",
      "name": "Morocco",
      "countrycode": 212
    },
    {
      "id": 153,
      "iso2": "MZ",
      "iso3": "MOZ",
      "name": "Mozambique",
      "countrycode": 258
    },
    {
      "id": 154,
      "iso2": "MM",
      "iso3": "MMR",
      "name": "Myanmar",
      "countrycode": 95
    },
    {
      "id": 155,
      "iso2": "NA",
      "iso3": "NAM",
      "name": "Namibia",
      "countrycode": 264
    },
    {
      "id": 156,
      "iso2": "NR",
      "iso3": "NRU",
      "name": "Nauru",
      "countrycode": 674
    },
    {
      "id": 157,
      "iso2": "NP",
      "iso3": "NPL",
      "name": "Nepal",
      "countrycode": 977
    },
    {
      "id": 158,
      "iso2": "NL",
      "iso3": "NLD",
      "name": "Netherlands",
      "countrycode": 31
    },
    {
      "id": 159,
      "iso2": "AN",
      "iso3": "ANT",
      "name": "Netherlands Antilles",
      "countrycode": 599
    },
    {
      "id": 160,
      "iso2": "NC",
      "iso3": "NCL",
      "name": "New Caledonia",
      "countrycode": 687
    },
    {
      "id": 161,
      "iso2": "NZ",
      "iso3": "NZL",
      "name": "New Zealand",
      "countrycode": 64
    },
    {
      "id": 162,
      "iso2": "NI",
      "iso3": "NIC",
      "name": "Nicaragua",
      "countrycode": 505
    },
    {
      "id": 163,
      "iso2": "NE",
      "iso3": "NER",
      "name": "Niger",
      "countrycode": 227
    },
    {
      "id": 164,
      "iso2": "NG",
      "iso3": "NGA",
      "name": "Nigeria",
      "countrycode": 234
    },
    {
      "id": 165,
      "iso2": "NU",
      "iso3": "NIU",
      "name": "Niue",
      "countrycode": 683
    },
    {
      "id": 166,
      "iso2": "NF",
      "iso3": "NFK",
      "name": "Norfolk Island",
      "countrycode": 672
    },
    {
      "id": 167,
      "iso2": "MP",
      "iso3": "MNP",
      "name": "Northern Mariana Islands",
      "countrycode": 1670
    },
    {
      "id": 168,
      "iso2": "NO",
      "iso3": "NOR",
      "name": "Norway",
      "countrycode": 47
    },
    {
      "id": 169,
      "iso2": "OM",
      "iso3": "OMN",
      "name": "Oman",
      "countrycode": 968
    },
    {
      "id": 170,
      "iso2": "PK",
      "iso3": "PAK",
      "name": "Pakistan",
      "countrycode": 92
    },
    {
      "id": 171,
      "iso2": "PW",
      "iso3": "PLW",
      "name": "Palau",
      "countrycode": 680
    },
    {
      "id": 172,
      "iso2": "PS",
      "iso3": "PSE",
      "name": "Palestinian Territory, Occupied",
      "countrycode": 970
    },
    {
      "id": 173,
      "iso2": "PA",
      "iso3": "PAN",
      "name": "Panama",
      "countrycode": 507
    },
    {
      "id": 174,
      "iso2": "PG",
      "iso3": "PNG",
      "name": "Papua New Guinea",
      "countrycode": 675
    },
    {
      "id": 175,
      "iso2": "PY",
      "iso3": "PRY",
      "name": "Paraguay",
      "countrycode": 595
    },
    {
      "id": 176,
      "iso2": "PE",
      "iso3": "PER",
      "name": "Peru",
      "countrycode": 51
    },
    {
      "id": 177,
      "iso2": "PH",
      "iso3": "PHL",
      "name": "Philippines",
      "countrycode": 63
    },
    {
      "id": 178,
      "iso2": "PN",
      "iso3": "PCN",
      "name": "Pitcairn",
      "countrycode": 64
    },
    {
      "id": 179,
      "iso2": "PL",
      "iso3": "POL",
      "name": "Poland",
      "countrycode": 48
    },
    {
      "id": 180,
      "iso2": "PT",
      "iso3": "PRT",
      "name": "Portugal",
      "countrycode": 351
    },
    {
      "id": 181,
      "iso2": "PR",
      "iso3": "PRI",
      "name": "Puerto Rico",
      "countrycode": 1
    },
    {
      "id": 182,
      "iso2": "QA",
      "iso3": "QAT",
      "name": "Qatar",
      "countrycode": 974
    },
    {
      "id": 183,
      "iso2": "RE",
      "iso3": "REU",
      "name": "Reunion",
      "countrycode": 262
    },
    {
      "id": 184,
      "iso2": "RO",
      "iso3": "ROM",
      "name": "Romania",
      "countrycode": 40
    },
    {
      "id": 185,
      "iso2": "RU",
      "iso3": "RUS",
      "name": "Russian Federation",
      "countrycode": 70
    },
    {
      "id": 186,
      "iso2": "RW",
      "iso3": "RWA",
      "name": "Rwanda",
      "countrycode": 250
    },
    {
      "id": 187,
      "iso2": "BL",
      "iso3": "BLM",
      "name": "Saint Barthelemy",
      "countrycode": 590
    },
    {
      "id": 188,
      "iso2": "SH",
      "iso3": "SHN",
      "name": "Saint Helena",
      "countrycode": 290
    },
    {
      "id": 189,
      "iso2": "KN",
      "iso3": "KNA",
      "name": "Saint Kitts and Nevis",
      "countrycode": 1869
    },
    {
      "id": 190,
      "iso2": "LC",
      "iso3": "LCA",
      "name": "Saint Lucia",
      "countrycode": 1758
    },
    {
      "id": 191,
      "iso2": "MF",
      "iso3": "MAF",
      "name": "Saint Martin",
      "countrycode": 590
    },
    {
      "id": 192,
      "iso2": "PM",
      "iso3": "SPM",
      "name": "Saint Pierre and Miquelon",
      "countrycode": 508
    },
    {
      "id": 193,
      "iso2": "VC",
      "iso3": "VCT",
      "name": "Saint Vincent and the Grenadines",
      "countrycode": 1784
    },
    {
      "id": 194,
      "iso2": "WS",
      "iso3": "WSM",
      "name": "Samoa",
      "countrycode": 684
    },
    {
      "id": 195,
      "iso2": "SM",
      "iso3": "SMR",
      "name": "San Marino",
      "countrycode": 378
    },
    {
      "id": 196,
      "iso2": "ST",
      "iso3": "STP",
      "name": "Sao Tome and Principe",
      "countrycode": 239
    },
    {
      "id": 197,
      "iso2": "SA",
      "iso3": "SAU",
      "name": "Saudi Arabia",
      "countrycode": 966
    },
    {
      "id": 198,
      "iso2": "SN",
      "iso3": "SEN",
      "name": "Senegal",
      "countrycode": 221
    },
    {
      "id": 199,
      "iso2": "RS",
      "iso3": "SRB",
      "name": "Serbia",
      "countrycode": 381
    },
    {
      "id": 200,
      "iso2": "CS",
      "iso3": "SCG",
      "name": "Serbia and Montenegro",
      "countrycode": 381
    },
    {
      "id": 201,
      "iso2": "SC",
      "iso3": "SYC",
      "name": "Seychelles",
      "countrycode": 248
    },
    {
      "id": 202,
      "iso2": "SL",
      "iso3": "SLE",
      "name": "Sierra Leone",
      "countrycode": 232
    },
    {
      "id": 203,
      "iso2": "SG",
      "iso3": "SGP",
      "name": "Singapore",
      "countrycode": 65
    },
    {
      "id": 204,
      "iso2": "SX",
      "iso3": "SXM",
      "name": "Sint Maarten",
      "countrycode": 1
    },
    {
      "id": 205,
      "iso2": "SK",
      "iso3": "SVK",
      "name": "Slovakia",
      "countrycode": 421
    },
    {
      "id": 206,
      "iso2": "SI",
      "iso3": "SVN",
      "name": "Slovenia",
      "countrycode": 386
    },
    {
      "id": 207,
      "iso2": "SB",
      "iso3": "SLB",
      "name": "Solomon Islands",
      "countrycode": 677
    },
    {
      "id": 208,
      "iso2": "SO",
      "iso3": "SOM",
      "name": "Somalia",
      "countrycode": 252
    },
    {
      "id": 209,
      "iso2": "ZA",
      "iso3": "ZAF",
      "name": "South Africa",
      "countrycode": 27
    },
    {
      "id": 210,
      "iso2": "GS",
      "iso3": "SGS",
      "name": "South Georgia and the South Sandwich Islands",
      "countrycode": 500
    },
    {
      "id": 211,
      "iso2": "SS",
      "iso3": "SSD",
      "name": "South Sudan",
      "countrycode": 211
    },
    {
      "id": 212,
      "iso2": "ES",
      "iso3": "ESP",
      "name": "Spain",
      "countrycode": 34
    },
    {
      "id": 213,
      "iso2": "LK",
      "iso3": "LKA",
      "name": "Sri Lanka",
      "countrycode": 94
    },
    {
      "id": 214,
      "iso2": "SD",
      "iso3": "SDN",
      "name": "Sudan",
      "countrycode": 249
    },
    {
      "id": 215,
      "iso2": "SR",
      "iso3": "SUR",
      "name": "Suriname",
      "countrycode": 597
    },
    {
      "id": 216,
      "iso2": "SJ",
      "iso3": "SJM",
      "name": "Svalbard and Jan Mayen",
      "countrycode": 47
    },
    {
      "id": 217,
      "iso2": "SZ",
      "iso3": "SWZ",
      "name": "Swaziland",
      "countrycode": 268
    },
    {
      "id": 218,
      "iso2": "SE",
      "iso3": "SWE",
      "name": "Sweden",
      "countrycode": 46
    },
    {
      "id": 219,
      "iso2": "CH",
      "iso3": "CHE",
      "name": "Switzerland",
      "countrycode": 41
    },
    {
      "id": 220,
      "iso2": "SY",
      "iso3": "SYR",
      "name": "Syrian Arab Republic",
      "countrycode": 963
    },
    {
      "id": 221,
      "iso2": "TW",
      "iso3": "TWN",
      "name": "Taiwan",
      "countrycode": 886
    },
    {
      "id": 222,
      "iso2": "TJ",
      "iso3": "TJK",
      "name": "Tajikistan",
      "countrycode": 992
    },
    {
      "id": 223,
      "iso2": "TZ",
      "iso3": "TZA",
      "name": "Tanzania, United Republic of",
      "countrycode": 255
    },
    {
      "id": 224,
      "iso2": "TH",
      "iso3": "THA",
      "name": "Thailand",
      "countrycode": 66
    },
    {
      "id": 225,
      "iso2": "TL",
      "iso3": "TLS",
      "name": "Timor-Leste",
      "countrycode": 670
    },
    {
      "id": 226,
      "iso2": "TG",
      "iso3": "TGO",
      "name": "Togo",
      "countrycode": 228
    },
    {
      "id": 227,
      "iso2": "TK",
      "iso3": "TKL",
      "name": "Tokelau",
      "countrycode": 690
    },
    {
      "id": 228,
      "iso2": "TO",
      "iso3": "TON",
      "name": "Tonga",
      "countrycode": 676
    },
    {
      "id": 229,
      "iso2": "TT",
      "iso3": "TTO",
      "name": "Trinidad and Tobago",
      "countrycode": 1868
    },
    {
      "id": 230,
      "iso2": "TN",
      "iso3": "TUN",
      "name": "Tunisia",
      "countrycode": 216
    },
    {
      "id": 231,
      "iso2": "TR",
      "iso3": "TUR",
      "name": "Turkey",
      "countrycode": 90
    },
    {
      "id": 232,
      "iso2": "TM",
      "iso3": "TKM",
      "name": "Turkmenistan",
      "countrycode": 7370
    },
    {
      "id": 233,
      "iso2": "TC",
      "iso3": "TCA",
      "name": "Turks and Caicos Islands",
      "countrycode": 1649
    },
    {
      "id": 234,
      "iso2": "TV",
      "iso3": "TUV",
      "name": "Tuvalu",
      "countrycode": 688
    },
    {
      "id": 235,
      "iso2": "UG",
      "iso3": "UGA",
      "name": "Uganda",
      "countrycode": 256
    },
    {
      "id": 236,
      "iso2": "UA",
      "iso3": "UKR",
      "name": "Ukraine",
      "countrycode": 380
    },
    {
      "id": 237,
      "iso2": "AE",
      "iso3": "ARE",
      "name": "United Arab Emirates",
      "countrycode": 971
    },
    {
      "id": 238,
      "iso2": "GB",
      "iso3": "GBR",
      "name": "United Kingdom",
      "countrycode": 44
    },
    {
      "id": 239,
      "iso2": "US",
      "iso3": "USA",
      "name": "United States",
      "countrycode": 1
    },
    {
      "id": 240,
      "iso2": "UM",
      "iso3": "UMI",
      "name": "United States Minor Outlying Islands",
      "countrycode": 1
    },
    {
      "id": 241,
      "iso2": "UY",
      "iso3": "URY",
      "name": "Uruguay",
      "countrycode": 598
    },
    {
      "id": 242,
      "iso2": "UZ",
      "iso3": "UZB",
      "name": "Uzbekistan",
      "countrycode": 998
    },
    {
      "id": 243,
      "iso2": "VU",
      "iso3": "VUT",
      "name": "Vanuatu",
      "countrycode": 678
    },
    {
      "id": 244,
      "iso2": "VE",
      "iso3": "VEN",
      "name": "Venezuela",
      "countrycode": 58
    },
    {
      "id": 245,
      "iso2": "VN",
      "iso3": "VNM",
      "name": "Viet Nam",
      "countrycode": 84
    },
    {
      "id": 246,
      "iso2": "VG",
      "iso3": "VGB",
      "name": "Virgin Islands, British",
      "countrycode": 1284
    },
    {
      "id": 247,
      "iso2": "VI",
      "iso3": "VIR",
      "name": "Virgin Islands, U.s.",
      "countrycode": 1340
    },
    {
      "id": 248,
      "iso2": "WF",
      "iso3": "WLF",
      "name": "Wallis and Futuna",
      "countrycode": 681
    },
    {
      "id": 249,
      "iso2": "EH",
      "iso3": "ESH",
      "name": "Western Sahara",
      "countrycode": 212
    },
    {
      "id": 250,
      "iso2": "YE",
      "iso3": "YEM",
      "name": "Yemen",
      "countrycode": 967
    },
    {
      "id": 251,
      "iso2": "ZM",
      "iso3": "ZMB",
      "name": "Zambia",
      "countrycode": 260
    },
    {
      "id": 252,
      "iso2": "ZW",
      "iso3": "ZWE",
      "name": "Zimbabwe",
      "countrycode": 263
    }
  ]
  return (
    <>
      <div className='grid grid-cols-6 h-[100vh]'>
        <div className="col-span-6 md:col-span-3 xl:col-span-2 flex p-4">
          <div className="flex justify-center w-[100vw] flex-col items-center ">
            <div className="flex justify-between flex-col h-[100vh]">
              <div className="login-header flex items-center justify-center mt-4 md:mt-20">
                <div className="me-3">
                  <img src={Logo} alt="" height={50} width={50} />
                </div>
                <div className="font-poppins-bold text-[25px] md:text-[39px] dark:text-white">OP Software Dev</div>
              </div>

              <div className="login-content">
                <div className="flex justify-center items-center flex-col">
                  <div className=" font-poppins-bold text-[23px] dark:text-white">Login</div>
                  <div className="text-secondary">Please enter your details to Sign In</div>
                </div>
                <form className="flex max-w-md flex-col gap-4 mt-[28px]" onSubmit={handleSubmit}>
                  <FormInput
                    handleInputChange={handleInputChange}
                    value={formData?.email ?? ''}
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="admin@opsoftware.dev"
                    // color="warning"
                    required
                    helperText={<>This is not a valid email address.</>}
                  />
                  <FormInput
                    handleInputChange={handleInputChange}
                    value={formData?.password ?? ''}
                    label="Password"
                    name='password'
                    type="password"
                    required
                    // color="success"
                  />
                  <FormMobile
                    inputName="mobile"
                    selectName="country_id"
                    inputValue={formData?.mobile ?? ""}
                    selectValue={formData?.country_id ?? ""}
                    countryNameKey="name"
                    countryFlagKey="iso2"
                    countryCodeKey="countrycode"
                    countryValue="id"
                    options={testOptions}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    required
                  />
                  <FormSelect
                    label="Gender"
                    name="gender"
                    // color="info"
                    optionName="name"
                    value={formData?.gender ?? ""}
                    defaultLabel="Select One"
                    optionValue="id"
                    options={[
                      { name: "Male", id: 1 },
                      { name: "Female", id: 2 },
                    ]}
                    handleSelectChange={handleSelectChange}
                    required
                  />
                  <div className="flex justify-between">
                    <FormCheckbox
                      label="Remember me"
                      name="remember_me"
                      value={formData?.remember_me ?? ""}
                      handleCheckBoxChange={handleCheckBoxChange}
                    />
                    <div className="font-bold text-primary" role="button">Forgot Password?</div>
                  </div>
                  <CustomButton
                    type="submit"
                    isLoading={formLoading}
                  >Submit</CustomButton>
                </form>
              </div>
              <div className="login-footer mb-10 text-center dark:text-white">
                © OP Software Dev {getDateYear()}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-3 xl:col-span-4 bg-gradient-to-b from-primary to-sub-primary dark:from-secondary dark:to-black hidden md:flex">
          <div className="flex justify-between flex-col w-[100vw] text-white">
            <div className=""></div>
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="font-poppins-bold text-[21px] md:text-[30px] lg:text-[65px] text-center">
                  Lorem Ipsum dolor sit.
                </div>
                <div className="mx-10 text-center text-[22px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login