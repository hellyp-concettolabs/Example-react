import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import './style.css';
function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Fruits", price: "$5", stocked: false, name: "Mango"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Potato"},
  ];
  const [filterText, setFilterText] = useState('');
  const [onlyStocked,setOnlyStocked] = useState(false);

  return (
    <>
      <SearchBar filterText={filterText} onlyStocked={onlyStocked} onFilterTextChange={setFilterText} onInStockOnlyChange={setOnlyStocked}/>
      <ProductTable filterText={filterText} onlyStocked={onlyStocked} products={PRODUCTS}/>
    </>
  );
}

export default App;
