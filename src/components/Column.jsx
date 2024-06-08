import "../App.css";
import React from "react";

const Column = ({ title, name, list, onSelect }) => {
  return (
    <section className="list-container">
      <h4>{title}</h4>
      {list.map((item, index) => (
        <div
          key={name + index}
          role="checkbox"
          onClick={() => onSelect(name, index)}
          className={`list-item ${item.selected && "selected-item"}`}
        >
          {item.title}
        </div>
      ))}
    </section>
  );
};

export default Column;
