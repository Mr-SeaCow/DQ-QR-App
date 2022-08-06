const fs = require('fs');
const QRCode = require('qrcode');
const sharp = require('sharp')


async function genQRCode(filePath, fileName) {
    QRCode.toString(`http://alr-menu.com/${fileName}`, {type: 'svg'}, (err, url) => {
        const qrOffset = 4
            sharp(Buffer.from(url))
                .extract({left: qrOffset, top: qrOffset, width: 33 - qrOffset * 2, height: 33 - qrOffset * 2})    
                .resize(3000, 3000, {
                    kernel: sharp.kernel.nearest,
                    fit: 'contain',
                    position: 'right top',
                    background: { r: 0, g: 0, b: 0, alpha: 1 }
                })
                .toFormat('png')
                .toBuffer((ere, buff, info) => {
                    if (ere) throw ere;
                    fs.writeFileSync(`${filePath}`, buff);
                });
    })
}

module.exports = {genQRCode};