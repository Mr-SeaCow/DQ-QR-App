const XLSX = require('xlsx-style');
const fs = require('fs');

const menuData = JSON.parse(fs.readFileSync('./data.json'));


let testWorkbook = XLSX.readFile('./Backup.xlsx', {cellStyles: true})
//let workbook_object = {}
// for (const i in workbook.SheetNames) {
//     workbook_object[workbook.SheetNames[i]] = workbook.Sheets[workbook.SheetNames[i]];
// }
//workbook_object[workbook.SheetNames[0]] = workbook.Sheets[workbook.SheetNames[0]];

class CellIterator {
    constructor(startCol, endCol, startRow) {
        this.startCol = startCol;
        this.endCol = endCol;
        this.curCol = startCol;
        this.curRow = startRow;
    }

    get next() {
        let returnVal = `${this.curCol}${this.curRow}`;

        if (this.curCol === this.endCol)
            this.moveNextRow();
        else
            this.incrementCol();

        return returnVal;
    }

    moveNextRow() {
        this.curCol = this.startCol;
        this.curRow++;
    }

    incrementCol() {
        this.curCol = String.fromCharCode(this.curCol.charCodeAt() + 1);
    }
}


class WriteMenuToExcel {
    constructor(workbook, menu) {
        this.workbook = workbook;
        this.menu = menu;        
    }

    run() {
        this.workbook.Sheets['Combo'] = this.parseCombo(this.getSheet('Combo'), this.menu.menu.combo);
        console.log(this.getSheet('Combo'))
        XLSX.writeFile(this.workbook, './initialTest.xlsx');
    }

    getSheet(sheetName) {
        return this.workbook.Sheets[sheetName];
    }

    setSheetVal(sheet, cell, value) {
        sheet[cell].v = value;
    }

    parseCombo(sheet, menu) {
        let cellPointer = new CellIterator('B', 'G', 7);
        for (const i in menu) {
            let currAra = [
                menu[i].comboNumber,
                menu[i].title,
                menu[i].comboPrice,
                menu[i].sandwichPrice,
                menu[i].ingredients.join(', '),
                menu[i].image
            ]
            this.addAraElementsToSheet(sheet, currAra, cellPointer);
        }
        return sheet;
    }

    addAraElementsToSheet(sheet, ara, cellPointer) {
        for (const i in ara) {
            let c = cellPointer.next;
            console.log(c ,ara[i]);
            sheet[c].v = ara[i] !== undefined ? ara[i] : '';
        }
    }

}

function doesCellExistInSheet(sheet, cell) {
    return worksheet.hasOwnProperty(cell);
}

function addCellToSheet(sheet, cell) {
    XLSX.utils.aoa_to_sheet(sheet, [['NEW VALUE from NODE']], {origin: cell});
}


const testing = new WriteMenuToExcel(testWorkbook, menuData);
testing.run();

//console.log(workbook);