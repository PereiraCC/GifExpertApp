import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('<GifExpertApp /> test', () => {
    
    test('must show <GifExpertApp /> correctly', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show categories lists', () => {
       
        const categories = ['Costa Rica', 'Apple'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    });
    
    
});
