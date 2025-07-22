import React from 'react'

export default function Child({product , deleteProduct , upP , i}) {
 
  let {id , code , price, category, onSale} = product;
 
  return (
    <>
      <div className="col-md-4">
        <div className="item bg-secondary text-white p-3 rounded-3 position-relative">
          <h1 className="h4">productName: {code}</h1>
          <h4>price: {price}</h4>
          <h4>category: {category}</h4>
          <button onClick={() => deleteProduct(id)}  className='btn btn-danger w-100'>Delete <i className='fa fa-trash'></i></button>
          <button onClick={() => upP(i)}  className='btn btn-warning w-100 my-2'>Update <i className='fa fa-pen'></i></button>


          {onSale && <div className='bg-danger p-2 position-absolute top-0 end-0'>Sale</div>}
        </div>
      </div>

    </>
  )
}
