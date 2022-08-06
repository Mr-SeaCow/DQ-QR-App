const { ipcRenderer } = require('electron')

const fileSelect = document.getElementById('fileSlct');
const log = document.getElementById('log');
const submit = document.getElementById('submit');
const loader = document.getElementById('loader')

fileSelect.onchange = async (e) => {
  if (e.target.value !== null) {
    submit.removeAttribute("disabled");
    submit.focus();
  } else 
    submit.setAttribute("disabled", "true");
}

submit.onclick = async (e) => {
    submit.setAttribute("disabled", "true");
    fileSelect.setAttribute("disabled", "true");
    loader.style.display = "block";
    ipcRenderer.send('setFilePath', fileSelect.files[0].path);
}

ipcRenderer.on('parseFinished', (event, arg)=> {
    loader.style.display="none";
    if (arg) {
        log.textContent = "Successfully updated!";
    } else {
        log.textContent = "Oops, something went wrong!";
    }
})
