import React ,{ createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import useProductos from '../hooks/useProductos';
import style from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    // children?: ReactElement | ReactElement[];

    className?: string;
    initialValues?: InitialValues
    product: Product;
    styles?: React.CSSProperties;
    value?: number;

    children: (args: ProductCardHandlers) => JSX.Element
    onChange?: (args: onChangeArgs) => void;
}



export const ProductCard = ({ initialValues, product, onChange, children, value, className, styles }: Props) => {

    const {
        counter, increaseBy, maxCount, isMaxCountReached, reset

    } = useProductos({ product, onChange, value, initialValues });


    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                maxCount

            }}
        >

            <div className={`${style.productCard} ${className}`} style={styles}>

                {
                    children({
                        count: counter,
                        maxCount: initialValues?.maxCount,
                        product,
                        isMaxCountReached,

                        increaseBy,
                        reset
                    })
                }

            </div>

        </Provider>
    );
};

