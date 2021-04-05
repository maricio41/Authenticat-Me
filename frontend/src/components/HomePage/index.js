import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../store/reviews";
import "./HomePage.css";

function HomePage() {
  // const submit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <div className="home-container">
        <div className="home-image-container">
          <div className="home-image">
            <img src="/images/welpbg-image.jpg" alt="welp-cover-image" />
          </div>
        </div>
        <form>
          <input
            style={{
              width: "20rem",
              background: "#F2F1F9",
              border: "none",
              padding: "0.5rem",
            }}
            // value={keyword}
            placeholder={"Where are you going?"}
            // onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            // onClick={(e) => submit(e)}
            style={{
              background: "white",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
            }}
            type="submit"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
