class SensorGrid {
    constructor() {
        var rowCount = 16;
        var columnCount = 8;
        this.grid = new Array();
        for(var i = 0; i < rowCount; i++){
            this.grid.push(new Array(columnCount));
        }
    }

    setPartOnGrid(row, column) {
        this.grid[row][column] = true;
    }

    isPartOnGrid(row, column) {
        return this.grid[row][column];
    }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = SensorGrid;
}