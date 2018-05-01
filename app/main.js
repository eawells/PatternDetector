class SensorGrid {
    constructor() {
        var rowCount = 16;
        var columnCount = 8;
        this.grid = new Array();
        for(var i = 0; i < rowCount; i++){
            this.grid.push(new Array(columnCount));
        }
    }

    setCoordinateOnGrid(row, column) {
        this.grid[row][column] = true;
    }

    hasCoordinateOnGrid(row, column) {
        return this.grid[row][column];
    }

    partIsCorrectlyPositioned() {
        return true;
    }
}

module.exports = SensorGrid;
