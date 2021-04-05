import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/businesses";
import "./BusinessList.css";

function BusinessList() {
  const businesses = useSelector((state) => state.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const renderBusinesses = () => {
    return Object.values(businesses).map((business) => {
      return (
        <div key={business.id} className="biz-container">
          <div key={business.id} className="biz-panel">
            {business.name}
          </div>
          <a href={`/add-review/${business.id}`}>Leave a Review</a>
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderBusinesses()}</div>
    </div>
  );
}

export default BusinessList;
