import React,{useEffect, useState} from 'react'
import './Home.css'
import { getAllProducts } from '../../apiService/api'
import { Link } from 'react-router-dom'

function Home() {

  const [products,setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async() =>{
      const data = await getAllProducts();
      setProducts(data)
    }

    fetchProducts();  
    
  }, [])
  


  return (

    <div className='product-grid'>

      {
        products.map((product)=>(

          <div className='product'key={product.id}>

            <img className='product-image' src={product.image} alt='alternative' />
            <h2 className='product-h2'>{product.title}</h2>
            <p className='product-p'>
              <span className='price'>${product.price}</span>
            </p>
            <Link to={`/product/${product.id}`}>
            <button  className='product-button'>Product details</button>
            </Link>

          </div>

        ))
      }

      

    </div>

  )
}

export default Home