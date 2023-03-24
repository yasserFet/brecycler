// dark mode local storege
let recomendation = document.querySelectorAll(".nav .recomendation");
let darkModeText = document.querySelectorAll(".darkMode .night-day");
let darkMode = document.querySelectorAll(".darkMode");

if (localStorage.getItem("st") == "true") {
  document.documentElement.style.setProperty("--nightModeColor", "#0e0e0e");
  document.documentElement.style.setProperty("--darkModeColor", "#fff");
  document.documentElement.style.setProperty("--mainHoverColor", "#c3c3c3");
  document.documentElement.style.setProperty("--mainHeader", "#0e0e0e");
  document.documentElement.style.setProperty("--boxesColor", "#171717");
  document.documentElement.style.setProperty("--btnsColor", "#393939");
  document.documentElement.style.setProperty("--dropListColor", "#242424");
  recomendation[0].classList.toggle("on");
  darkModeText[0].innerHTML = "Day mode"
}
if (localStorage.getItem("dm")) {
  darkMode[0].classList.add(localStorage.getItem("dm"));
}
// new announcement slider
let newAnnounceBoes = [
  ...document.querySelectorAll(".new-announcement .container .box")
];
let returnBtn = [...document.querySelectorAll(
  ".new-announcement .container .box .btns .Return"
)]
let NextBtn = document.querySelectorAll(
  ".new-announcement .container .box .btns .next"
);
let AnounceBtn = document.querySelectorAll(
  ".new-announcement .container .box .btns a.Announce"
);

let i = 0;
if (i == 0) {
  returnBtn[0].style.opacity = "0";
  returnBtn[0].style.zIndex = "-2";
}

NextBtn.forEach((rI) => {
  rI.addEventListener("click", () => {
    window.scrollTo({
      top: 30,
      behavior: "smooth"
    });
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    newAnnounceBoes[i].classList.add("activeLeft");
    i += 1;
    newAnnounceBoes[i].classList.add("activeCenter");
    if (i == 4) {
      AnounceBtn[0].classList.remove("Announce");
      NextBtn[4].style.display = "none";
    }
  });
});

returnBtn.forEach((rI) => {
  rI.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    i -= 1; newAnnounceBoes[i].classList.add("activeCenter");
    newAnnounceBoes[i].classList.remove("activeLeft");
  });
});
// the value of the category
let categorySpan = document.querySelectorAll(
  ".new-announcement .container .box .category span"
);

let categorylis = document.querySelectorAll(
  ".new-announcement .container .categories li"
);
categorylis.forEach((li) => {
  li.addEventListener("click", () => {
    categorySpan[0].innerHTML = li.dataset.category;
    categorylis.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    newAnnounceBoes[0].classList.add("activeLeft");
    i++;
    newAnnounceBoes[1].classList.add("activeCenter");
  });
});

// select option
let optionHeader = [
  ...document.querySelectorAll(
    ".new-announcement .container .box form .custemoption"
  )
];
let optionBody = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption ul"
);
let optionI = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .optionHeader i"
);
optionHeader.forEach((el) => {

  el.addEventListener("click", () => {
    let dataOption = el.dataset.option;
    optionBody.forEach((el) => {
      if (el.dataset.option == dataOption) {
        el.classList.toggle("on");
      } else {
        el.classList.add("on");
      }
    });
  });
});
optionHeader.forEach(el => {
  el.addEventListener("click", handleBorder);
  el.addEventListener("click", () => {
    let option = el.dataset.option;
    optionI.forEach(e => {
      if (e.dataset.option == option) {
        e.classList.toggle("animate");
      } else {
        e.classList.remove("animate");
      }
    })
  })
})
function handleBorder() {
  optionHeader.forEach((el) => {
    el.classList.remove("border");
    this.classList.add("border")
  })
}
// // clicking everywhere to hide the dropdomn
document.addEventListener("click", (e) => {
  if (e.target.id !== "on") {
    optionBody.forEach((el) => {
      el.classList.add("on");
    });
    optionHeader.forEach(el => {
      el.classList.remove("border")
    })
    optionI.forEach(i => {
      i.classList.remove("animate");
    })
  } else if (e.target.id == "on") {
    optionBody.forEach((el) => {
      e.target.classList.remove("on");
    });
  }
})
// data management
let PriceUnit = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .unit li"
);
let PriceUnitSpans = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .unit li span"
);

