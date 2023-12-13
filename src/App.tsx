// src/App.tsx
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  // Exemplo de dados de produtos
  const products = [
    { id: 1, name: 'Batom Vermelho', price: 25.99, imageUrl: 'url_da_imagem' },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;
