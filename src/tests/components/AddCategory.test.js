import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('<AddCategory /> test', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    });
   
    test('Must show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Must change textBox', () => {
       
        const input = wrapper.find('input');
        const value = 'Hello world';

        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('should not post the information with submit', () => {
      
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('must called setCategories and clean textbox', () => {
       
        const value = 'Hello world';

        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').text().trim() ).toBe('');

    });
    
});
