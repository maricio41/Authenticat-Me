import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/businesses";
import "./BusinessList.css";

function BusinessList() {
  const businesses = useSelector((state) => state.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const renderBusinesses = () => {
    return Object.values(businesses).map((business) => {
      return (
        <div className="biz-container">
          <div className="biz-panel">{business.name}</div>
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