let currencyUnit = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .currency li"
);
let currencyUnitInnerHtml = [...document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .currency li"
)];
let labelUnite = document.querySelectorAll(
  ".new-announcement .container .box form .priceDA"
);
let tilteUnit = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption p"
);
let amountUnit = document.querySelectorAll(
  ".new-announcement .container .Description form .custemoption ul li"
);
let labelAmount = document.querySelectorAll(
  ".new-announcement .container .box form .amountKg"
);
// adding currencies 
var currency_code = ["AFA", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BDT", "BBD", "BYR", "BEF", "BZD", "BMD", "BTN", "BTC", "BOB", "BAM", "BWP", "BRL", "GBP", "BND", "BGN", "BIF", "KHR", "CAD", "CVE", "KYD", "XOF", "XAF", "XPF", "CLP", "CNY", "COP", "KMF", "CDF", "CRC", "HRK", "CUC", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ERN", "EEK", "ETB", "EUR", "FKP", "FJD", "GMD", "GEL", "DEM", "GHS", "GIP", "GRD", "GTQ", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "ITL", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LVL", "LBP", "LSL", "LRD", "LYD", "LTL", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "MXN", "MDL", "MNT", "MAD", "MZM", "MMK", "NAD", "NPR", "ANG", "TWD", "NZD", "NIO", "NGN", "KPW", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SVC", "WST", "SAR", "RSD", "SCR", "SLL", "SGD", "SKK", "SBD", "SOS", "ZAR", "KRW", "XDR", "LKR", "SHP", "SDG", "SRD", "SZL", "SEK", "CHF", "SYP", "STD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "UYU", "USD", "UZS", "VUV", "VEF", "VND", "YER", "ZMK"];
let countriesAdress = document.querySelectorAll(".filter .adress .countriess");

let currencyUnits = document.querySelectorAll(
  ".new-announcement .container .price form .filter .courencies"
);


let filterInputs = document.querySelectorAll(".filter .adress .SearchInput");




for (let a = 0; a < currency_code.length; a++) {
  let checkele = document.createElement("li");
  checkele.classList.add("do");
  checkele.classList.add("do-not");
  checkele.dataset.on = "21"
  currencyUnits[0].appendChild(checkele);
  checkele.innerHTML = currency_code[a];
}
let currencyUnitsLis = document.querySelectorAll(
  ".new-announcement .container .price form .filter .courencies li"
);
let adressFilter = document.querySelectorAll(".filter .adress .counrty");
currencyUnitsLis.forEach(li => {
  let onSet = li.dataset.on;
  li.addEventListener("click", () => {
    PriceUnitSpans.forEach(span => {
      span.innerHTML = li.innerHTML;
    })
    currencyUnitsLis.forEach(e => {
      e.classList.remove("on")
    })
    li.classList.add("on");
    if (onSet == li.dataset.on) {
      adressFilter.forEach(ele => {
        ele.classList.remove("on");
      });
      filterInputs.forEach(ele => {
        ele.classList.remove("on");
      });
      filterLabels.forEach(ele => {
        ele.classList.remove("on")
      })
      filterIcon.forEach(e => {
        e.classList.remove("animate")
      })

    }

  })
})
// console.log(currencyUnitsLis)

filterInputs.forEach(e => {
  e.addEventListener("input", () => {
    const searchValue = e.value.toLowerCase();
    let onDataSet = e.dataset.on;
    currencyUnitsLis.forEach(e => {
      if (e.textContent.toLowerCase().includes(searchValue)) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    })
  })
});
amountUnit.forEach(li => {
  li.addEventListener("click", () => {
    tilteUnit[0].innerHTML = li.innerHTML;
    labelAmount[0].innerHTML = li.innerHTML;
    amountUnit.forEach(el => {
      el.classList.remove("on");
    })
    li.classList.add("on");
  })
})
PriceUnit.forEach(li => {
  li.addEventListener("click", () => {
    labelUnite[0].innerHTML = li.innerHTML;
    tilteUnit[1].innerHTML = li.innerHTML;
    PriceUnit.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
  })
})

let exchangeLis = document.querySelectorAll(".new-announcement .container .price form .custemoption .exchange li");
exchangeLis.forEach((li) => {
  li.addEventListener("click", () => {
    tilteUnit[2].innerHTML = li.innerHTML;
    exchangeLis.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");

  });
});
// upload files 
let fileInput = document.querySelectorAll(".new-announcement .container .images .img-input");
let fileList = document.querySelectorAll(".new-announcement .container .images .fileList");
let numOfFiles = document.querySelectorAll(".new-announcement .container .images .nbrOfFiles");
fileInput[0].addEventListener("change", () => {
  fileList[0].innerHTML = "";
  if (fileInput[0].files.length == 0) {
    numOfFiles[0].innerHTML = `no chosen pictures`
  } else if (fileInput[0].files.length == 1) {
    numOfFiles[0].innerHTML = `${fileInput[0].files.length} selected picture`
  } else {
    numOfFiles[0].innerHTML = `${fileInput[0].files.length} selected pictures`
  }
  for (j of fileInput[0].files) {
    let render = new FileReader();
    let listItem = document.createElement("li");
    let fileName = j.name;
    let fileSize = (j.size / 1024).toFixed(1);
    let dataUnit;
    if (fileSize >= 1024) {
      dataUnit = "MB";
    } else {
      dataUnit = "KB";

    }
    listItem.innerHTML = `<p>${fileName}</p> <p>${fileSize} ${dataUnit}</p>`;
    fileList[0].appendChild(listItem);
  }
})
// alert + overlay01
const alertPup = document.querySelectorAll(".new-announcement .alert");
const aletrCloseBtn = document.querySelectorAll(".new-announcement .alert a");
const overLay = document.querySelectorAll(".new-announcement .overlay");

AnounceBtn[0].addEventListener("click", () => {
  alertPup[0].classList.add("on");
  overLay[0].classList.add("on");
})
aletrCloseBtn[0].addEventListener("click", () => {
  alertPup[0].classList.remove("on");
  overLay[0].classList.remove("on");
})

// click effect
let uploadArea = document.querySelectorAll(".new-announcement .container .box .custom-file-upload");
uploadArea[0].addEventListener("click", () => {
  uploadArea[0].classList.add("one");
})
// the menu movement
let categoriesList = document.querySelectorAll(".nav .categoriesList");
let navBar = [...document.getElementsByClassName("nav")];
let menuIcon = document.querySelectorAll(" .nav .container .logo .fa-bars");
let xIcon = document.querySelectorAll(".categoriesList .container .nav .fa-x");
menuIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.add("moveRight");
  navBar[0].classList.add("clicked");
});

xIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.remove("moveRight");
  navBar[0].classList.remove("clicked");
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (e.target.id !== "categoriesList" && e.target.id !== "fa-bars") {
    categoriesList[0].classList.remove("moveRight");
    navBar[0].classList.remove("clicked");
  }
});
// hide navBar on scroll
var lastScrollTop;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!recomendation[0].classList.contains("delete")) {
    if (scrollTop > lastScrollTop) {
      navBar[0].style.top = "-80px";
    } else {
      navBar[0].style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});
// search
let searchInput = document.querySelectorAll(".nav .container .search input");
// let recomendation = document.querySelectorAll(".nav .recomendation");
let submitBtns = document.querySelectorAll(".nav .recomendation form .btn .cancel");
let submitBtn = document.querySelectorAll(".nav .recomendation form .btn");
let searchIcon = document.querySelectorAll(
  ".nav .left-Icons .fa-magnifying-glass"
);
submitBtn.forEach(e => {
  e.classList.add("do-not")
})
let categorySearch = document.querySelectorAll(".nav .probCon .prob .search");
searchInput[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
});
let allInputs = document.querySelectorAll("input");
submitBtns[0].addEventListener("click", (e) => {
  recomendation[0].classList.add("delete");
  e.preventDefault();
  allInputs.forEach(e => {
    e.value = "";
  })
});
categorySearch[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
  navBar[0].style.top = "0";
});
searchIcon[0].addEventListener("click", () => {
  recomendation[0].classList.add("delete");
  navBar[0].style.top = "0";
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (
    e.target.id !== "recomendation" &&
    e.target.id !== "Search" &&
    e.target.id !== "fa-magnifying-glass" &&
    e.target.id !== "fa-bars" &&
    e.target.id !== "filter" &&
    e.target.id !== "header" &&
    e.target.id !== "adressLis" &&
    e.target.id !== "searchIn" &&
    e.target.id !== "scales" &&
    !e.target.classList.contains("do-not") &&
    e.target.id !== "adress"
  ) {
    recomendation[0].classList.remove("delete");
  }
});
// filter
let headerFilter = document.querySelectorAll(".filter .header");
let filterLabels = document.querySelectorAll(".filter .adress label");
let filterIcon = document.querySelectorAll(".filter .header > i");
headerFilter.forEach(e => {
  let FilterDataset = e.dataset.on;
  e.addEventListener("click", () => {
    if (FilterDataset == e.dataset.on) {
      filterIcon.forEach(ele => {
        ele.dataset.on == FilterDataset ? ele.classList.toggle("animate") : ele.classList.remove("animate");
      });
      adressFilter.forEach(ele => {
        ele.dataset.on == FilterDataset ? ele.classList.toggle("on") : ele.classList.remove("on");
      });
      filterLabels.forEach(ele => {
        ele.dataset.on == FilterDataset ? ele.classList.toggle("on") : ele.classList.remove("on");

      });
      filterInputs.forEach(ele => {
        ele.dataset.on == FilterDataset ? ele.classList.toggle("on") : ele.classList.remove("on");

      })
    }
  })
})
// country names
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands"
];
let countriesFilter = document.querySelectorAll(".filter .adress .counrty");
let countriesadress = document.querySelectorAll(".new-announcement .container .box form .custemoption .countries");
for (let f = 0; f < countryList.length; f++) {
  let checkele = document.createElement("div");
  let inputEle = document.createElement("input");
  let labelEle = document.createElement("label");
  checkele.classList.add("check");
  checkele.classList.add("do");
  checkele.classList.add("do-not");
  countriesFilter[0].appendChild(checkele);
  inputEle.type = "checkbox";
  inputEle.id = "scales";
  inputEle.name = "scales";
  inputEle.classList.add("do");
  labelEle.for = "scales";
  checkele.dataset.on = "1";
  labelEle.classList.add("do")
  labelEle.classList.add("do-not");
  labelEle.innerHTML = countryList[f];
  checkele.append(inputEle);
  checkele.append(labelEle)
}
for (let s = 0; s < countryList.length; s++) {
  let checkele = document.createElement("div");
  let inputEle = document.createElement("input");
  let labelEle = document.createElement("label");
  checkele.classList.add("check");
  checkele.classList.add("do");
  checkele.classList.add("do-not");
  countriesAdress[0].appendChild(checkele);
  inputEle.type = "checkbox";
  inputEle.id = "scales";
  inputEle.name = "scales";
  inputEle.classList.add("do");
  checkele.append(inputEle);
  labelEle.for = "scales";
  checkele.dataset.on = "89";
  labelEle.classList.add("do")
  labelEle.classList.add("do-not");
  labelEle.innerHTML = countryList[s];
  checkele.append(labelEle)
}
console.log(countriesAdress)
for (let w = 0; w < countryList.length; w++) {
  let checkele = document.createElement("div");
  let inputEle = document.createElement("input");
  let labelEle = document.createElement("label");
  checkele.classList.add("check");
  checkele.classList.add("do");
  checkele.classList.add("do-not");
  countriesAdress[0].appendChild(checkele);
  inputEle.type = "checkbox";
  inputEle.id = "scales";
  inputEle.name = "scales";
  inputEle.classList.add("do");
  checkele.append(inputEle);
  labelEle.for = "scales";
  checkele.dataset.on = "89";
  labelEle.classList.add("do")
  labelEle.classList.add("do-not");
  labelEle.innerHTML = countryList[w];
  checkele.append(labelEle)
}
// clicking everwhere to hide filter 
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("do")) {
    adressFilter.forEach(ele => {
      ele.classList.remove("on")
    })
    filterInputs.forEach(ele => {
      ele.classList.remove("on")
    })
    filterLabels.forEach(ele => {
      ele.classList.remove("on")
    })
    filterIcon.forEach(e => {
      e.classList.remove("animate")
    })

  }
})
//coloring and check selected elements 
let chechSelect = document.querySelectorAll(".filter .adress .counrty .check");
let filterSelect = document.querySelectorAll(".filter .adress .counrty .check input");
chechSelect.forEach(e => {
  let state = false;
  e.addEventListener("click", () => {
    e.firstElementChild.checked ? e.firstElementChild.checked = !state : e.firstElementChild.checked = !state;
    e.firstElementChild.checked ? e.classList.add("on") : e.classList.remove("on");
    state = !state;

  })

})

