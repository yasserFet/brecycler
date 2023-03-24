//dark mode localStorege 
let recomendation = document.querySelectorAll(".nav .recomendation");
let darkModeText = document.querySelectorAll(".darkMode .night-day");
let darkMode = document.querySelectorAll(".darkMode");

if (localStorage.getItem("st") == "true") {
  document.documentElement.style.setProperty("--nightModeColor", "#0e0e0e");
  document.documentElement.style.setProperty("--RecomdationColor", "#343434");
  document.documentElement.style.setProperty("--mainBoxColor", "#363636");
  document.documentElement.style.setProperty("--darkModeColor", "#fff");
  document.documentElement.style.setProperty("--mainHoverColor", "#c3c3c3");
  document.documentElement.style.setProperty("--mainHeader", "#0e0e0e");
  document.documentElement.style.setProperty("--boxesColor", "#171717");
  recomendation[0].classList.toggle("on")
  console.log("changed")
  darkModeText[0].innerHTML = "Day mode";
}
if (localStorage.getItem("dm")) {
  darkMode.forEach(el => {
    el.classList.add(localStorage.getItem("dm"));
  })
}
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
// slider
let boxes = document.querySelectorAll(".mainPage .card .box");
let cards = document.querySelectorAll(".mainPage .card");
let leftIcon = document.querySelectorAll(".mainPage .left");
let rightIcon = document.querySelectorAll(".mainPage .right");

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftIcon[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

cards.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightIcon[i].addEventListener("click", () => {
    box.scrollLeft += width;
  });
});
// product description slider
let rightBtn = document.querySelectorAll(".product .parent .right");
let leftBtn = document.querySelectorAll(".product .parent .left");
let productImgs = document.querySelectorAll(".product .parent .images img");
let productImgsContainer = document.querySelectorAll(
  ".product .parent .images"
);
productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  leftBtn[i].addEventListener("click", () => {
    box.scrollLeft -= width;
  });
});

productImgsContainer.forEach((box, i) => {
  let dimentions = box.getBoundingClientRect();
  let width = dimentions.width;
  rightBtn[i].addEventListener("click", () => {
    box.scrollLeft += width;
  });
});
// search
let searchInput = document.querySelectorAll(".nav .container .search input");
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
    e.value ="";
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
let headerFilter = document.querySelectorAll(".nav .recomendation .filter .header");
let adressFilter = document.querySelectorAll(".nav .recomendation .filter .adress .counrty");
let filterInputs = document.querySelectorAll(".nav .recomendation .filter .adress .SearchInput");
let filterLabels = document.querySelectorAll(".nav .recomendation .filter .adress label");
let filterIcon = document.querySelectorAll(".nav .recomendation .filter .header > i");

headerFilter.forEach(e => {
  let FilterDataset = e.dataset.on;
  e.addEventListener("click", () => {
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
let countriesFilter = document.querySelectorAll(".nav .recomendation .filter .adress .counrty");

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
  checkele.append(inputEle);
  labelEle.for = "scales";
  checkele.dataset.on = "1";
  labelEle.classList.add("do")
  labelEle.classList.add("do-not");
  labelEle.innerHTML = countryList[f];
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
let chechSelect = document.querySelectorAll(".nav .recomendation .filter .adress .counrty .check");
let filterSelect = document.querySelectorAll(".nav .recomendation .filter .adress .counrty .check input");
let filterSelectLabel = document.querySelectorAll(".nav .recomendation .filter .adress .counrty .check label");
chechSelect.forEach(e => {
  let state = false;
  e.addEventListener("click", () => {
    e.firstElementChild.checked ? e.firstElementChild.checked = !state : e.firstElementChild.checked = !state;
    e.firstElementChild.checked ? e.classList.add("on") : e.classList.remove("on");
    e.firstElementChild.checked ? e.lastElementChild.classList.add("on") : e.lastElementChild.classList.remove("on");
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
console.log(loeder)
window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});

// increasing nbrs 
let StatNbr = document.querySelectorAll(".increase")
let stared = false;
console.log(StatNbr)
window.addEventListener("scroll", function () {
  if (window.scrollY > StatNbr[0].offsetTop + 200) {
    if (!stared) {
      StatNbr.forEach((li) => {
        increase(li);
      });
      stared = true;
    }
  }
});
function increase(ele) {
  let goal = +ele.dataset.goal;
  let counter = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML == ele.dataset.goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
}
let scrollUpIcon = document.querySelectorAll(".scrollUp");
let UpIcon = document.querySelectorAll(".scrollUp .fa-up-long");
window.onscroll = function () {
  if (scrollY > 433) {
    scrollUpIcon.forEach((e) => {
      e.classList.add("active");
      UpIcon[0].classList.add("active")
    });
  } else {
    scrollUpIcon.forEach((e) => {
      e.classList.remove("active");
      UpIcon[0].classList.remove("active")


    });
  }
};
scrollUpIcon.forEach((e) => {
  e.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
// auto type effect
let autoTypeText = " We are creative agency";
let autoTypeEle = document.querySelectorAll(".landing .info h2");
let t = 0;
function autoType() {
  if (t < autoTypeText.length) {
    autoTypeEle.forEach(li => {
      li.innerHTML += autoTypeText.charAt(t);
    })
    t++;
  }
  setTimeout(autoType, 100);
}
autoType();
// darkMode
// when clicking on btn i want to change the value of the css var and save it to localstorege 
// when refreshing check the local storege if it has values 
//... if so the css var value will have this value
let sun = document.querySelector(".fa-sun")
let moon = document.querySelector(".fa-moon")
darkMode.forEach(li => {
  li.addEventListener("click", () => {
    darkMode[0].classList.toggle("active");
    if (darkMode[0].classList.contains("active")) {
      localStorage.setItem("dm", "active");
    } else {
      localStorage.setItem("dm", "activee");

    }
    moon.classList.toggle("active");
    sun.classList.toggle("active");
    if (darkMode[0].classList.contains("active")) {
      document.documentElement.style.setProperty("--nightModeColor", "#0e0e0e");
      document.documentElement.style.setProperty("--RecomdationColor", "#343434");
      document.documentElement.style.setProperty("--mainBoxColor", "#363636");
      document.documentElement.style.setProperty("--darkModeColor", "#fff");
      document.documentElement.style.setProperty("--mainHoverColor", "#c3c3c3");
      document.documentElement.style.setProperty("--mainHeader", "#0e0e0e");
      document.documentElement.style.setProperty("--boxesColor", "#171717");
      recomendation[0].classList.toggle("on")
      console.log("changed")
      darkModeText[0].innerHTML = "Day mode";
      localStorage.setItem("st",true);
    } else {
      document.documentElement.style.setProperty("--nightModeColor", "#fff");
      document.documentElement.style.setProperty("--mainHoverColor", "#dbf1e6");
      document.documentElement.style.setProperty("--RecomdationColor", "#dbf1e6");
      document.documentElement.style.setProperty("--mainBoxColor", "#bdbdbd");
      document.documentElement.style.setProperty("--darkModeColor", "#0e0e0e");
      document.documentElement.style.setProperty("--mainHeader", "#b3b3b3");
      document.documentElement.style.setProperty("--boxesColor", "#dbf1e6");
      darkModeText[0].innerHTML = "Dark mode"
      recomendation[0].classList.toggle("on")
      localStorage.setItem("st", false);

      console.log("changed")

    }
  })
})