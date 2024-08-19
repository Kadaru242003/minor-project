let hash = window.location.href.split('#')[1] || '';

const demoportfolio = {
  "fiat": "INR",
  "token":
    [
      {
        "cryptoTicker": "BTC",
        "cryptoName": "Bitcoin",
        "cryptoQty": "0.5",
        "cryptoInvestedSum": "4000"
      },
      {
        "cryptoTicker": "ADA",
        "cryptoName": "Cardano",
        "cryptoQty": "25000",
        "cryptoInvestedSum": "1000"
      },
      {
        "cryptoTicker": "ETH",
        "cryptoName": "Ethereum",
        "cryptoQty": "15",
        "cryptoInvestedSum": "1500"
      },
      {
        "cryptoTicker": "XMR",
        "cryptoName": "Monero",
        "cryptoQty": "50",
        "cryptoInvestedSum": "1000"
      }
    ]
};
const fiats = [
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "BRL", name: "Brazilian real", symbol: "R$" },
  { code: "CAD", name: "Canadian dollar", symbol: "$" },
  { code: "CHF", name: "Swiss franc", symbol: "Fr." },
  { code: "CLP", name: "Chilean peso", symbol: "$" },
  { code: "CNY", name: "Chinese yuan", symbol: "¥" },
  { code: "CZK", name: "Czech koruna", symbol: "Kč" },
  { code: "DKK", name: "Danish krone", symbol: "kr" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "Pound sterling", symbol: "£" },
  { code: "HKD", name: "Hong Kong dollar", symbol: "$" },
  { code: "HUF", name: "Hungarian forint", symbol: "Ft" },
  { code: "IDR", name: "Indonesian rupiah", symbol: "Rp" },
  { code: "ILS", name: "Israeli new shekel", symbol: "₪" },
  { code: "INR", name: "Indian rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese yen", symbol: "¥" },
  { code: "KRW", name: "South Korean won", symbol: "₩" },
  { code: "MXN", name: "Mexican peso", symbol: "$" },
  { code: "MYR", name: "Malaysian ringgit", symbol: "RM" },
  { code: "NOK", name: "Norwegian krone", symbol: "kr" },
  { code: "NZD", name: "New Zealand dollar", symbol: "$" },
  { code: "PHP", name: "Philippine peso", symbol: "₱" },
  { code: "PKR", name: "Pakistani rupee", symbol: "Rs" },
  { code: "PLN", name: "Polish złoty", symbol: "zł" },
  { code: "RUB", name: "Russian ruble", symbol: "₽" },
  { code: "SEK", name: "Swedish krona", symbol: "kr" },
  { code: "SGD", name: "Singapore dollar", symbol: "S$" },
  { code: "THB", name: "Thai baht", symbol: "฿" },
  { code: "TRY", name: "Turkish lira", symbol: "₺" },
  { code: "TWD", name: "New Taiwan dollar", symbol: "NT$" },
  { code: "USD", name: "United States dollar", symbol: "$" },
  { code: "ZAR", name: "South African rand", symbol: "R" }
];
let coinPrices = {};
let portfolio = {};
let portfolioChart;
let userLang;
const languages = ["en", "tel"];
let coinlistFiltered = coinlist;
let locNumber;
setUserLang();
getPortfolioFromDB();
function setUserLang() {
  userLang = "en";
  let prefLanguage = localStorage.getItem("prefLanguage");
  if (prefLanguage) userLang = prefLanguage;
  else {
    console.log(navigator.languages);
    let navigatorLanguage;
    for (let i = 0; i < navigator.languages.length; i++) {
      navigatorLanguage = navigator.languages[i].slice(0, 2); 
      if (languages.indexOf(navigatorLanguage) !== -1) {
        userLang = navigatorLanguage;
        localStorage.setItem("prefLanguage", userLang);
        break;
      }
    }
  }
}
function changeAppLanguage(currLangIndex) {
  if (!currLangIndex) {
    currLangIndex = document.getElementById("lang-selection").selectedIndex;
    userLang = languages[currLangIndex];
    localStorage.setItem("prefLanguage", userLang);
  }
  else document.getElementById("lang-selection").selectedIndex = currLangIndex;
  let numberOfTextElements = Object.keys(translations).length;
  for (let i = 0; i < numberOfTextElements; i++) {
    let textToChange = document.getElementById(Object.keys(translations)[i]);
    if (hash === "" && (Object.keys(translations)[i] === "edit-portfolio-link" || Object.keys(translations)[i] === "edit-portfolio-heading")) {
      textToChange.childNodes[0].nodeValue = Object.values(translations)[i][currLangIndex][2];
      if (textToChange.title) textToChange.title = Object.values(translations)[i][currLangIndex][1];
      continue;
    }
    textToChange.childNodes[0].nodeValue = Object.values(translations)[i][currLangIndex][0];
    if (textToChange.title) textToChange.title = Object.values(translations)[i][currLangIndex][1];
  }
  let cryptoQtyDom = document.querySelectorAll(".crypto-qty");
  let cryptoInvestedSum = document.querySelectorAll(".crypto-invested-sum");
  let editPortfolioDelete = document.querySelectorAll(".delete-cell");
  for (let i = 0; i < cryptoQtyDom.length; i++) {
    cryptoQtyDom[i].title = translations["ncoins-heading"][currLangIndex][1];
    cryptoInvestedSum[i].title = translations["edit-portfolio-invested-sum"][currLangIndex][1];
    editPortfolioDelete[i].title = translations["edit-portfolio-delete"][currLangIndex][1];
  }
}

