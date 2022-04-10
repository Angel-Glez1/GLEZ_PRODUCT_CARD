import React, { useContext } from "react";
import { ProductContext } from './ProductCard';
import style from '../styles/styles.module.css';


export interface Props {
    title?: string,
    className?: string
    style?: React.CSSProperties
}



export const ProductTitle = ({ title, className, style: cssInline }: Props) => {

    const { product } = useContext(ProductContext);

    return (

        <span className={`${style.productDescription} ${className}`} style={cssInline}  >
            {title ? title : product.title}
        </span>
    )
}