var SensorGrid = require('../app/main.js');

describe('sensor grid', () => {
    it('should have a length of 16', ()  => {
        var sensorGrid = new SensorGrid();
        expect(sensorGrid.grid.length).toBe(16);
    });

    it('should have a width of 8', () => {
        var sensorGrid = new SensorGrid();
        expect(sensorGrid.grid[0].length).toBe(8);
    });

    describe('set part on grid', () => {
        it('should set given coordinates on grid to true', () =>{
            var sensorGrid = new SensorGrid();
            sensorGrid.setPartOnGrid(0,0);
            expect(sensorGrid.grid[0][0]).toBeTruthy();
        });
        it('should set another given coordinates on grid to true', () =>{
            var sensorGrid = new SensorGrid();
            sensorGrid.setPartOnGrid(0,1);
            expect(sensorGrid.grid[0][1]).toBeTruthy();
        });
        // it('should return true when there is a part', () => {
        //     var sensorGrid = new SensorGrid();
        //     expect(sensorGrid.isPartOnGrid(0,0)).toBeTruthy();
        // });
    })
})
