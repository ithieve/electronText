const fs = require("fs");
const { ipcRenderer } = require("electron");

ipcRenderer.on("file",(event,content) =>{
    console.log("we have some : ", content);
    document.getElementById("code").value = content;
    }
);
