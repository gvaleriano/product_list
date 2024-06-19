import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductTable from './components/ProductTable/ProductTable';
import { api } from './services/api';

function App() {
  const [products, setProductsData] = useState([]);
  useEffect(() => {
    const fetchData = () => api.get('/products').then((response) => {
      const newData = response.data;
        setProductsData(newData);
    })
  
    fetchData()
  
  }, [])
  return (
    <>
      <Header/>
      <ProductTable productList={products}/>
    </>
  );
}

export default App;
