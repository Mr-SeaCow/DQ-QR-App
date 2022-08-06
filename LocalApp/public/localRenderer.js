const { ipcRenderer } = require('electron');

const updateVal = document.getElementById('updateInput');
const submit = document.getElementById('submit');
const log = document.getElementById('log');

submit.onclick = async (e) => {
    if (await validateStoreID())
        ipcRenderer.send('updateSettings', {val: updateVal.value, type: Number(updateVal.alt) });

}

async function validateStoreID() {

    const targetVal = updateVal.value;

    if (targetVal == '')
        return 0 * await setLog('Invalid Setting.');

    return 1 * await setLog(' ');

}

function setLog(str) {
    log.textContent = str;
    return true;
}

ipcRenderer.on('updateFinished', (event, data)=> {
    if (data)
        setLog('Successfully Updated!');
    else
        setLog('Oops something went wrong!');
})
