const { app, BrowserWindow } = require('electron');
const path = require('path'); // <-- Added this to help locate the icon file

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 620,
    frame: false,        // Hides the standard Windows title bar
    transparent: true,   // Makes the background see-through
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'), // <-- Added your new logo here!
    webPreferences: {
      nodeIntegration: true, // Helps your custom close button work
      contextIsolation: false
    }
  });
  
  win.loadFile('index.html'); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => { 
  if (process.platform !== 'darwin') app.quit(); 
});