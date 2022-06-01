const fs = require("fs");
const { ipcRenderer } = require("electron");

ipcRenderer.on("fileOpened",(event,{contents, filePath}) =>{
    console.log("we have some : ", contents);
    document.getElementById("code").value = contents;
    document.getElementById("filepath").innerText = filePath
    console.log(filePath)
    }
);