function getPortfolioFromDB() {
  if (hash == "") {
    console.log("Hash is empty --> Load Demoportfolio!");
    portfolio = demoportfolio;
    createEditTable();
    downloadCoinPrices();
    return;
  }
  const retrievedStringFromLocalStorage = localStorage.getItem(hash);
  if (retrievedStringFromLocalStorage != null) {
    console.log("Portfolio found in local storage! I will use this data to display the portfolio first. In the meantime the version from the DB is downloaded as well.");
    portfolioFromLocalStorage = JSON.parse(retrievedStringFromLocalStorage);
    portfolio = portfolioFromLocalStorage;
    downloadCoinPrices();
    createEditTable();
  } else {
    console.log("Portfolio NOT available in local storage! Load it as usual from DB and save a copy in LS.");
  }
  var url = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/GetPortfolio?id=" + hash; //Azure Function URL
  fetch(url)
    .then(handleErrors)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (retrievedStringFromLocalStorage != null) {
        if (portfolioFromLocalStorage.updatedAt == data.updatedAt) {
          console.log("'updatedAt' from portfolio in DB is SIMILAR with the one in local storage. No need to update display.");
          return;
        }
      }
      console.log("DB version of portfolio is NEWER as the one in local storage or local storage is empty! Update display & Update local storage.");
      portfolio = data;
      downloadCoinPrices();
      createEditTable();
      localStorage.setItem(hash, JSON.stringify(portfolio));
    })
    .catch(error => {
      console.error('There was an error:', error.message);
      hash = "";
      location.hash = "";
      getPortfolioFromDB();
      let infotext = "<strong>" + translInfotextMessages.errorWhileDownloading[languages.indexOf(userLang)] + "</strong><br>" + error.message;
      showAlert(infotext, "fail");
    });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function downloadCoinPrices() {
  var allTickers = portfolio.token.map(item => item.cryptoTicker);
  var coinAPI = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + allTickers + "&tsyms=" + portfolio.fiat;
  fetch(coinAPI)
    .then(handleErrors)
    .then(res => {
      return res.json();
    })
    .then(prices => {
      coinPrices = prices;
      displayPortfolio();
      createChartData();
      let index = languages.indexOf(userLang);
      changeAppLanguage(index);
    })
    .catch(error => {
      console.error('There was an error while downloading coin prices:', error.message);
      let infotext = "<strong>" + translInfotextMessages.errorWhileDownloadingCoinPrices[languages.indexOf(userLang)] + "</strong><br>" + error.message;
      showAlert(infotext, "fail");
    });
}

