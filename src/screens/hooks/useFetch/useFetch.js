import {useEffect, useState} from 'react';
import axios from 'axios';

const fetchData = url => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  const useFetch = async () => {
    try {
      const {data: productsData} = await axios.get(url);
      setProducts(productsData);

      // Kategorileri bir diziye çıkartma
      const categories = productsData.map(product => {
        const upperCase = product.category[0].toUpperCase();
        const rest = product.category.slice(1);
        const word = upperCase + rest;
        return word;
      });

      // Kategorileri yineliğe alarak tekilleştirme
      const uniqueCategories = Array.from(new Set(categories));

      setProductCategories(uniqueCategories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    useFetch();
  }, []);

  return {products, productCategories};
};

export default fetchData;
