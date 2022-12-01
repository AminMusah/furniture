
function Arrivals({image,name}) {
  return (
    <div>
        <div class="arrival-card">
          <figure class="arrival-card-banner" >
            <img
              src={image}
              alt="Recent Commercial Real Estate Transactions"
              class="w-100"
            />
          </figure>

          <div class="arrivalcontent">
            <div class="arrivalcontent-top">
              <a href="#" class="card-meta-link">
                <i class="ri-user-fill"></i>
                <span>by: Admin</span>
              </a>

              <a href="#" class="card-meta-link">
                <i class="ri-price-tag-3-fill"></i>
                <span>Interior</span>
              </a>
            </div>
            <h3 class="h3 arrival-title">
              <a href="#">{name}</a>
            </h3>
            <div class="arrivalcontent-bottom">
              <div class="publish-date">
                <i class="ri-calendar-todo-fill"></i>
                <time datetime="2022-27-04">Apr 27, 2022</time>
              </div>

              <a href="#" class="view-details-btn">
               View details
              </a>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Arrivals;
