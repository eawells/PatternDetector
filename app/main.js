class SensorGrid {
    constructor() {
        this.rowCount = 16;
        this.columnCount = 8;
        this.maxWidth = 3;
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
        var minColumn = this.columnCount - 1;
        var maxColumn = 0;
        var topMargin = 2;
        for(var row = 0; row < this.rowCount; row++){
            for(var col = 0; col < this.columnCount; col++){
                if(this.hasCoordinateOnGrid(row,col)){
                    if(row <= topMargin){
                        return false;
                    }
                    maxColumn = col > maxColumn ? col : maxColumn;
                    minColumn = col < minColumn ? col : minColumn;
                }
            }
        }
        return (maxColumn - minColumn + 1) <= this.maxWidth;
    }
}

module.exports = SensorGrid;
