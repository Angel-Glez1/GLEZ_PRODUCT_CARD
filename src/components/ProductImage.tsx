import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';


export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties
}


export const ProductImage = ({ img = '', className, style: cssInline }: Props) => {

    const { product } = useContext(ProductContext);

    const imgRender = product.img
        ? product.img
        : img ? img : noImage

    return (
        <img
            className={`${style.productImg} ${className}`}
            src={imgRender}
            alt="producto img"
            style={cssInline}
        />
    )
}