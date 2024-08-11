//Translations for all user facing text on the app. Attention: Keys have to be named similar to the html id's!
const translations = {
  "chart-link": [["Chart", "Show the overall value of each cryptocurrency on a pie chart"], ["చార్ట్", "ప్రతి క్రిప్టోకరెన్సీ యొక్క మొత్తం విలువను పై చార్ట్ లో చూపించు"]],
  "edit-portfolio-link": [["Edit Portfolio", "Edit your own portfolio", "Create Portfolio"], ["పోర్ట్ఫోలియో ఎడిట్ చేయండి", "మీ సొంత పోర్ట్ఫోలియోను ఎడిట్ చేయండి", "పోర్ట్ఫోలియో సృష్టించండి"]],
  "faq-link": [["FAQ", "Some frequently asked questions"], ["FAQ", "కొన్ని తరచుగా అడిగే ప్రశ్నలు"]],
  "forum-link": [["Forum", "A Disqus forum for questions"], ["ఫోరం", "ప్రశ్నల కోసం డిస్కస్ ఫోరం"]],

  //Display Portfolio
  "coin-name": [["Name ", "Name of Cryptocurrency/Token. Click here to sort alphabetically"], ["పేరు ", "క్రిప్టోకరెన్సీ / టోకెన్ పేరు. వర్ణక్రమంలో క్రమబద్ధీకరించడానికి ఇక్కడ క్లిక్ చేయండి"]],
  "last-price": [["Last ", "Last price. Click here to sort"], ["చివరి ధర ", "చివరి ధర. ఇక్కడ క్లిక్ చేయండి"]],
  "change-perc": [["Change ", "Change in percent in the last 24h. Click here to sort"], ["మార్పు % ", "చివరి 24 గంటల్లో మార్పు శాతం. ఇక్కడ క్లిక్ చేయండి"]],
  "gain-loss-24h": [["G/L (24h) ", "Gain/loss in the last 24h. Click here to sort"], ["లాభం/నష్టం (24h) ", "చివరి 24 గంటల్లో లాభం / నష్టం. ఇక్కడ క్లిక్ చేయండి"]],
  "gain-loss": [["Gain / Loss ", "Overall gain/loss. Click here to sort"], ["లాభం / నష్టం ", "మొత్తం లాభం / నష్టం. ఇక్కడ క్లిక్ చేయండి"]],
  
  //Chart
  "chart-button": [["×", "Close the Chart"], ["×", "చార్ట్ మూసివేయి"]],
  "chart-heading": [["Portfolio Weighting", "Displays the overall distribution of your investment on a pie chart"], ["పోర్ట్ఫోలియో బరువు", "నీ పెట్టుబడికి మొత్తం పంపిణీని పై చార్ట్ లో చూపిస్తుంది"]],
  
  //FAQ
  "faq-button": [["×", "Close the FAQ"], ["×", "FAQ మూసివేయి"]],
  
  //Edit Portfolio
  "edit-portfolio-button": [["×", "Close the edit table. Your changes are not saved to the server. Click Save to save changes"], ["×", "సవరణ పట్టికను మూసివేయి. మీ మార్పులు సర్వర్ లో సేవ్ చేయబడవు. మార్పులను సేవ్ చేయడానికి సేవ్ క్లిక్ చేయండి."]],
  "edit-portfolio-heading": [["Edit Portfolio", "", "Create Portfolio"], ["పోర్ట్ఫోలియో ఎడిట్ చేయండి", "", "పోర్ట్ఫోలియో సృష్టించండి"]],
  "edit-portfolio-select-coin": [["Selection", "Select coin..."], ["ఎంపిక", "కాయిన్ ఎంచుకోండి..."]],
  "ncoins-heading": [["Number of coins", "Overall number of coins in your possession"], ["నాణేలు సంఖ్య", "నీ సమగ్ర స్వాధీనం లో ఉన్న నాణేలు మొత్తం సంఖ్య"]],
  "edit-portfolio-invested-sum": [["Invested sum", "How much fiat did you invest to buy this coin?"], ["ఇన్వెస్టు మొత్తం", "ఈ కాయిన్ కొనడానికి మీరు ఎంత ఫియట్ పెట్టుబడి పెట్టారు?"]],
  "edit-portfolio-delete": [["", "Click to remove coin from portfolio"], ["", "పోర్ట్ఫోలియో నుండి కాయిన్ ను తీసివేయడానికి క్లిక్ చేయండి"]],
  "add-token": [["+", "Add a new coin"], ["+", "కొత్త కాయిన్ జోడించు"]],
  "fiat": [["", "Select your fiat currency"], ["", "మీ ఫియట్ కరెన్సీని ఎంచుకోండి"]],
  "edit-portfolio-save-button": [["Save ", "Save portfolio to database"], ["సేవ్ ", "పోర్ట్ఫోలియోను డేటాబేస్ లో సేవ్ చేయండి"]],
  "edit-portfolio-delete-button": [["Delete Portfolio", "Irrevocably delete portfolio from database"], ["పోర్ట్ఫోలియో తొలగించు", "డేటాబేస్ నుండి పోర్ట్ఫోలియోను పూర్తిగా తొలగించండి"]]
};

