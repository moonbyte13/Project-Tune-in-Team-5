let languageSelected,
  url,
  billboardList,
  genreUrl,
  selectedCountry;

let radioData;
const musicGenres = ['Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge', 'Hip-Hop', 'Jazz', 'Metal', 'Pop', 'R&B', 'Rap', 'Reggae', 'Rock', 'Classical', 'K-Pop', 'Oldies'];

// Defining day.js locale obj
const locale = {}; // Your Day.js locale Object.
dayjs.locale(locale, null, true); // load locale for later use

let now = dayjs()

const countries = [
  { code: 'CA', name: 'Canada' },
  { code: 'US', name: 'United States of America' },
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AS', name: 'American Samoa' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AQ', name: 'Antarctica' },
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BR', name: 'Brazil' },
  { code: 'BN', name: 'Brunei Darussalam' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'CV', name: 'Cabo Verde' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CO', name: 'Colombia' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czechia' },
  { code: 'DK', name: 'Denmark' },
  { code: 'DM', name: 'Dominica' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' },
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
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
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
  { code: 'KR', name: 'The Republic Of Korea' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MO', name: 'Macao' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MT', name: 'Malta' },
  { code: 'MQ', name: 'Martinique' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'YT', name: 'Mayotte' },
  { code: 'MX', name: 'Mexico' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NC', name: 'New Caledonia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NF', name: 'Norfolk Island' },
  { code: 'NO', name: 'Norway' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PA', name: 'Panama' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'PR', name: 'Puerto Rico' },
  { code: 'QA', name: 'Qatar' },
  { code: 'MK', name: 'Republic of North Macedonia' },
  { code: 'RO', name: 'Romania' },
  { code: 'RW', name: 'Rwanda' },
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
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syrian Arab Republic' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TG', name: 'Togo' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: "GB", name: "United Kingdom" },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'VI', name: 'Virgin Islands' },
  { code: 'WF', name: 'Wallis and Futuna' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' },
]

// Modal Creation 
const modal = document.getElementById('modal');
const select = document.getElementById("countrySelect");

///When the user clicks the Menu button, open the modal
function openModal() {
  modal.style.display = "block";
}

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
const checkboxesContainer = $('#musicGenres');
musicGenres.forEach(genre => {
  // const checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // checkbox.value = genre;
  // checkbox.id = genre;
  // checkbox.addEventListener('change', updateSelectedGenres);

  // const label = document.createElement('label');
  // label.htmlFor = genre;
  // label.innerHTML = genre;

  // checkboxesContainer.appendChild(checkbox);
  // checkboxesContainer.appendChild(label);
  checkboxesContainer.append(`
  <input type="checkbox" onchange="updateSelectedGenres(event)" value="${genre}" id="${genre}">
  <label for="${genre}">${genre}</label>
  `)
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




///When the use clicks the Menu button, open the modal
function openModal() {
  modal.style.display = "block";
}




// find out which country is selected and play the radio
select.addEventListener("change", function () {
  let selectedValue = select.value;
  selectedCountry = countries.find(country => country.code === selectedValue);
  selectedCountries = []; // clear the array
  selectedCountries.push(selectedCountry);
});

// on submit of the modal, make a radio call based off user's inputs
let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", function () {
  let selectedValue = select.value;
  let selectedCountry = countries.find(country => country.code === selectedValue);
  musicGenres.forEach(checkbox => {
    if (checkbox.checked) {
      selectedGenres.push(checkbox.value);
    }
  });

  selectedGenres = [...new Set(selectedGenres)];

  if (selectedCountry) {
    const country = encodeURIComponent(selectedCountry.name.toLowerCase());
    const countryUrl = `https://at1.api.radio-browser.info/json/stations/bycountry/${country}`;
    console.log("Playing based on country: ", selectedCountry);
    radio(countryUrl)
  } else {
    fetchRadioStations();
  }
  modal.style.display = "none";
});

const createCountryUrls = () => {

  // call this function then get config
  get_radiobrowser_base_url_random().then((x) => {
    url = `${x}/json/stations/bycountrycodeexact/${selectedCountry}`
    // let url = `${x}/json/stations/bylanguage/${languageSelected}`
    // url = `${x}/json/tags`
    // url = `${x}/json/stations/bytag/${blues}`
    radio(url);
    return get_radiobrowser_server_config(x);
  }).then(config => {
    console.log("config:", config);
  });
  /*
  It is not possible to do a reverse DNS from a browser yet.
  The first part (a normal dns resolve) could be done from a browser by doing DOH (DNS over HTTPs)
  to one of the providers out there. (google, quad9,...)
  So we have to fallback to ask a single server for a list.
  */
  // Ask a specified server for a list of all other server.
  function get_radiobrowser_base_urls() {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest()
      // If you need https, please use the fixed server fr1.api.radio-browser.info for this request only
      request.open('GET', 'http://all.api.radio-browser.info/json/servers', true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
          var items = JSON.parse(request.responseText).map(x => "https://" + x.name);
          console.log('server list:', items)
          resolve(items);
        } else {
          reject(request.statusText);
        }
      }
      request.send();
    });
  }

  // Ask a server for its settings.
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

  /*
  Get a random available radio-browser server.
  Returns: string - base url for radio-browser api
  */
  function get_radiobrowser_base_url_random() {
    return get_radiobrowser_base_urls().then(hosts => {
      var item = hosts[Math.floor(Math.random() * hosts.length)];
      return item;
    });
  }

  // radio player function
  function radio(url) {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        let ranRadio = randomNum(data.length)
        let selectedRadio = data[ranRadio];
        if (selectedRadio.ssl_error === 0 && selectedRadio.codec === 'MP3') {
          $('#audio').attr('src', data[ranRadio].url);
          console.log('radio obj:', data[ranRadio]);
          console.log('homepage:', data[ranRadio].homepage);
          radioData = data[ranRadio];
          console.log(radioData);
          displayRadioInfo();
        } else {
          console.log(`Radio Station "${selectedRadio.name} is offline"`);
          radio(url)
        }
      })
  }

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
        radio('http://at1.api.radio-browser.info/json/stations/bylanguage/english');
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
  // This runs the top 100 billboard
  // billboard();
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
  // radio(url);
  return get_radiobrowser_server_config(x);
}).then(config => {
  console.log("config:", config);
});


