import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('Testing in <GifGridItem />', () => {

    const title = 'A title';
    const url   =  'https://localhost/carlos.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );
    
    test('must be show <GifGridItem /> correct', () => {
    
        expect( wrapper ).toMatchSnapshot();
    
    });

    test('must have a paragraph with a title', () => {
       
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    });

    test('must have an image equal to url and alt', () => {
       
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });
    
    test('must have class animate__fadeIn', () => {
       
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBe(true);

    });
});

