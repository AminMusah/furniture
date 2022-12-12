import {Link }from 'react-router-dom'
import CalendarLineIcon from 'remixicon-react/CalendarLineIcon'
import PriceTagLineIcon from 'remixicon-react/PriceTagLineIcon'
import User2LineIcon from 'remixicon-react/User2LineIcon'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function Arrivals({image,name,price,id}) {
  const {addToCart} = useContext(CartContext)
  return (
    <div>
        <div className="arrival-card">
          <Link to="#" className="arrival-card-banner" >
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

              <div className="add-to-cart-btn " onClick={()=> addToCart(name,price,image,id)}>
               Add to Cart
              </div>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Arrivals;
