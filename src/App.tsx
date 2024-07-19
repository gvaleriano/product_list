import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductTable from './components/ProductTable/ProductTable';
import { api } from './services/api';

interface ProductsProps {
  id: number
  name: string
  price: number
  category: string
}
function App() {
  const [products, setProductsData] = useState<ProductsProps[]>([]);
  useEffect(() => {
    /*
    const fetchData = () => api.get('/products').then((response) => {
      const newData = response.data;
        setProductsData(newData);
    })
  
    fetchData()*/
    const productListAux = [
    { "id": 1, "name": "Laptop XYZ", "price": 194.68, "category": "Computadores" },
    { "id": 2, "name": "Mouse ABC", "price": 250.61, "category": "Acessórios" },
    { "id": 3, "name": "Teclado DEF", "price": 265.93, "category": "Acessórios" },
    { "id": 4, "name": "Monitor GHI", "price": 212.82, "category": "Monitores" },
    { "id": 5, "name": "Impressora JKL", "price": 227.54, "category": "Impressoras" },
    { "id": 6, "name": "Tablet MNO", "price": 70.05, "category": "Tablets" },
    { "id": 7, "name": "Smartphone PQR", "price": 192.8, "category": "Smartphones" },
    { "id": 8, "name": "Smartwatch STU", "price": 17.46, "category": "Wearables" },
    { "id": 9, "name": "Fone de Ouvido VWX", "price": 296.33, "category": "Acessórios" },
    { "id": 10, "name": "Roteador YZ", "price": 180.76, "category": "Redes" },
    { "id": 11, "name": "Disco Rígido Externo", "price": 41.72, "category": "Armazenamento" },
    { "id": 12, "name": "Câmera Digital", "price": 148.8, "category": "Câmeras" },
    { "id": 13, "name": "Projetor", "price": 148.71, "category": "Monitores" },
    { "id": 14, "name": "Dock Station", "price": 206.33, "category": "Acessórios" },
    { "id": 15, "name": "Microfone", "price": 246.95, "category": "Acessórios" },
    { "id": 16, "name": "Webcam", "price": 132.8, "category": "Câmeras" },
    { "id": 17, "name": "Carregador Portátil", "price": 36.78, "category": "Acessórios" },
    { "id": 18, "name": "Headset Gamer", "price": 168.64, "category": "Acessórios" },
    { "id": 19, "name": "Placa de Vídeo", "price": 230.3, "category": "Computadores" },
    { "id": 20, "name": "SSD Interno", "price": 18.04, "category": "Armazenamento" },
    { "id": 21, "name": "Pendrive", "price": 60.94, "category": "Armazenamento" },
    { "id": 22, "name": "Mouse Pad RGB", "price": 238.14, "category": "Acessórios" },
    { "id": 23, "name": "Teclado Mecânico", "price": 100.18, "category": "Acessórios" },
    { "id": 24, "name": "Hub USB", "price": 293.91, "category": "Acessórios" },
    { "id": 25, "name": "Switch de Rede", "price": 54.15, "category": "Redes" },
    { "id": 26, "name": "Estabilizador", "price": 179.33, "category": "Acessórios" },
    { "id": 27, "name": "Scanner", "price": 59.31, "category": "Impressoras" },
    { "id": 28, "name": "Cabo HDMI", "price": 145.97, "category": "Acessórios" },
    { "id": 29, "name": "Notebook Gamer", "price": 94.45, "category": "Computadores" },
    { "id": 30, "name": "Case para Smartphone", "price": 247.79, "category": "Acessórios" },
    { "id": 31, "name": "Adaptador Bluetooth", "price": 270.44, "category": "Acessórios" },
    { "id": 32, "name": "Antena Wi-Fi", "price": 257.17, "category": "Redes" },
    { "id": 33, "name": "Servidor NAS", "price": 143.97, "category": "Armazenamento" },
    { "id": 34, "name": "Controlador de Ventoinha", "price": 254.9, "category": "Acessórios" },
    { "id": 35, "name": "Cooler para CPU", "price": 198.92, "category": "Computadores" },
    { "id": 36, "name": "Bateria Externa", "price": 211.9, "category": "Acessórios" },
    { "id": 37, "name": "Leitor de Cartões", "price": 205.26, "category": "Acessórios" },
    { "id": 38, "name": "Antivírus", "price": 55.12, "category": "Software" },
    { "id": 39, "name": "Software de Edição de Vídeo", "price": 48.95, "category": "Software" },
    { "id": 40, "name": "Pacote Office", "price": 14.78, "category": "Software" },
    { "id": 41, "name": "Gamepad", "price": 81.06, "category": "Acessórios" },
    { "id": 42, "name": "Mouse Sem Fio", "price": 152.51, "category": "Acessórios" },
    { "id": 43, "name": "Cabo de Rede", "price": 109.68, "category": "Redes" },
    { "id": 44, "name": "Dock de Carregamento", "price": 64.89, "category": "Acessórios" },
    { "id": 45, "name": "Suporte para Monitor", "price": 115.54, "category": "Acessórios" },
    { "id": 46, "name": "Impressora Multifuncional", "price": 287.58, "category": "Impressoras" },
    { "id": 47, "name": "Modem", "price": 170.45, "category": "Redes" },
    { "id": 48, "name": "Adaptador USB-C", "price": 123.72, "category": "Acessórios" },
    { "id": 49, "name": "Estação Meteorológica", "price": 204.56, "category": "Acessórios" },
    { "id": 50, "name": "Suporte para Notebook", "price": 119.4, "category": "Acessórios" }
  ] 
    setProductsData(productListAux);
  }, [])
  return (
    <>
      <Header/>
      <ProductTable productList={products}/>
    </>
  );
}

export default App;
