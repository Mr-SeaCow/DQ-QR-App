const QRCode = require('qrcode');
const sharp = require('sharp')
const fs = require('fs')
const fileName = `15409`;


QRCode.toFile(
    `${fileName}.svg`,
    `http://alr-menu.com/${fileName}`, 
    {type: 'svg', errCorrectionLevel: 'H'},
    (err) => {
        const qrOffset = 4
        sharp(`${fileName}.svg`)
            .extract({left: qrOffset, top: qrOffset, width: 33 - qrOffset * 2, height: 33 - qrOffset * 2})    
            .resize(3000, 3000, {
                kernel: sharp.kernel.nearest,
                fit: 'contain',
                position: 'right top',
                background: { r: 0, g: 0, b: 0, alpha: 1 }
            })
            .toFormat('png')
            .toBuffer(`${fileName}.png`, (err, buff, info) => {
                fs.writeFileSync('./test.png', buff);
            });
    }
);

