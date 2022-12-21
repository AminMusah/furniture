import {Link }from 'react-router-dom'
import CalendarLineIcon from 'remixicon-react/CalendarLineIcon'
import PriceTagLineIcon from 'remixicon-react/PriceTagLineIcon'
import User2LineIcon from 'remixicon-react/User2LineIcon'
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon'
import { useContext,useState } from 'react';
import { CartContext } from '../CartContext';
import Swal from 'sweetalert2'


function Arrivals({image,name,price,id}) {
  const [color,setColor] = useState("add-to-cart-btn");
  const [add,setAdd] = useState("Add to Cart");

  const alert = ()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Added to Cart'
    })
  }
  const {addToCart} = useContext(CartContext)

  const addItem = ()=>{
    addToCart(name,price,image,id) 
    setColor("added-to-cart")
    setAdd("Added to Cart")
    alert()
  }
  return (
    <div>
        <div className="arrival-card">
          <Link to={`product/${id}`} className="arrival-card-banner" >
            <img
              src={image}
              alt="Recent Commercial Real Estate Transactions"
              className="w-100"
            />
          </Link>

          <div className="arrivalcontent">
            <div className="arrivalcontent-top">
              <a href="#" className="card-meta-link">
                <User2LineIcon size={10}/>
                <span>by: Admin</span>
              </a>

              <a href="#" className="card-meta-link">
                <PriceTagLineIcon size={10}/>
                <span>Interior</span>
              </a>
            
            </div>
            <div className='card-product-info'>
            <h3 className="h3 arrival-title">
              <a href="#">{name}</a>
            </h3>
            <h3 className="h3 arrival-title">
              <a href="#">₵{price}</a>
            </h3>
            </div>
           
            <div className="arrivalcontent-bottom">
              <div className="publish-date">
                <CalendarLineIcon size={10}/>
                <time dateTime="2022-27-04">Apr 27, 2022</time>
              </div>

              <div className={color} onClick={
                addItem                
              }>
               {add}
              </div>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Arrivals;
