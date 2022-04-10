import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    initialValues?: InitialValues;
    product: Product;
    value?: number;
    onChange?: (args: onChangeArgs) => void;
}


const useProductos = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {


    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);


    const reset = () => setCounter(initialValues?.count || value)


    // Con esta funcion aumentar el contador.
    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)

        }


        setCounter(newValue);


        // Solo si el onChage es direferente de undefined llamamos esa funcion.
        onChange && onChange({ count: newValue, product });


    }

    // Este efecto sincroniza el valor nuevo al state.
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);


    useEffect(() => {
        isMounted.current = true
    }, []);


    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset,
    }


}

export default useProductos