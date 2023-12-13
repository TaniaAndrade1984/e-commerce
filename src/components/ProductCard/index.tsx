import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{`R$ ${price.toFixed(2)}`}</p>
      {/* Adicione botão de adicionar ao carrinho ou detalhes do produto */}
    </div>
  );
};

export default ProductCard;
