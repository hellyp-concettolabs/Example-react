import React from 'react'

export default function SearchBar({filterText,onlyStocked,onFilterTextChange,onInStockOnlyChange}) {
  return (
    <>
    <form>
        <input type="text" value={filterText} placeholder='Search...' onChange={(e) => onFilterTextChange(e.target.value)}></input> 
        <label>
            <input checked={onlyStocked} type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
            {''}
            Only show products in stock 
        </label>
    </form>
    </>
  )
}