function displayPortfolio() {
  var myContainer = document.getElementById("display-portfolio");
  var thisHTML = "";
  thisHTML += "<table id='portfolio-table'>";
  thisHTML += "<thead>";
  thisHTML += "<tr>";
  thisHTML += "<th id='coin-name' onclick='sortTable(0)' title='xxName of Cryptocurrency/Token. Click here to sort alphabetically'>xxName <div class='arrows-name'><div title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='last-price' onclick='sortTable(1)' title='xxLast price. Click here to sort.'>xxLast <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='change-perc' onclick='sortTable(2)' title='xxChange in percent in the last 24h. Click here to sort.'>xxChange <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss-24h' onclick='sortTable(3)' title='xxGain/loss in the last 24h. Click here to sort.'>xxG/L Today <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss' onclick='sortTable(4)' title='xxOverall gain/loss. Click here to sort.'>xxGain / Loss <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "</tr>";
  thisHTML += "</thead>";
  var i = 0;
  var overallGainLoss = 0;
  var overallGainLossToday = 0;
  var cryptoStyle = "class='cryptoUp'";
  var fiatSymbol = fiats.find(i => i.code === portfolio.fiat).symbol;
  thisHTML += "<tbody>";
  thisHTML += "<tr>";
  for (i = 0; i < portfolio.token.length; i++) {
    var cryptoTicker = portfolio.token[i].cryptoTicker;
    let check = coinPrices['RAW'][cryptoTicker];
    if (typeof check == 'undefined') { continue; } 
    var fullName = portfolio.token[i].cryptoName;
    var cryptoQty = portfolio.token[i].cryptoQty;
    var cryptoInvestedSum = portfolio.token[i].cryptoInvestedSum;
    var lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    var changePct24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGEPCT24HOUR'];
    var change24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGE24HOUR'];
    var cryptoGainLoss = 0;
    var cryptoGainLossToday = 0;
    var cryptoBuyingPrice = 0;
    if (changePct24H != null) {
      changePct24H = changePct24H.toFixed(1).concat(" %");
      }
    if (cryptoQty != 0) {
      cryptoBuyingPrice = cryptoInvestedSum / cryptoQty;
      cryptoGainLoss = cryptoQty * (lastPrice - cryptoBuyingPrice);
      cryptoGainLossToday = cryptoQty * change24H;
      overallGainLoss += cryptoGainLoss;
      overallGainLossToday += cryptoGainLossToday;
    }
    if (lastPrice < 0.1) {
      lastPrice = parseFloat(lastPrice).toFixed(3);
    } else if (lastPrice < 10) {
      lastPrice = parseFloat(lastPrice).toFixed(2);
    } else {
      lastPrice = parseFloat(lastPrice).toFixed(0);
    }
    thisHTML += "<td><a href='https://coinmarketcap.com/currencies/" + fullName.toLowerCase() + "' target=_blank>" + fullName + "</a></td>";
    thisHTML += "<td>" + lastPrice + " " + fiatSymbol + "</td>";
    cryptoStyle = redOrGreen(change24H);
    thisHTML += "<td " + cryptoStyle + ">" + changePct24H + "</td>";
    thisHTML += "<td " + cryptoStyle + ">" + cryptoGainLossToday.toFixed(0) + " " + fiatSymbol + "</td>";
    thisHTML += "<td " + redOrGreen(cryptoGainLoss) + ">" + cryptoGainLoss.toFixed(0) + " " + fiatSymbol + "</td>";
    thisHTML += "</tr>";
  }

  thisHTML += "</tbody>";
  thisHTML += "<tfoot>";
  thisHTML += "<tr>";
  thisHTML += "<td>Total</td>";
  thisHTML += "<td></td>";
  thisHTML += "<td></td>";
  thisHTML += "<td " + redOrGreen(overallGainLossToday) + ">" + add1000Separators(overallGainLossToday.toFixed(0)) + " " + fiatSymbol + "</td>";
  thisHTML += "<td " + redOrGreen(overallGainLoss) + ">" + add1000Separators(overallGainLoss.toFixed(0)) + " " + fiatSymbol + "</td>";
  thisHTML += "</tr>";
  thisHTML += "</tfoot>";
  thisHTML += "</table>";
  thisHTML += "<div class='watermark'>Demoportfolio</div>";
  myContainer.innerHTML = thisHTML;
  if (hash == "") {
    document.querySelector(".watermark").style.display = "inline-block";
    document.getElementById("edit-portfolio-link").innerText = "xxCreate Portfolio";
  } else {
    document.getElementById("edit-portfolio-link").innerText = "xxEdit Portfolio";
  }
}

