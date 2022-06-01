const { app, BrowserWindow, Menu } = require('electron');
const { dialog } = require("electron");
const fs = require("fs");
let win;
require('electron-reload')(__dirname);

const template = [
  {
    label : 'File',
    submenu : [
      {
        label: "Open File",
        click: async () => {
          const {filePaths} = await dialog.showOpenDialog({
              properties: ["openFile"],
            })
            const file = filePaths[0];
            const contents = fs.readFileSync(file, 'utf-8');
            win.webContents.send("fileOpened", {
              contents,
              filePath: file,
             }
            );
            
          
          
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

const createWindow = () => {
    win = new BrowserWindow({
      width: 1200,
      height: 600,
      title: "Text editor",
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
      },
      
    });
  
    win.loadFile('index.html')

    win.webContents.openDevTools(); //this line opens dev tools with the screen
    
  }

app.whenReady().then(() => {
    createWindow()
  })

app.on('window-all-closed', () => {
    // This is for windows and linux
    if(process.platform !== 'darwin') app.quit()
  }
)

