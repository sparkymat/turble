var Dialogs = require('dialogs');
var dialogs = Dialogs();
var {BrowserWindow} = require('electron').remote;
var {ipcRenderer} = require('electron');
var MarkdownIt = require('markdown-it');
var fs = require('fs');

window.currentSource = "";

$(document).ready(() => {
    $("#editor-container").html("<div style='height: 100%;' id='editor'></div>");
    var editor = ace.edit("editor");
    editor.setOptions({
        fontSize: '10pt'
    });
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/json");
});