function redOrGreen(value) {
  var cryptoStyle;
  if (value == 0) {
    cryptoStyle = "";
  } else if (value < 0) {
    cryptoStyle = "class='cryptoDown'";
  } else {
    cryptoStyle = "class='cryptoUp'";
  }
  return cryptoStyle;
}

function add1000Separators(nStr) {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0]; 
  const x2 = x.length > 1 ? ',' + x[1] : ''; 
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2; 
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0, xGreaterThanY;
  table = document.getElementById("portfolio-table");
  switching = true;
  var arrowDown = document.getElementsByClassName("arrows-name")[n].firstElementChild;
  var arrowUp = document.getElementsByClassName("arrows-name")[n].lastElementChild;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 2); i++) {
      shouldSwitch = false;
      xGreaterThanY = false;
      if (n === 0) {
        x = rows[i].getElementsByTagName("TD")[n].innerText.toLowerCase();
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.toLowerCase();
        if (x > y) xGreaterThanY = true;
      } else {
        x = rows[i].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');//Regex: Remove everything except numbers, "-" and ".",e.g. "-35.6 %" --> "-35.6"
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');
        if (Number(x) > Number(y)) xGreaterThanY = true;
      }
      if (dir == "asc") {
        if (xGreaterThanY) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (!xGreaterThanY && Number(x) !== Number(y)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  showAllArrows(); 
  if (dir == "asc") arrowDown.classList.remove("triangle-down"); 
  else if (dir == "desc") arrowUp.classList.remove("triangle-up"); 
}

function showAllArrows() {
  var allArrows = document.getElementsByClassName("arrows-name");
  for (let i = 0; i < allArrows.length; i++) {
    var arrowDown = document.getElementsByClassName("arrows-name")[i].firstElementChild;
    var arrowUp = document.getElementsByClassName("arrows-name")[i].lastElementChild;
    arrowDown.classList.add("triangle-down");
    arrowUp.classList.add("triangle-up");
  }
}

function createChartData() {
  let chartLabels = [], coinOverallValue = [];

  for (i = 0; i < portfolio.token.length; i++) {
    var cryptoTicker = portfolio.token[i].cryptoTicker;
    var cryptoQty = portfolio.token[i].cryptoQty;
    let check = coinPrices['RAW'][cryptoTicker];
    if (typeof check == 'undefined') { continue; }
    var lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    var fiatSymbol = coinPrices['DISPLAY'][cryptoTicker][portfolio.fiat]['TOSYMBOL'];

    chartLabels.push(portfolio.token[i].cryptoName);
    coinOverallValue.push(Math.round(cryptoQty * lastPrice));
  }
  let chartData = {
    type: 'pie', 
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Overall Value',
        data: coinOverallValue,
        backgroundColor: [
          'green',
          'red',
          'blue',
          'yellow',
          'brown',
          'orange',
          'violet',
          'lime',
          'darkcyan',
          'wheat',
          'mistyrose',
          'slategray',
          'goldenrod',
          'olive',
          'lavender',
          'moccasin'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }]
    },
    options: {
      title: {
        display: false,
        text: 'Portfolio Weighting',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontColor: '#000'
        }
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            let datasetLabel = data.labels[tooltipItem.index] || 'Other';
            let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || 'Other';
            return datasetLabel + ": " + value + " " + fiatSymbol;
          }
        }
      }
    }
  };
  if (portfolioChart !== undefined) portfolioChart.destroy();
  let myChart = document.getElementById('chart-canvas').getContext('2d');
  portfolioChart = new Chart(myChart, chartData);
}

