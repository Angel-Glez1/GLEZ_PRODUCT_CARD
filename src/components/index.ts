import { ProductCard as ProductCardHoc } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from '../interfaces/interfaces';


export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from "./ProductButtons";



export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Img: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;

