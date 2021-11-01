import { shallow } from "enzyme";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('<GifGrid /> test', () => {

    const category = 'Apple';
   
    test('must show <GifGrid /> correctly', () => {

        useFetchGifs.mockReturnValue({
            data : [],
            loading: true
        });

        const wrapper = shallow( <GifGrid  category={category} /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('must show items when loading images useFetchGifs', () => {
       
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/carlos.jpg',
            title: 'Carlos'
        }, 
        {
            id: '123',
            url: 'https://localhost/carlos.jpg',
            title: 'Carlos'
        }];

        useFetchGifs.mockReturnValue({
            data : gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid  category={category} /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    

});
