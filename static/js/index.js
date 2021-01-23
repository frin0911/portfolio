window.onload = function() {
    document.body.className += " loaded";
}

function checkBrowser() {
    const agent = navigator.userAgent.toLowerCase();

    if ((navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1)) {
        window.location.href = "ie.html";
    }
}