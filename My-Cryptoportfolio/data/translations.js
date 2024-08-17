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
  
};
