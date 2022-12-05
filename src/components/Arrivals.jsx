import {Link }from 'react-router-dom'
import CalendarLineIcon from 'remixicon-react/CalendarLineIcon'
import PriceTagLineIcon from 'remixicon-react/PriceTagLineIcon'

function Arrivals({image,name}) {
  return (
    <div>
        <div class="arrival-card">
          <figure className="arrival-card-banner" >
            <img
              src={image}
              alt="Recent Commercial Real Estate Transactions"
              class="w-100"
            />
          </figure>

          <div class="arrivalcontent">
            <div class="arrivalcontent-top">
              <a href="#" className="card-meta-link">
                <i class="ri-user-fill"></i>
                <span>by: Admin</span>
              </a>

              <a href="#" className="card-meta-link">
                <PriceTagLineIcon/>
                <span>Interior</span>
              </a>
            </div>
            <h3 className="h3 arrival-title">
              <a href="#">{name}</a>
            </h3>
            <div className="arrivalcontent-bottom">
              <div className="publish-date">
                <CalendarLineIcon/>
                <time datetime="2022-27-04">Apr 27, 2022</time>
              </div>

              <Link to='product/7' className="view-details-btn">
               View details
              </Link>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Arrivals;
