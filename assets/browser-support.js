function detectIE() {  
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("In order to best facilitate your purchase of Coop CE, we highly recommend utilizing a Chrome, Firefox, or Safari based browser.");
    }
    return false;
}

console.log('detecting IE');
detectIE();
