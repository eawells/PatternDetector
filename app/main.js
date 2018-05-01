class SensorGrid {
    constructor() {
        this.rowCount = 16;
        this.columnCount = 8;
        this.grid = new Array();
        for(var i = 0; i < this.rowCount; i++){
            this.grid.push(new Array(this.columnCount));
        }
    }

    setCoordinateOnGrid(row, column) {
        this.grid[row][column] = true;
    }

    hasCoordinateOnGrid(row, column) {
        return this.grid[row][column];
    }

    partIsCorrectlyPositioned() {
        var minColumn = 15;
        var maxColumn = 0;
        for(var col = 0; col < this.columnCount; col++){
            for(var row = 0; row < this.rowCount; row++){
                if(this.hasCoordinateOnGrid(row,col)){
                    if(col > maxColumn){
                       maxColumn = col;
                    }
                    if(col < minColumn){
                        minColumn = col;
                    }
                }
            }
        }

        return (maxColumn - minColumn +1) <= 3;
    }
}

module.exports = SensorGrid;
