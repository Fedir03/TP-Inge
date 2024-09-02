import React from 'react';
import styles from './app/page.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;