const translInfotextMessages = {
  "errorWhileDownloading": ["There was an error while downloading your portfolio from the DB", "DB నుండి మీ పోర్ట్ఫోలియో డౌన్‌లోడ్ చేయడానికి లోపం సంభవించింది"],
  "errorWhileDownloadingCoinPrices": ["There was an error while downloading coin prices from CryptoCompare", "CryptoCompare నుండి కాయిన్ ధరలను డౌన్‌లోడ్ చేయడంలో లోపం సంభవించింది"],
  "errorWhileUploading": ["There was an error while uploading your portfolio to the database", "మీ పోర్ట్ఫోలియోను డేటాబేస్‌కు అప్లోడ్ చేయడంలో లోపం సంభవించింది"],
  "uploadSuccessUpdate": ["<strong>Portfolio has been saved</strong><br>The URL is unchanged (see address bar). Please bookmark this URL if you have not done so already.", "<strong>పోర్ట్ఫోలియో సేవ్ చేయబడింది</strong><br>URL మార్చబడలేదు (చిరునామా బార్ చూడండి). మీరు ఇంకా చేయకపోతే ఈ URLను బుక్‌మార్క్ చేయండి."],
  "uploadSuccessCreate": ["<strong>Portfolio has been created</strong><br>It can be accessed and edited in the future via the URL in the address bar. Please <strong>bookmark this URL</strong>.", "<strong>పోర్ట్ఫోలియో సృష్టించబడింది</strong><br>దాన్ని భవిష్యత్తులో URL ద్వారా యాక్సెస్ చేసి ఎడిట్ చేయవచ్చు. దయచేసి <strong>ఈ URLను బుక్‌మార్క్ చేయండి</strong>."],
  "deleteConfirm": ["Do you really want to irretrievably delete the portfolio?", "మీరు నిజంగా పోర్ట్ఫోలియోను తిరిగి పొందలేని విధంగా తొలగించాలనుకుంటున్నారా?"],
  "deleteSuccess": ["<strong>Portfolio has been deleted</strong><br>It can no longer be accessed.", "<strong>పోర్ట్ఫోలియో తొలగించబడింది</strong><br>ఇకపై దీనిని యాక్సెస్ చేయలేరు."],
  "deleteFail": ["There was an error while deleting the portfolio from the database: ", "డేటాబేస్ నుండి పోర్ట్ఫోలియోను తొలగించడంలో లోపం సంభవించింది: "],
  "selectCoinFirst": ["Select a coin in the previous input field first", "ముందు ఇన్‌పుట్ ఫీల్డ్‌లో కాయిన్ ఎంచుకోండి"],
  "nothingFound": ["Nothing found...", "ఏమి కనుగొనబడలేదు..."],
  "eachCoinOnlyOnce": ["Each and every coin can only be in the portfolio once! Please correct", "ప్రతి కాయిన్ ఒకసారి మాత్రమే పోర్ట్ఫోలియోలో ఉండాలి! దయచేసి సరి చేయండి"],
  "createPersonalPortfolio": ["Create your personal portfolio first!", "ముందుగా మీ వ్యక్తిగత పోర్ట్ఫోలియో సృష్టించండి!"]
};

