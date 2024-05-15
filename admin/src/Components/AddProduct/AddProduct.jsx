import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
  const[image,setImage]= useState(false);
  const[productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: ""
  })
  const imageHandle = (e)=>{
    setImage(e.target.files[0]);
  }
  const changeHandle = (e)=>{
  setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }
  const Add_Product = async()=>{
    console.log(productDetails);
  }

    return (
        <div className='add-product'>
          <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandle} type='text' name='name' placeholder='Type here'/>
          </div>
          <div className="addproduct-price">
            <div className="addproduct-itemfield">
              <p>Price</p>
              <input value={productDetails.old_price} onChange={changeHandle} type='text' name='old_price' placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfield">
              <p> Offer Price</p>
              <input value={productDetails.new_price} onChange={changeHandle} type='text' name='new_price' placeholder='Type here'/>
            </div>
          </div>
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandle} name='category' className='add-product-selector'>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
              <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt=''/>
            </label>
            <input onChange={imageHandle} type='file' name='image' id='file_input' hidden/>
          </div>
          <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
        </div>
      )
    }
export default AddProduct