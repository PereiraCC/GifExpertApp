import { getGifs } from "../../helpers/getGifs";

describe('getGifs test', () => {
   
    test('must have ten items', async() => {
        
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );

    });

    test('must have ten items', async() => {
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );

    });
    
});
