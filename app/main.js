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
        this.grid[0][0] = true;
    }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = SensorGrid;
}