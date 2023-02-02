let languageSelected,
  url,
  billboardList,
  genreUrl

let radioData;
const musicGenres = ['Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge', 'Hip-Hop', 'Jazz', 'Metal', 'Pop', 'R&B', 'Rap', 'Reggae', 'Rock', 'Classical', 'kpop'];

// Defining day.js locale obj
const locale = {}; // Your Day.js locale Object.
dayjs.locale(locale, null, true); // load locale for later use

let now = dayjs()

const countries = [
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AS', name: 'American Samoa' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AI', name: 'Anguilla' },
  { code: 'AQ', name: 'Antarctica' },
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BS', name: 'Bahamas (the)' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BO', name: 'Bolivia (Plurinational State of)' },
  { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BV', name: 'Bouvet Island' },
  { code: 'BR', name: 'Brazil' },
  { code: 'IO', name: 'British Indian Ocean Territory (the)' },
  { code: 'BN', name: 'Brunei Darussalam' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'CV', name: 'Cabo Verde' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CA', name: 'Canada' },
  { code: 'KY', name: 'Cayman Islands (the)' },
  { code: 'CF', name: 'Central African Republic (the)' },
  { code: 'TD', name: 'Chad' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CX', name: 'Christmas Island' },
  { code: 'CC', name: 'Cocos (Keeling) Islands (the)' },
  { code: 'CO', name: 'Colombia' },
  { code: 'KM', name: 'Comoros (the)' },
  { code: 'CD', name: 'Congo (the Democratic Republic of the)' },
  { code: 'CG', name: 'Congo (the)' },
  { code: 'CK', name: 'Cook Islands (the)' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CW', name: 'Curaçao' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czechia' },
  { code: 'CI', name: "Côte d'Ivoire" },
  { code: 'DK', name: 'Denmark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic (the)' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FK', name: 'Falkland Islands (the) [Malvinas]' },
  { code: 'FO', name: 'Faroe Islands (the)' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' },
  { code: 'TF', name: 'French Southern Territories (the)' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia (the)' },
  { code: 'GE', name: 'Georgia' },
  { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GI', name: 'Gibraltar' },
  { code: 'GR', name: 'Greece' },
  { code: 'GL', name: 'Greenland' },
  { code: 'GD', name: 'Grenada' },
  { code: 'GP', name: 'Guadeloupe' },
  { code: 'GU', name: 'Guam' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GG', name: 'Guernsey' },
  { code: 'GN', name: 'Guinea' },
  { code: 'GW', name: 'Guinea-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HM', name: 'Heard Island and McDonald Islands' },
  { code: 'VA', name: 'Holy See (the)' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran (Islamic Republic of)' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IM', name: 'Isle of Man' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'JP', name: 'Japan' },
  { code: 'JE', name: 'Jersey' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KP', name: "Korea (the Democratic People's Republic of)" },
  { code: 'KR', name: 'Korea (the Republic of)' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LA', name: "Lao People's Democratic Republic (the)" },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MO', name: 'Macao' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands (the)' },
  { code: 'MQ', name: 'Martinique' },
  { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'YT', name: 'Mayotte' },
  { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia (Federated States of)' },
  { code: 'MD', name: 'Moldova (the Republic of)' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MS', name: 'Montserrat' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands (the)' },
  { code: 'NC', name: 'New Caledonia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger (the)' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NU', name: 'Niue' },
  { code: 'NF', name: 'Norfolk Island' },
  { code: 'MP', name: 'Northern Mariana Islands (the)' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PW', name: 'Palau' },
  { code: 'PS', name: 'Palestine, State of' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papua New Guinea' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PH', name: 'Philippines (the)' },
  { code: 'PN', name: 'Pitcairn' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'PR', name: 'Puerto Rico' },
  { code: 'QA', name: 'Qatar' },
  { code: 'MK', name: 'Republic of North Macedonia' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russian Federation (the)' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'RE', name: 'Réunion' },
  { code: 'BL', name: 'Saint Barthélemy' },
  { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'MF', name: 'Saint Martin (French part)' },
  { code: 'PM', name: 'Saint Pierre and Miquelon' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: 'Samoa' },
  { code: 'SM', name: 'San Marino' },
  { code: 'ST', name: 'Sao Tome and Principe' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SN', name: 'Senegal' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapore' },
  { code: 'SX', name: 'Sint Maarten (Dutch part)' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'SS', name: 'South Sudan' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan (the)' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SJ', name: 'Svalbard and Jan Mayen' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syrian Arab Republic' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania, United Republic of' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' },
  { code: 'TK', name: 'Tokelau' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'TC', name: 'Turks and Caicos Islands (the)' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'AE', name: 'United Arab Emirates (the)' },
  { code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland (the)' },
  { code: 'UM', name: 'United States Minor Outlying Islands (the)' },
  { code: 'US', name: 'United States of America (the)' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela (Bolivarian Republic of)' },
  { code: 'VN', name: 'Viet Nam' },
  { code: 'VG', name: 'Virgin Islands (British)' },
  { code: 'VI', name: 'Virgin Islands (U.S.)' },
  { code: 'WF', name: 'Wallis and Futuna' },
  { code: 'EH', name: 'Western Sahara' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' },
  { code: 'AX', name: 'Åland Islands' }
]

// Modal Creation 
const modal = document.getElementById('modal');
const select = document.getElementById("countrySelect");


// updating radio stations based on genre
let selectedGenres = [];

const updateSelectedGenres = (event) => {
  let genre = event.target;
  if (genre.checked) {
    selectedGenres.push(genre.value);
    selectedGenres.push(genre.value.replace("-", ""));
    selectedGenres.push(genre.value.replace("-", " "));
    selectedGenres.push(genre.value.replace("&", "n"));
  } else {
    selectedGenres = selectedGenres.filter(selectedGenre => selectedGenre !== genre.value);
    selectedGenres = selectedGenres.filter(selectedGenre => selectedGenre !== genre.value.replace("-", ""));
    selectedGenres = selectedGenres.filter(selectedGenre => selectedGenre !== genre.value.replace("-", " "));
    selectedGenres = selectedGenres.filter(selectedGenre => selectedGenre !== genre.value.replace("&", "n"));
  }
};

const createUrls = () => {
  const genreUrls = [...new Set(selectedGenres)].map(genre => {
    return `http://at1.api.radio-browser.info/json/stations/bytag/${(genre.toLowerCase())}`;
  });
  return genreUrls;
};

// populates the modal with each genre
const checkboxesContainer = document.querySelector('#musicGenres');
musicGenres.forEach(genre => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = genre;
  checkbox.id = genre;
  checkbox.addEventListener('change', updateSelectedGenres);

  const label = document.createElement('label');
  label.htmlFor = genre;
  label.innerHTML = genre;

  checkboxesContainer.appendChild(checkbox);
  checkboxesContainer.appendChild(label);
});
modal.style.display = "block";

// close the modal
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function () {
  console.log("Fetching radio station by filters");
  // fetchRadioStations();
  modal.style.display = "none";
  console.log(selectedGenres);
});

// fetching radio station based on genres
let fetchRadioStations = () => {
  let genreUrls = createUrls();
  let randomUrl = genreUrls[Math.floor(Math.random() * genreUrls.length)];
  radio(randomUrl);

};

// populates the modal with each country
countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.code;
  option.text = country.name;
  select.appendChild(option);
});

// find out which country is selected and play the radio
select.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue) {
    const selectedCountry = countries.find(country => country.code === selectedValue);
    console.log("Selected country: ", selectedCountry);
    // Make API call with selected country
    let countryUrl = `https://at1.api.radio-browser.info/json/stations/bycountry/${encodeURIComponent(selectedCountry.name.toLowerCase())}`;
    console.log(countryUrl);
    console.log("Playing based on country: ", radio(countryUrl));
  }
});

const createCountryUrls = () => {
  
};

/*
It is not possible to do a reverse DNS from a browser yet.
The first part (a normal dns resolve) could be done from a browser by doing DOH (DNS over HTTPs)
to one of the providers out there. (google, quad9,...)
So we have to fallback to ask a single server for a list.
*/

/**
 * Ask a specified server for a list of all other server.
 */
function get_radiobrowser_base_urls() {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    // If you need https, please use the fixed server fr1.api.radio-browser.info for this request only
    request.open('GET', 'http://all.api.radio-browser.info/json/servers', true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var items = JSON.parse(request.responseText).map(x => "https://" + x.name);
        console.log('server list:', items);
        resolve(items);
      } else {
        reject(request.statusText);
      }
    }
    request.send();
  });
}

/**
* Ask a server for its settings.
*/
function get_radiobrowser_server_config(baseurl) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    request.open('GET', baseurl + '/json/config', true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var items = JSON.parse(request.responseText);
        resolve(items);
      } else {
        reject(request.statusText);
      }
    }
    request.send();
  });
}

/**
* Get a random available radio-browser server.
* Returns: string - base url for radio-browser api
*/
function get_radiobrowser_base_url_random() {
  return get_radiobrowser_base_urls().then(hosts => {
    var item = hosts[Math.floor(Math.random() * hosts.length)];
    return item;
  });
}

function radio(url) {
  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      let ranRadio = randomNum(data.length);
      let selectedRadio = data[ranRadio];
      if (selectedRadio.ssl_error === 0 && selectedRadio.codec === 'MP3' && selectedRadio.lastcheckok === 1 && selectedRadio.url.endsWith('.mp3')) {
        $('#audio').attr('src', data[ranRadio].url)
        console.log('radio obj:', data[ranRadio]);
        console.log('homepage:', data[ranRadio].homepage);
        radioData = data[ranRadio];
        displayRadioInfo();
      } else {
        console.log(`Radio Station "${selectedRadio.name} is offline"`);
        radio(url);
      }
    })
}