function createEditTable() {
  var tableHTML = '<button id="edit-portfolio-button" onclick="toggleSegmentDisplay(\'.edit-portfolio\')" class="close" title="xxxClose the edit tablexx" aria-label="Close the portfolio edit table">&times;</button>';
  tableHTML += "<h1 id='edit-portfolio-heading'>xxEdit Portfolioxx</h1>";
  tableHTML += '<table id="portfolio-update-form">';
  tableHTML += "<thead>";
  tableHTML += "<tr>";
  tableHTML += '<th id="edit-portfolio-select-coin" title="xxSelect coinxx">xxSelectionxx</th>';
  tableHTML += '<th id="ncoins-heading" title="xxOverall number of coins in your possessionxx">xxNumber of coinsxx</th>';
  tableHTML += '<th id="edit-portfolio-invested-sum" title="xxHow much fiat did you invest to buy this coin?xx">xxInvested sumxx</th>';
  tableHTML += '<th id="edit-portfolio-delete" title="xx">xx</th>';
  tableHTML += '<th>Ticker Symbol</th>';
  tableHTML += '<th>Name</th>';
  tableHTML += '</tr>';
  tableHTML += '</thead>';
  tableHTML += '<tbody id="token">';

  for (let i = 0; i < portfolio.token.length; i++) {
    tableHTML += "<tr class='token-row'>";
    tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">Select coin...<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
    tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="Overall number of coins in your possession" required="true"></td>';
    tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="How much fiat did you invest to buy this coin?" required="true"></td>';
    tableHTML += '<td class="delete-cell" onclick="deleteRow(this)" title="Click to delete coin"><svg class="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
    tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
    tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
    tableHTML += "</tr>";
  }

  tableHTML += "</tbody>";
  tableHTML += "<tfoot>";
  tableHTML += "<tr>";
  tableHTML += '<td id="add-token" title="xxAdd a new tokenxx" onclick="insertRow()">+</td>';
  tableHTML += "</tr>";
  tableHTML += "</tfoot>";
  tableHTML += "</table>";
  tableHTML += '<div class="fiat">';
  tableHTML += '<label for="fiat" class="fiat-label">Fiat </label>';
  tableHTML += '<select id="fiat" class="fiat-select" title="xxSelect your fiat currencyxx">';
  for (let i = 0; i < fiats.length; i++) {
    tableHTML += '<option value="' + fiats[i].code + '">' + fiats[i].code + ' - ' + fiats[i].name + '</option>';
  }
  tableHTML += '</select>';
  tableHTML += '</div>';
  tableHTML += '<button id="edit-portfolio-save-button" class="save-button" onclick="postPortfolio()" title="xxSave portfolio to databasexx"> xxSavexx <svg id="upload-icon"><use xlink:href="img/icons.svg#upload-logo"></use></svg><div class="loading-animation"></div></button>';
  tableHTML += '<button id="edit-portfolio-delete-button" class="delete-portfolio-button" onclick="deletePortfolio()" title="xxIrrevocably delete portfolio from databasexx">xxDelete Portfolioxx</button>';
  tableHTML += '<div id="edit-table-foot"></div>';
  document.querySelector(".edit-portfolio").innerHTML = tableHTML;
  fillOutTable();
  if (hash === "") {
    document.getElementById("edit-portfolio-heading").innerText = "xxCreate Portfolio";
    document.querySelector(".delete-portfolio-button").style.display = "none";
  }
}

