const htmltoPdf = require('../src');
const fs = require('fs');


function writeFile(writeData) {
    fs.writeFile('./name.pdf', writeData, 'utf-8', function (err) {
        if (err) {
            console.log('there are some wrong happened~');
        } else {
            console.log('Write successfully~~');
        }
    });
}

fs.readFile('test.html', 'utf-8', function (err, data) {
    if (err) {
        console.log("error");
    } else {
        htmltoPdf(data, pdf => {
            writeFile(pdf)
        })
    }
})




