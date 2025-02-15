import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Product } from '../../Pages/Product'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContex'
export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src = {product.image}/>
                <img src = {product.image}/>
                <img src = {product.image}/>
                <img src = {product.image}/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image}></img>
            </div>

        </div>
        <div className='productdisplay-right'>
            <h1 >{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src ={star_icon}></img>
                <img src ={star_icon}></img>
                <img src ={star_icon}></img>
                <img src ={star_icon}></img>
                <img src ={star_dull_icon}></img>
                <p>{122}</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-new-old'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-decription'>
            jsdlajdjsjsjjsjsjsjssjsjjjjjjjjjjjjjjjjjjjjjj

            </div>
            <div className='productdisplay-right-size'>
                <h1>Slect Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>

            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Morden, Latest</p>

        </div>
    </div>
  )
}
