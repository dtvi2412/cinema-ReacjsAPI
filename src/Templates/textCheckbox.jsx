import React, { useState, useEffect } from "react";
import CheckboxGroup from "react-checkbox-group";
import "./AdminCSS.css";
import Aos from "aos";
import "aos/dist/aos.css";
function text(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [iphone, setIphone] = useState([]);
  useEffect(() => {
    let arr = [
      { id: 1, name: "iphone", price: "50", isChecked: true },
      { id: 2, name: "iphone", price: "150", isChecked: true },
      { id: 3, name: "iphone", price: "250", isChecked: true },
      { id: 4, name: "samsung", price: "50", isChecked: true },
      { id: 5, name: "samsung", price: "150", isChecked: true },
      { id: 6, name: "samsung", price: "250", isChecked: true },
    ];
    setIphone(arr);
  }, []);

  const handleShow = () => {
    return iphone.map((item) => {
      if (item.isChecked) {
        return (
          <div
            className="box__content"
            // data-aos={`${item.id === 1 && item.id === 2 ? "" : "fade-up-right"} `}
            // data-aos={`${item.id === 3 && "fade-up-right"} `}
            data-aos="fade-up-right"
          >
            <h1 key={item.id}>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        );
      }
    });
  };
  const handleIphone = (e) => {
    console.log(e.target.value, e.target.checked);
    const value = e.target.value;
    const checked = e.target.checked;
    if (value === "iphone" && checked === true) {
      return iphone
        .filter((ten) => ten.name === "iphone")
        .map((item) => {
          return [...item];
        });
    }
  };
  return (
    <div>
      <div className="box"> {handleShow()}</div>
      <br></br>
      <CheckboxGroup name="iphone" value={iphone} onChange={setIphone}>
        {(Checkbox) => (
          <>
            <label>
              <Checkbox
                value="iphone"
                onClick={(e) => {
                  handleIphone(e);
                }}
              />
              Iphone
            </label>
            <label>
              <Checkbox value="samsung" /> Samsung
            </label>
          </>
        )}
      </CheckboxGroup>
    </div>
  );
}

export default text;
