import React from 'react'
import { getProductsId } from '../../apiService/api'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './ProductDetails.css'

function ProductDetails() {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {

        const fetchProductDetails = async () => {
            const data = await getProductsId(id)
            setProductDetails(data)
        }

        fetchProductDetails();

    }, [id])

    const handleBuyNow = () => {
        window.confirm("The product is out of stock")
    }



    return (
        <div className='product-details-container'>
            <img className='product-image' src={productDetails.image} alt='product image' />

            <div className='product-info'>
                <h2 className='product-title'>{productDetails.title}</h2>
                <p className='product-description'>{productDetails.description}</p><br/>
                <p className='product-price'>${productDetails.price}</p>

                <button onClick={handleBuyNow} className='buy-now-button'>Buy Now</button>
                <Link to='/'>
                    <button className='go-back-home-button'>Go Back Home</button>
                </Link>


            </div>

        </div>
    )
}

export default ProductDetails