/* $('#searchInput').autocomplete({
  source: 
}) */

// gets searchbar text but must input a string value
async function searchText(val) {
  let tagUrl = `http://at1.api.radio-browser.info/json/stations/bytag/${val}?limit=5`
  let nameUrl = `http://at1.api.radio-browser.info/json/stations/byname/${val}?limit=5`
  let arrOfObj = []
  let autoCompArr = []

  // fetch the names and store them in an obj and arr
  const nameResponse = await fetch(nameUrl);
  const namesData = await nameResponse.json();
  // console.log(`name data`, nameData);
  for (let indexNameNum = 0; indexNameNum < namesData.length; indexNameNum++) {
    namesData[indexNameNum].name = namesData[indexNameNum].name.replaceAll('\t', '' && '- 0 N - ', '')
    // console.log(namesData[indexNameNum]);
    arrOfObj.push({
      name: namesData[indexNameNum].name,
      uuid: namesData[indexNameNum].stationuuid
    })
    autoCompArr.push(namesData[indexNameNum].name);
  }
  // console.log(`arr of obj:`,arrOfObj)

  // fetch the tags and store them in an obj and arr
  const tagResponse = await fetch(tagUrl);
  const tagsData = await tagResponse.json();
  for (let indexTagNum = 0; indexTagNum < tagsData.length; indexTagNum++) {
    // console.log(tagsData[indexTagNum]);
    let tagss = tagsData[indexTagNum].tags
    tagsArr = tagss.split(',')
    if (tagsArr[indexTagNum] !== undefined && tagsArr[indexTagNum !== '']) {
      arrOfObj.push({
        tag: tagsArr[indexTagNum].name,
        uuid: tagsData[indexTagNum].stationuuid
      })
    }
  }
  
  $('#searchInput').autocomplete({
    source: autoCompArr
  })
  
  // Execute a function when the user presses a key on the keyboard
  $('#searchInput').keydown(function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      // console.log($('#searchInput').val());
      event.preventDefault();
      // Trigger the audio element with a click
      for(let indexedObj = 0; indexedObj < arrOfObj.length; indexedObj++){
        if($('#searchInput').val() == arrOfObj[indexedObj].tag || $('#searchInput').val() == arrOfObj[indexedObj].name){
          let uuidUrl = `http://at1.api.radio-browser.info/json/stations/byuuid/${arrOfObj[indexedObj].uuid}`
          // console.log(uuidUrl)
          $('#audio').attr('src', radio(uuidUrl))
        }
      }
    }
  })
} // searchText(val)

// adds click function on ranBtn
// Generates a random radio station
$("#ranBtn").click(function () {
  radio(url);
});

// clock function
setInterval(function () {
  $('#clock').text(dayjs().format('hh:mm:ss a'));
  // console.log(dayjs().format('hh:mm:ss a'))
  // console.log($('#searchInput').val())
  searchText($('#searchInput').val());
}, 1000);
