window.onload = function () {

    document.getElementById("auto_log").addEventListener('change', function () {
        chrome.storage.sync.set({         
            autoLog: document.getElementById("auto_log").checked
        }, null);
    });

    chrome.storage.sync.get({
        autoLog: true
    }, function (items) {
        autoLog = items.autoLog;
        document.getElementById('auto_log').checked = items.autoLog;
    });
};
