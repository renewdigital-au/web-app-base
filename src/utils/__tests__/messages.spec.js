import getAppMsg from '../messages';

const FILE_NAME = 'file-name.js';
describe('getAppMsg ', () => {
    it('should get correct message', () => {
        let msg = getAppMsg(FILE_NAME);
        expect(msg).toBe(`${FILE_NAME} has STARTED`);
    })
    
})