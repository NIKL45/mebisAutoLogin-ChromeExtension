chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === "complete" && changeInfo.url === undefined && tab.url === "https://idp.mebis.bayern.de/idp/profile/SAML2/Redirect/SSO?execution=e2s1")
    {
        var username = '';
        var password = '';
        var autoLog = true;
        chrome.storage.sync.get({
            userName: '',
            passWord: '',
            autoLog: true
        }, function (items) {
            username = items.userName;
            password = items.passWord;
            autoLog = items.autoLog;
            if (autoLog)
            {
                var injectCode = 'document.getElementById("username").value="' + username + '";document.getElementById("password").value="' + password + '";if(!document.getElementById("loginerrormessage")){document.getElementsByClassName("form-button")[0].click();}';
                chrome.tabs.executeScript(tabId, {
                    code: injectCode
                }, null);
            }

        });

    }
});


