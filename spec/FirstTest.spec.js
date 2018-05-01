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
            sensorGrid.setCoordinateOnGrid(0,0);
            expect(sensorGrid.grid[0][0]).toBeTruthy();
        });
        it('should set another given coordinates on grid to true', () =>{
            sensorGrid.setCoordinateOnGrid(0,1);
            expect(sensorGrid.grid[0][1]).toBeTruthy();
        });
    })
    describe('get part on grid', () => {
        it('should return true when there is a part on given coordinate', () => {
            // arrange
            sensorGrid.setCoordinateOnGrid(0,0);
            //act
            const actual = sensorGrid.hasCoordinateOnGrid(0,0);
            //asert
            expect(actual).toBeTruthy();
        });

        it('should return false when there is not a part on a given coordinate', () => {
            //act
            const actual = sensorGrid.hasCoordinateOnGrid(0,5);
            //asert
            expect(actual).toBeFalsy();
        });
    })
    describe('position on grid', () => {
        it('should return true when width is less than 4', () => {
            setPartOnGrid(true);
            expect(sensorGrid.partIsCorrectlyPositioned()).toBeTruthy();
        });
    });
    function setPartOnGrid(correctPosition){
        if(correctPosition){
            sensorGrid.setCoordinateOnGrid(3,3);
            sensorGrid.setCoordinateOnGrid(4,3);
            sensorGrid.setCoordinateOnGrid(5,3);
            sensorGrid.setCoordinateOnGrid(6,3);
            sensorGrid.setCoordinateOnGrid(3,4);
            sensorGrid.setCoordinateOnGrid(4,4);
            sensorGrid.setCoordinateOnGrid(5,4);
            sensorGrid.setCoordinateOnGrid(6,4);
            sensorGrid.setCoordinateOnGrid(7,4);
            sensorGrid.setCoordinateOnGrid(8,4);
            sensorGrid.setCoordinateOnGrid(3,5);
            sensorGrid.setCoordinateOnGrid(4,5);
            sensorGrid.setCoordinateOnGrid(5,5);
            sensorGrid.setCoordinateOnGrid(6,5);
            sensorGrid.setCoordinateOnGrid(7,5);
            sensorGrid.setCoordinateOnGrid(8,5);
        }
    }
})
