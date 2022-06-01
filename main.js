const { app, BrowserWindow, Menu } = require('electron')

require('electron-reload')(__dirname);

const template = [
  {
    label : 'File',
    submenu : [
      {
        label: "Open File",
        click: () => {
          console.log("file opened");
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 600,
      webPreferences: {
          nodeIntegration: true,
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