function insertRow() {
  var lastInputField = document.getElementById("token").lastElementChild.querySelector(".crypto-ticker").value;
  if (lastInputField === "") {
    showAlert(translInfotextMessages.selectCoinFirst[languages.indexOf(userLang)], "fail");
    console.log("Select a coin in the previous input field first.");
    return;
  }
  var entries = document.getElementById("token");
  var tableHTML = "<tr class='token-row'>";
  tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">' + translations["edit-portfolio-select-coin"][languages.indexOf(userLang)][1] + '<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
  tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="' + translations["ncoins-heading"][languages.indexOf(userLang)][1] + '" required="true"></td>';
  tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="' + translations["edit-portfolio-invested-sum"][languages.indexOf(userLang)][1] + '" required="true"></td>';
  tableHTML += '<td class="delete-cell" onclick="deleteRow(this)" title="' + translations["edit-portfolio-delete"][languages.indexOf(userLang)][1] + '"><svg class="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
  tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
  tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
  tableHTML += "</tr>";
  entries.insertAdjacentHTML("beforeend", tableHTML);
  SelectCoinButton = document.querySelector("#token").lastElementChild.querySelector(".dropdown-button");
  createOptions(SelectCoinButton);
  showHideDropdown(SelectCoinButton);
}

function deleteRow(b) {
  var nRows = document.getElementById("portfolio-update-form").rows.length;
  if (nRows > 3) {
    var i = b.parentNode.rowIndex;
    document.getElementById("portfolio-update-form").deleteRow(i);
  } else {
    console.log("Last token row cannot be deleted!");
  }
}

function fillOutTable() {
  var fiatIndex = fiats.findIndex(i => i.code === portfolio.fiat);
  document.getElementById("fiat").selectedIndex = fiatIndex;
  for (i = 0; i < portfolio.token.length; i++) {
    var ticker = portfolio.token[i].cryptoTicker;
    var n = coinlist.findIndex(i => i.Symbol === ticker);
    var selectCoin = document.getElementsByClassName("dropdown-button")[i];
    var ticker = document.getElementsByClassName("crypto-ticker")[i];
    var name = document.getElementsByClassName("crypto-name")[i];
    var quantity = document.getElementsByClassName("crypto-qty")[i];
    var investedSum = document.getElementsByClassName("crypto-invested-sum")[i];
    selectCoin.innerHTML = sanitizeHTML(coinlist[n].FullName) + "<div class='triangle-down'></div>";
    ticker.setAttribute("value", sanitizeHTML(coinlist[n].Symbol));
    name.setAttribute("value", sanitizeHTML(coinlist[n].CoinName));
    quantity.setAttribute("value", sanitizeHTML(portfolio.token[i].cryptoQty));
    investedSum.setAttribute("value", sanitizeHTML(portfolio.token[i].cryptoInvestedSum));
  }
}

function filterCoins(e) {
  var allToken = e.closest(".dropdown-content").querySelector(".all-token").children;
  if (event.keyCode == '38') {
    console.log("Up arrow");
    if (locNumber > 0) {
      locNumber--;
      console.log("locNumber", locNumber);
      allToken[locNumber].classList.add("active");
      if (locNumber < allToken.length) {
        allToken[locNumber + 1].classList.remove("active");
      }
    }
    return;
  }
  else if (event.keyCode == '40') {
    console.log("Down arrow");
    if (locNumber < allToken.length - 1) {
      locNumber++;
      console.log("locNumber", locNumber);
      allToken[locNumber].classList.add("active");
      if (locNumber > 0) {
        allToken[locNumber - 1].classList.remove("active");
      }
    }
    return;
  }
  else if (event.keyCode == '13') {
    console.log("Enter");
    if (locNumber > -1) {
      writeToNameField(allToken[locNumber], locNumber);
    } else {
      writeToNameField(allToken[0], 0);
    }
    return;
  }
  else if (event.keyCode == '27') {
    console.log("Escape");
    showHideDropdown(e.parentElement);
  }
  var input = e.value.toUpperCase();
  coinlistFiltered = coinlist.filter(function (coin) {
    if (coin.FullName.toUpperCase().indexOf(input) > -1) {
      return coin;
    }
  });
  createOptions(e);
  locNumber = -1; 
}

function createOptions(e) {
  var option = "";
  if (coinlistFiltered.length > 0) {
    for (index in coinlistFiltered) {
      option += "<a href='javascript:void(0)' onclick='writeToNameField(this, " + index + ")'>" + coinlistFiltered[index].FullName + "</option>";
      if (index >= 5) {
        break;
      }
    }
  } else {
    option = "<a href='javascript:void(0)' class='nothing-found'>" + translInfotextMessages.nothingFound[languages.indexOf(userLang)] + "</option>";
  }
  var tokenContainer = e.closest(".token-row").querySelector('.all-token');
  tokenContainer.innerHTML = option;
}

