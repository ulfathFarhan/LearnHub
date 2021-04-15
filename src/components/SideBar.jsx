import React from "react";
import "./SideBar.css";
import CategoryIcon from "@material-ui/icons/Category";
import SortIcon from "@material-ui/icons/Sort";
export default function SideBar(props) {
  var flag = false;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="side">
          <div className="cat">
            <CategoryIcon />
            <h7>Category</h7>
          </div>
          <form>
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={() => {
                props.cato(1);
              }}
            >
              ios
            </button>
            <br /> <br />
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={() => {
                props.cato(2);
              }}
            >
              Android
            </button>
            <br /> <br />
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={() => {
                props.cato(3);
              }}
            >
              Web Dev
            </button>
            <br />
            <br />
          </form>
          {/* second Part */}
          <div className="bottomSide">
            <div className="cat">
              <SortIcon />
              <h7>Sort By</h7>
            </div>
            <form>
              <input
                type="radio"
                id="rating"
                name="sortBY"
                value="rating"
                onClick={() => {
                  props.sortBy(1);
                }}
              />
              <label for="rating"> Rating</label>
              <br /> <br />
              <input
                type="radio"
                id="price"
                name="sortBY"
                value="price"
                onClick={() => {
                  props.sortBy(2);
                }}
              />
              <label for="price"> Price </label>
              <br />
              <br />
            </form>
          </div>

          <div className="tot">Total Course : 15</div>
        </div>
      </div>
    </div>
  );
}
