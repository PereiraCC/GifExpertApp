import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Hook useFetchGifs test', () => {
   
    test('should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Costa Rica' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('should return iamges lists and false loading', async () => {
       
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Costa Rica' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);

    });
    
});