function writeToNameField(e, index) {
  var dropdownName = e.closest(".token-row").querySelector(".dropdown-button");
  var cryptoTicker = e.closest(".token-row").querySelector('.crypto-ticker');
  var cryptoName = e.closest(".token-row").querySelector('.crypto-name');
  dropdownName.innerHTML = coinlistFiltered[index].FullName + "<div class='triangle-down'></div>";
  cryptoTicker.value = coinlistFiltered[index].Symbol;
  cryptoName.value = coinlistFiltered[index].CoinName;
  showHideDropdown(e.closest(".token-row").querySelector(".dropdown-button"));
}

function showHideDropdown(e) {
  var dropDownContent = e.closest(".token-row").querySelector(".dropdown-content");
  dropDownContent.classList.toggle("show-dropdown-content");
  var searchField = e.closest(".token-row").querySelector(".my-input");
  searchField.value = "";
  searchField.focus();
  searchField.scrollIntoView();
  coinlistFiltered = coinlist; 
  locNumber = -1; 
}

function createPortfolioObject() {
  portfolio = {};
  portfolio["fiat"] = document.getElementById("fiat").value;
  portfolio["token"] = [];
  var nToken = document.getElementById("token").childElementCount;
  var cryptoTicker = document.getElementsByClassName("crypto-ticker");
  var cryptoName = document.getElementsByClassName("crypto-name");
  var cryptoQty = document.getElementsByClassName("crypto-qty");
  var cryptoInvestedSum = document.getElementsByClassName("crypto-invested-sum");
  if (cryptoTicker.length == 0) {
    console.log("No entries in form. Delete Portfolio?");
    deletePortfolio();
    return false;
  }
  var ticker = [];
  for (var j = 0; j < cryptoTicker.length; j++) {
    ticker[j] = cryptoTicker[j].value;
  }
  var ticker = ticker.sort(); 
  for (var j = 0; j < ticker.length; j++) {
    if (ticker[j + 1] == ticker[j]) {
      showAlert(translInfotextMessages.eachCoinOnlyOnce[languages.indexOf(userLang)], "fail");
      return false;
    }
  }
  var empty = true;
  ticker.forEach(entry => {
    if (entry.trim() !== "") {
      empty = false;
    }
  });
  if (empty == true) {
    showAlert("Coinnames are all EMPTY! Please correct.", "fail");
    return false;
  }
  for (let i = 0; i < nToken; i++) {
    if (cryptoInvestedSum[i].value == "") {
      console.log("'cryptoInvestedSum' for " + cryptoName[i].value + " is empty! Will be changed to 0.");
      cryptoInvestedSum[i].value = 0;
    }
    if (cryptoQty[i].value < 0) {
      console.log("'cryptoQty' for " + cryptoName[i].value + " is negative! Will be changed to absolute value.");
      cryptoQty[i].value = Math.abs(cryptoQty[i].value);
    }
    if (cryptoInvestedSum[i].value < 0) {
      console.log("'cryptoInvestedSum' for " + cryptoName[i].value + " is negative! Will be changed to absolute value.");
      cryptoInvestedSum[i].value = Math.abs(cryptoInvestedSum[i].value);
    }
    if (cryptoQty[i].value == "") {
      console.log("'cryptoQty' for " + cryptoName[i].value + " is empty! Will be changed to 0.");
      cryptoQty[i].value = 0;
    }
    if (cryptoTicker[i].value.trim() === "") {
      console.log("Row " + i + " will be omitted. Empty!");
      continue;
    }
    var obj = { cryptoTicker: cryptoTicker[i].value, cryptoName: cryptoName[i].value, cryptoQty: cryptoQty[i].value, cryptoInvestedSum: cryptoInvestedSum[i].value };
    portfolio.token.push(obj);
  }

  if (JSON.stringify(portfolio) === JSON.stringify(demoportfolio)) {
    showAlert(translInfotextMessages.createPersonalPortfolio[languages.indexOf(userLang)], "fail");
    return false;
  }
  sortPortfolio();
}
function sanitizeHTML(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

function postPortfolio() {
  var validityCheck = createPortfolioObject();
  if (validityCheck == false) {
    console.log("Validation failed! Upload cancelled!");
    return;
  }

  var urlPost;
  if (hash !== "") {
    console.log("Hash is NOT empty! Overwrite current portfolio in the DB");
    urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/PostPortfolio?id=" + hash;
  } else {
    console.log("Hash IS empty! Create a new portfolio entry in the DB");
    urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/PostPortfolio";
    // urlPost = "http://localhost:7071/api/PostPortfolio";
  }
  deactivateSaveButton();
  fetch(urlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(portfolio),
  })
    .then(handleErrors)
    .then(res => res.json()) 
    .then(response => {
      window.location.href = "" + "#" + response._id; 
      portfolio = response;
      localStorage.setItem(response._id, JSON.stringify(portfolio));
      deactivateSaveButton();
      toggleSegmentDisplay('.edit-portfolio');
      document.getElementById("display-portfolio").scrollIntoView();
      var infotext;
      if (hash !== "") {
        infotext = translInfotextMessages.uploadSuccessUpdate[languages.indexOf(userLang)];
        showAlert(infotext, "success");
      } else {
        //Update hash variable
        hash = window.location.href.split('#')[1] || '';
        infotext = translInfotextMessages.uploadSuccessCreate[languages.indexOf(userLang)];
        showAlert(infotext, "success");
      }
      downloadCoinPrices();
      createEditTable();
    })
    .catch(error => {
      console.error("There was an error while uploading the portfolio to the DB: ", error);
      let infotext = translInfotextMessages.errorWhileUploading[languages.indexOf(userLang)] + " " + error;
      showAlert(infotext, "fail");
      deactivateSaveButton();
    });
}

