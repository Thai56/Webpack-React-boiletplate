import React from "react";
import ReactDOM from "react-dom";
import style from './index.css';
import HelloWorld from './components/HelloWorld';

const Index = () => {
  return (
      <div className="root">
        <HelloWorld />
        <button className={style.inputStyle}>Hello React!</button>
      </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