function billboard() {
  let day = now.format('DD');
  let month = now.format('MM');
  let year = now.format('YYYY');
  let billUrl = `https://billboard3.p.rapidapi.com/hot-100?date=${year}-${month}-${day}&range=1-100`;

  fetch(billUrl, {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': 'c940ff86e8msh1858db2844899cap1b62d9jsn957e8cb7460b',
    
      // 'X-RapidAPI-Key': '7b8d8cbe25msh2141e2d65f82a1cp13cb0djsncae8c239e96e',
      // cassieKEY^^^^^
      'X-RapidAPI-Host': 'billboard3.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Billboard:', data);
      billboardList = data;
      for (let i = 0; i < billboardList.length; i++) {
        $('#billboard').append(
          `<li>
            ${billboardList[i].rank}. 
            ${billboardList[i].artist} | 
            Song: ${billboardList[i].title}
          </li>`
        );
        console.log(i);
      }
    })
    .catch(err => console.error(err));
}


function displayRadioInfo() {
  $('#radioInfo').html(
    `<img src='${radioData.favicon}' style='width: 25%'></img>
    <li>${radioData.name}</li>
    <li>${radioData.country}</li>
    <li>Language: ${radioData.language}</li>
    <li>Tags: "${radioData.tags}"</li>
    <li>Votes: ${radioData.votes}</li>`
  );
}

function randomNum(length) {
  return Math.floor(Math.random() * length);
}

get_radiobrowser_base_url_random().then((x) => {
  console.log("server selected:", x);
  // let url = `${x}/json/stations/bylanguage/${languageSelected}`
  // url = `${x}/json/tags`
  // url = `${x}/json/stations/bytag/${blues}`

  url = `${x}/json/stations/bylanguage/english`
  radio(url);
  return get_radiobrowser_server_config(x);
}).then(config => {
  console.log("config:", config);
});


// adds click function on randomBtn
// Generates a random radio station
$("#ranBtn").click(function () {
  radio(url);
  console.log(createUrls());
  createUrls();
});

setInterval(function () {
  $('#clock').text(dayjs().format('hh:mm:ss a'));
  // console.log(dayjs().format('hh:mm:ss a'))
}, 1000);

billboard();