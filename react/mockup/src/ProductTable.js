import React from 'react'
function ProductCategoryRow({category}){
    return(
        <>
            <tr colSpan="2">
                <th style={{textAlign: "center", paddingLeft:"30%"}}>
                    {category}
                </th>
            </tr>
        </>
    )
}
function ProductRow({product}) {
    const name = product.name;
    return(
        <>
            <tr>
                <td>{product.stocked ? <span>{name}</span>: <span style={{color:"red"}}>{name}</span>}</td>
                <td>{product.price}</td>
            </tr>
        </>
    )
}
export default function ProductTable({products,filterText, onlyStocked}) {
    const rows = [];
    let last = null;
    products.forEach((product) => {
        if(!product.stocked && onlyStocked){
            return;
        }
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1){
            return;
        }
        if(product.category !== last){
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category}/>
            )
        }
        rows.push(
            <ProductRow
              product={product}
              key={product.name} />
          );
          last = product.category;
    });
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody style={{paddingRight:"40px"}}>{rows}</tbody>
      </table>
    </>
  )
}
