/* global chrome */

function save() {
    var username = document.getElementById('u_name').value;
    var password = document.getElementById('p_word').value;
    var autolog = document.getElementById('auto_log').checked;

    chrome.storage.sync.set({
        userName: username,
        passWord: password,
        autoLog: autolog
    }, function () {

        var status = document.getElementById('status');
        status.textContent = 'Zugangsdaten gespeichert.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}


function load() {

    chrome.storage.sync.get({
        userName: '',
        passWord: '',
        autoLog: true
    }, function (items) {

        document.getElementById('u_name').value = items.userName;
        document.getElementById('p_word').value = items.passWord;
        document.getElementById('auto_log').checked = items.autoLog;
    });
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);