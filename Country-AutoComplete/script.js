// script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const input = document.getElementById("autocompleteInput");
//   const list = document.getElementById("autocompleteList");

//   // ! local data
//   const countries = [
//     "Afghanistan",
//     "Albania",
//     "Algeria",
//     "Andorra",
//     "Angola",
//     "Argentina",
//     "Armenia",
//     "Australia",
//     "Austria",
//     "Azerbaijan",
//     "Bahamas",
//     "Bahrain",
//     "Bangladesh",
//     "Barbados",
//     "Belarus",
//     "Belgium",
//     "Belize",
//     "Benin",
//     "Bhutan",
//     "Bolivia",
//     "Bosnia",
//     "Botswana",
//     "Brazil",
//     "Brunei",
//     "Bulgaria",
//     "Burkina Faso",
//     "Burundi",
//     "Cabo Verde",
//     "Cambodia",
//     "Cameroon",
//     "Canada",
//     "Central African Republic",
//     "Chad",
//     "Chile",
//     "China",
//     "Colombia",
//     "Comoros",
//     "Congo",
//     "Costa Rica",
//     "Croatia",
//     "Cuba",
//     "Cyprus",
//     "Czech Republic",
//     "Denmark",
//     "Djibouti",
//     "Dominica",
//     "Dominican Republic",
//     "Ecuador",
//     "Egypt",
//     "El Salvador",
//     "Equatorial Guinea",
//     "Eritrea",
//     "Estonia",
//     "Eswatini",
//     "Ethiopia",
//     "Fiji",
//     "Finland",
//     "France",
//     "Gabon",
//     "Gambia",
//     "Georgia",
//     "Germany",
//     "Ghana",
//     "Greece",
//     "Grenada",
//     "Guatemala",
//     "Guinea",
//     "Guinea-Bissau",
//     "Guyana",
//     "Haiti",
//     "Honduras",
//     "Hungary",
//     "Iceland",
//     "India",
//     "Indonesia",
//     "Iran",
//     "Iraq",
//     "Ireland",
//     "Israel",
//     "Italy",
//     "Ivory Coast",
//     "Jamaica",
//     "Japan",
//     "Jordan",
//     "Kazakhstan",
//     "Kenya",
//     "Kiribati",
//     "Kuwait",
//     "Kyrgyzstan",
//     "Laos",
//     "Latvia",
//     "Lebanon",
//     "Lesotho",
//     "Liberia",
//     "Libya",
//     "Liechtenstein",
//     "Lithuania",
//     "Luxembourg",
//     "Madagascar",
//     "Malawi",
//     "Malaysia",
//     "Maldives",
//     "Mali",
//     "Malta",
//     "Marshall Islands",
//     "Mauritania",
//     "Mauritius",
//     "Mexico",
//     "Micronesia",
//     "Moldova",
//     "Monaco",
//     "Mongolia",
//     "Montenegro",
//     "Morocco",
//     "Mozambique",
//     "Myanmar",
//     "Namibia",
//     "Nauru",
//     "Nepal",
//     "Netherlands",
//     "New Zealand",
//     "Nicaragua",
//     "Niger",
//     "Nigeria",
//     "North Korea",
//     "North Macedonia",
//     "Norway",
//     "Oman",
//     "Pakistan",
//     "Palau",
//     "Panama",
//     "Papua New Guinea",
//     "Paraguay",
//     "Peru",
//     "Philippines",
//     "Poland",
//     "Portugal",
//     "Qatar",
//     "Romania",
//     "Russia",
//     "Rwanda",
//     "Saint Kitts",
//     "Saint Lucia",
//     "Saint Vincent",
//     "Samoa",
//     "San Marino",
//     "Sao Tome and Principe",
//     "Saudi Arabia",
//     "Senegal",
//     "Serbia",
//     "Seychelles",
//     "Sierra Leone",
//     "Singapore",
//     "Slovakia",
//     "Slovenia",
//     "Solomon Islands",
//     "Somalia",
//     "South Africa",
//     "South Korea",
//     "South Sudan",
//     "Spain",
//     "Sri Lanka",
//     "Sudan",
//     "Suriname",
//     "Sweden",
//     "Switzerland",
//     "Syria",
//     "Taiwan",
//     "Tajikistan",
//     "Tanzania",
//     "Thailand",
//     "Togo",
//     "Tonga",
//     "Trinidad and Tobago",
//     "Tunisia",
//     "Turkey",
//     "Turkmenistan",
//     "Tuvalu",
//     "Uganda",
//     "Ukraine",
//     "United Arab Emirates",
//     "United Kingdom",
//     "United States",
//     "Uruguay",
//     "Uzbekistan",
//     "Vanuatu",
//     "Vatican City",
//     "Venezuela",
//     "Vietnam",
//     "Yemen",
//     "Zambia",
//     "Zimbabwe",
//   ];

//   input.addEventListener("input", function () {
//     const val = this.value.toLowerCase();
//     list.innerHTML = ""; // Clear any existing items

//     if (!val) return false; // Exit if input is empty

//     countries.forEach((country) => {
//       if (country.toLowerCase().startsWith(val)) {
//         const item = document.createElement("div");
//         item.textContent = country;
//         item.addEventListener("click", function () {
//           input.value = this.textContent; // Set input to selected item
//           list.innerHTML = ""; // Close the list
//         });
//         list.appendChild(item);
//       }
//     });
//   });

//   document.addEventListener("click", function (e) {
//     if (e.target !== input) {
//       list.innerHTML = ""; // Close the list if clicking outside the input field
//     }
//   });
// });

// ! get countries from an api call
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("countryInput");
  const autocompleteList = document.getElementById("autocomplete-list");

  // Fetch countries from API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => country.name.common);
      setupAutocomplete(input, countries);
    })
    .catch((error) => console.error("Error fetching countries:", error));

  function setupAutocomplete(input, countries) {
    input.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      autocompleteList.innerHTML = "";

      if (!value) return;

      countries.forEach((country) => {
        if (country.toLowerCase().startsWith(value)) {
          const listItem = document.createElement("div");
          listItem.innerHTML = `<strong>${country.substr(
            0,
            value.length
          )}</strong>${country.substr(value.length)}`;
          listItem.addEventListener("click", function () {
            input.value = country;
            autocompleteList.innerHTML = "";
          });
          autocompleteList.appendChild(listItem);
        }
      });
    });

    // Close the autocomplete list if the user clicks outside of it
    document.addEventListener("click", function (e) {
      if (e.target !== input) {
        autocompleteList.innerHTML = "";
      }
    });
  }
});
