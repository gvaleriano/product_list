import { useEffect, useState } from "react";

/*
  Este componente foi criado no inicio para fazer alguns testes de estilização com styled components
  import Button from "../Button/Button";
  <Button variant="primary" colorVariant="light"/>
*/
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TfiLoop } from "react-icons/tfi";
import { TableDiv, TableContainer, HeaderDiv, InputFilter, ButtonCategory, IconOrderButton, ButtonReset } from './ProductTable.styles'

// Tipagens
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
}

type Products = {
  productList : Product[]
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

/*
  Recebendo lista de produtos via props, também poderia ser feito com algum Provider ou
  até mesmo dentro desse componente devido a baixa complexidade do mesmo.
*/
export default function ProductTable( {productList}:Products){

// Gatinho para popular lista de produtos filtrados
useEffect(() => {
  setFilteredItems(productList);
}, [productList])

// Estado para armazenar o texto digitado pelo usuário
const [searchText, setSearchText] = useState('');

// Estado para armazenar produtos filtrados
const [filteredItems, setFilteredItems] = useState(productList);

// Estados para ordenação
const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'ascending' });
const [isOrdered, setOrdered] = useState(false);

// Função para atualizar o texto de busca
const handleInputChange = (event:InputEvent) => {
  const value = event.target.value;
  setSearchText(value);

  // Filtrar itens em tempo real
  const newFilteredItems = productList.filter((item:Product) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredItems(newFilteredItems);
};

// Função para filtrar a lista de itens quando o botão categoria é clicado
const handleFilterItems = (event:ButtonEvent) => {
  const newFilteredItems = productList.filter((item:Product) =>
    item.category.toLowerCase().includes(event.currentTarget.value.toLowerCase())
  );
  setFilteredItems(newFilteredItems);
};

//Função para ordenação por preço
const requestSort = (key:string) => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });

  const sortedData = [...filteredItems].sort((a, b) => {
    if (a.price < b.price) {
      setOrdered(!isOrdered);
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a.price > b.price) {
      setOrdered(!isOrdered);
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  setFilteredItems(sortedData);
};

const handleResetApp  = () => {
  setSearchText('');
  setOrdered(false);
  setFilteredItems(productList);
}

  return(
    <>
    <TableDiv>
      <HeaderDiv>
        <InputFilter
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
        <ButtonReset onClick={handleResetApp}><TfiLoop /></ButtonReset>
      </HeaderDiv>
      <TableContainer>
        <thead>
          <tr>
            <th>Nome</th>
            <th>
              Preço
              <IconOrderButton onClick={() => requestSort('price')}>
                {isOrdered ? <FaArrowUp /> : <FaArrowDown />}
              </IconOrderButton>
            </th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
        {filteredItems.map((product:Product, index: number) => {
              return (
                <tr key={product.id}>
                  <td>
                    {product.name}
                  </td>
                  <td>
                      {product.price}
                  </td>
                  <td><ButtonCategory onClick={(e: ButtonEvent) => handleFilterItems(e)} value={product.category}>{product.category}</ButtonCategory></td>
                </tr>
              )
            })}
        </tbody>
      </TableContainer>
      </TableDiv>
    </>
  )
}