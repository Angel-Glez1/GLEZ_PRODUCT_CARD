import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug -card',
  img: './coffee-Mug-png'
}

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
