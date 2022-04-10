import React, { useCallback, useContext } from 'react';
import { ProductContext } from "./ProductCard";
import style from '../styles/styles.module.css';

export interface Props {
    className?: string
    style?: React.CSSProperties

}

export const ProductButtons = ({ className, style: cssInline }: Props) => {


    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    // Con esto limitas la 
    const isMaxReach = useCallback(() => !!maxCount && maxCount === counter ? true : false, [counter, maxCount]);



    return (
        <div className={`${style.buttonsContainer} ${className}`} style={cssInline} >
            <button
                className={style.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={style.countLabel}>{counter}</div>

            <button
                className={`${isMaxReach() && style.disabled} ${style.buttonAdd}`}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}