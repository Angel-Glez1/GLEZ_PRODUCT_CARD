# glez-product-card

Este es un paquete de pruebas de despliegue en NPM

### Angel Armando


```
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from 'glez-produt-card';

```


```
    <ProductCard
        className="bg-dark text-white"
        product={product}
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
                
        {
            ({ reset, isMaxCountReached, maxCount, increaseBy, count, product }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }

    </ProductCard>

```