import "react";
import Navbar from "./navbar";
import "../styles/admin.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div id="admin">
        <div id="products-container">
          <h2>Products</h2>
          <hr />
          <div id="control">
            <button id="bulk-action" className="control-btn">
              Bluk Action
            </button>
            <button id="selected-dlt" className="control-btn">
              Deleted Selected
            </button>
            <button id="add-prod" className="control-btn">
              Add Product
            </button>
          </div>
          <hr />
          <div id="search">
            <div className="search-bar" id="search-prod">
              <input
                type="text"
                className="search"
                placeholder="Search for Products..."
              />
              <button className="button">
                <AiOutlineSearch className="icons" />
              </button>
            </div>
            <select
              name="Choose by Category"
              id="category"
              className="fetch-prod"
            >
              <option value="All" hidden>
                Category
              </option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
            </select>
            <select name="Sort Products" id="sort-prod" className="fetch-prod">
              <option value="All" hidden>
                Price
              </option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
              <option value="published">Published</option>
              <option value="unPublished">Unpublished</option>
              <option value="status-selling">Status - Selling</option>
              <option value="status-out-of-stock">Status - Out of Stock</option>
              <option value="date-added-asc">Date Added</option>
              <option value="date-updated-asc">Date Updated</option>
            </select>
          </div>
          <hr />
          <div className="table-container">
            <table id="product_info">
              <thead>
                <tr>
                  <th id="select-all">
                    <input type="checkbox" />
                  </th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Sales Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
                <tr>
                  <td id="select">
                    <input type="checkbox" />
                  </td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                  <td>hello</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