function deactivateSaveButton() {
  var saveButton = document.querySelector(".save-button");
  saveButton.classList.toggle("deactivate");
  document.querySelector(".loading-animation").classList.toggle("show");
}

function deletePortfolio() {
  if (confirm(translInfotextMessages.deleteConfirm[languages.indexOf(userLang)]) == false) {
    return;
  }
  const urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/DeletePortfolio?id=" + hash;
  fetch(urlPost, {
    method: "DELETE", 
  }).then(res => res.text()) 
    .then(response => {
      console.log(response);
      window.location.hash = "";
      localStorage.removeItem(hash);
      hash = "";
      getPortfolioFromDB();
      let infotext = translInfotextMessages.deleteSuccess[languages.indexOf(userLang)];
      showAlert(infotext, "success");
      toggleSegmentDisplay('.edit-portfolio');
      document.getElementById("display-portfolio").scrollIntoView();
    })
    .catch(error => {
      let infotext = translInfotextMessages.deleteFail[languages.indexOf(userLang)] + " " + error;
      showAlert(infotext, "fail");
      console.error('Error:', error);
    });
}

function sortPortfolio() {
  var token = portfolio.token;
  token.sort(function (a, b) {
    return a.cryptoName.localeCompare(b.cryptoName);
  });
}

function toggleSegmentDisplay(segment) {
  var div = document.querySelector(segment);
  div.classList.toggle("toggle-segment-display");
  div.scrollIntoView();
  document.getElementById("menu-btn").checked = false; 
}

function closeAlert() {
  var alert = document.getElementById("alert");
  alert.style.opacity = "0";
  setTimeout(function () { alert.style.display = "none"; }, 300);
}

function showAlert(text, colorClass) {
  var alert = document.getElementById("alert");
  var alertText = document.getElementById("alert-text");
  alertText.innerHTML = text;
  alert.style.display = "block";
  alert.className = ""; 
  alert.classList.add(colorClass);
  setTimeout(function () { alert.style.opacity = "1"; }, 10);
  alert.scrollIntoView();
}