const translFAQ = {
  //FAQ
  "question1":
    ['<summary><h2>What are the advantages of this portfolio app compared to others?</h2></summary><ul><li><b>Not-for-profit.</b> This app was solely written for my personal use and as an exercise. But I would be glad if you would find it useful, too. The source code can be accessed on <a href="https://github.com/rene78/My-Cryptoportfolio">Github.</a></li> <li><b>Ad-free.</b> No annoying ads, which slow down page load and impair user experience.</li> <li><b>Cookie-free.</b> No user information is saved to servers.</li> <li><b>Hassle-free.</b> Personal portfolio can be accessed via a unique URL. No login required.</li> <li><b>Web app.</b> No installation needed.</li> <li><b>Responsive.</b> Works on all devices.</li> <img src="img/multi-devices.png" alt="Multi Devices"></ul>',
      '<summary><h2>Was sind die Vorteile dieser Portfolio App im Vergleich zu anderen?</h2></summary><ul><li><b>Nicht gewinnortientiert.</b> Dieses Programm wurde lediglich zum Eigengebrauch und zu Trainingszwecken geschrieben. Dennoch würde es mich freuen, wenn der ein oder andere damit auch was anfangen kann. Der Quellcode kann auf <a href="https://github.com/rene78/My-Cryptoportfolio">Github</a> abgerufen werden.</li> <li><b>Werbefrei.</b> Keine nervige Werbung, die die Ladezeit verlängert und die Anwenderfreundlichkeit verschlechtert.</li> <li><b>Frei von Cookies.</b> Keine Anwenderinformationen werden auf Servern gespeichert.</li> <li><b>Unkompliziert.</b> Persönliches Portfolio kann über eindeutige URL angezeigt werden. Kein Einloggen notwendig.</li> <li><b>Web App.</b> Keine Installation notwendig.</li> <li><b>Responsiv.</b> Funktioniert auf allen Geräten.</li> <img src="img/multi-devices.png" alt="Multi Devices"></ul>'],
  "question2":
    ['<summary><h2>Is it safe to enter my portfolio on this site?</h2></summary><p>As long as you do not share your personal portfolio URL your  should be safe. All portfolios are saved to the database in a completely anonymous fashion with no link to the user whatsoever. This web app does not collect any cookies (except third-party cookies from Disqus), does not have ads and is 100% open source. The source code can be viewed and changed on Github (<a href="https://github.com/rene78/My-Cryptoportfolio">My Cryptoportfolio)</a>.</p>',
      '<summary><h2>Ist es sicher, mein Portfolio auf dieser Seite einzutragen?</h2></summary><p>Solange Du Deine persönliche Portfolio-URL nicht weitergibst, sollte es keine Probleme geben. Alle Portfolios werden völlig anonym in der Datenbank gespeichert, ohne jegliche Verknüpfung zum Ersteller. Diese App sammelt keine Cookies (außer Drittanbieter-Cookies von Disqus), hat keine Werbung und ist zu 100% Open Source. Der Quellcode kann auf Github eingesehen und geändert werden (<a href="https://github.com/rene78/My-Cryptoportfolio">My Cryptoportfolio)</a>.</p>'],
  "question3":
    ['<summary><h2>How to use the app?</h2></summary><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aPPmpXDy4LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      '<summary><h2>Wie benutzt man die App?</h2></summary><p>Siehe Video. Bitte bei Bedarf deutschen Untertitel aktivieren.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aPPmpXDy4LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
  "question4":
    ['<summary><h2>Can I support the development?</h2></summary><p>This would be very much appreciated! There are four ways:</p><ol><li>Leave your suggestions in the forum on this site</li><li>Even better: If you know some JS, HTML and CSS you can <a href="https://github.com/rene78/My-Cryptoportfolio">improve the app</a></li><li>Help to <a href="https://github.com/rene78/My-Cryptoportfolio/tree/master/data#translate">translate the app to your mother tongue</a></li><li>Currently Microsoft Azure wants an exploitative 0.40€/year for hosting the site. Help me to cover these immense costs <div class="tallypay" data-user_name="rene78" data-button="Donate"></div> </li></ol>',
      '<summary><h2>Kann ich die Entwicklung unterstützen?</h2></summary><p>Das wäre sehr willkommen! Es gibt vier Möglichkeiten:</p><ol><li>Veröffentliche deine Vorschläge im Forum auf dieser Seite.</li><li>Besser: Falls Du ein wenig JS, HTML und CSS beherrschst, kannst Du <a href="https://github.com/rene78/My-Cryptoportfolio">die App verbessern.</a></li><li>Hilf dabei, die App in eine andere Sprache zu <a href="https://github.com/rene78/My-Cryptoportfolio/tree/master/data#translate">übersetzen.</a></li><li>Momentan will Microsoft Azure ausbeuterische 0.40€/Jahr für das Hosten der Seite. Hilf mir doch beim Decken dieser immensen Kosten. <div class="tallypay" data-user_name="rene78" data-button="Spende via Lightning"></div> </li></ol>'],
  "question5":
    ['<summary><h2>Where are the coin prices coming from?</h2></summary><p>From the <a href="https://min-api.cryptocompare.com/">Cryptocampare API</a>. The prices are an average value of all well-known crypto exchanges.</p>',
      '<summary><h2>Wo kommen die Coinpreise her?</h2></summary><p>Von der <a href="https://min-api.cryptocompare.com/">Cryptocampare API</a>. Die Kurse sind ein Mittelwert aller namhafter Kryptobörsen.</p>'],
  "question6":
    ['<summary><h2>Why does this website have such a weird logo?</h2></summary><p>It is a celtic Triple Crescent Moon symbol. Triple moons symbolize change and disruption, just like the blockchain technology in general. And "moon" - as in "to the moon"...</p>',
      '<summary><h2>Warum hat diese Webseite so ein komisches Logo?</h2></summary><p>Dies ist ein keltisches Symbol für den dreifachen Halbmond. Dreifachmonde symbolisieren Veränderung, genau wie die Blockchain-Technologie im Allgemeinen. Und weil der Mond der Ort ist, an dem wir alle die Kurse sehen wollen...</p>']
};