let filterSelectLis = document.querySelectorAll(".nav .recomendation .filter .adress .type-of-offer li");
filterSelectLis.forEach(e => {
  e.addEventListener("click", () => {
    filterSelectLis.forEach(e => {
      e.classList.remove("on")
    })
    e.classList.toggle("on")
  })
})
//filter  search 
filterInputs.forEach(e => {
  e.addEventListener("input", () => {
    const searchValue = e.value.toLowerCase();
    let onDataSet = e.dataset.on;
    chechSelect.forEach(e => {
      if (onDataSet == e.dataset.on) {
        if (e.lastElementChild.textContent.toLowerCase().includes(searchValue)) {
          e.style.display = "block";
        } else {
          e.style.display = "none";
        }
      }
    })
  })
});
//loeder
let loeder = [...document.getElementsByClassName("parentLoeder")];


window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});
// darkMode
let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon")

darkMode[0].addEventListener("click", () => {
  darkMode[0].classList.toggle("active");
  if (darkMode[0].classList.contains("active")) {
    localStorage.setItem("dm", "active");
  }else {
    localStorage.setItem("dm","activee");

  }
  moon.classList.toggle("active");
  sun.classList.toggle("active");
  if (darkMode[0].classList.contains("active")) {
    document.documentElement.style.setProperty("--nightModeColor", "#0e0e0e");
    window.localStorage.setItem("nightModeColor", "#0e0e0e");
    document.documentElement.style.setProperty("--darkModeColor", "#fff");
    window.localStorage.setItem("darkModeColor", "#fff");
    document.documentElement.style.setProperty("--mainHoverColor", "#c3c3c3");
    window.localStorage.setItem("mainHoverColor", "#c3c3c3");
    document.documentElement.style.setProperty("--mainHeader", "#0e0e0e");
    window.localStorage.setItem("mainHeader", "#0e0e0e");
    document.documentElement.style.setProperty("--boxesColor", "#171717");
    window.localStorage.setItem("boxesColor", "#171717");
    document.documentElement.style.setProperty("--btnsColor", "#393939");
    window.localStorage.setItem("btnsColor", "#393939");
    document.documentElement.style.setProperty("--dropListColor", "#242424");
    window.localStorage.setItem("dropListColor", "#242424");
    recomendation[0].classList.toggle("on");
    darkModeText[0].innerHTML = "Day mode"
    localStorage.setItem("st", true);
  } else {
    document.documentElement.style.setProperty("--nightModeColor", "#fff");
    document.documentElement.style.setProperty("--mainHoverColor", "#dbf1e6");
    document.documentElement.style.setProperty("--darkModeColor", "#0e0e0e");
    document.documentElement.style.setProperty("--mainHeader", "#b3b3b3");
    document.documentElement.style.setProperty("--boxesColor", "#dbf1e6");
    document.documentElement.style.setProperty("--btnsColor", "#000");
    document.documentElement.style.setProperty("--dropListColor", "#4d4d4d");
    darkModeText[0].innerHTML = "Dark mode";
    recomendation[0].classList.toggle("on");
    localStorage.setItem("st", false);
  }
 

})
// localStorage.clear();
