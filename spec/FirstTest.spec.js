var SensorGrid = require('../app/main.js');

describe('sensor grid', () => {
    let sensorGrid;
    beforeEach(() => {
        sensorGrid = new SensorGrid();
    });
    it('should have a length of 16', ()  => {
        expect(sensorGrid.grid.length).toBe(16);
    });

    it('should have a width of 8', () => {
        expect(sensorGrid.grid[0].length).toBe(8);
    });

    describe('set part on grid', () => {
        it('should set given coordinates on grid to true', () =>{
            sensorGrid.setPartOnGrid(0,0);
            expect(sensorGrid.grid[0][0]).toBeTruthy();
        });
        it('should set another given coordinates on grid to true', () =>{
            sensorGrid.setPartOnGrid(0,1);
            expect(sensorGrid.grid[0][1]).toBeTruthy();
        });
    })
    describe('get part on grid', () => {
        it('should return true when there is a part on given coordinate', () => {
            // arrange
            sensorGrid.setPartOnGrid(0,0);
            //act
            const actual = sensorGrid.isPartOnGrid(0,0);
            //asert
            expect(actual).toBeTruthy();
        });

    })
})
