import { useState } from "react";
import "./testing.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import $ from "jquery";

function Testing() {
  const [isToggled, setIsToggled] = useState(true);

  function wrap() {
    setIsToggled(!isToggled);
    $(
      $(".icon-btn").on("click", function() {
        $(this).next(".content").slideToggle(1000);
      })
    );
  }

  return (
    <div className="test_field">
      <h2>EE2015: Electric Circuits & Networks</h2>
      <div id="wrap">
        <div className="content-box">
          <div className="content-title">
            <button className="icon-btn" onClick={wrap}>
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
        <div className="content-box">
          <div className="content-title">
            <button onClick={() => wrap} className="icon-btn">
              {isToggled ? (
                <AiOutlineDown className="icons" />
              ) : (
                <AiOutlineRight className="icons" />
              )}
            </button>
            <span>Hello</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quaerat fugit maiores fugiat officia perferendis
            nesciunt, voluptate non dignissimos tempora repudiandae deleniti
            deserunt magni tempore consequuntur eius sapiente sed!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
