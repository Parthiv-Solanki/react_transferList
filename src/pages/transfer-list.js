import React, { useState } from "react";
import "../App.css";
import Column from "../components/Column";

const TransferList = () => {
  const [items, setItems] = useState({
    upColumn: [
      { title: "Red", selected: false },
      { title: "Blue", selected: false },
      { title: "Green", selected: false },
      { title: "Violet", selected: false },
    ],
    downColumn: [
      { title: "Pink", selected: false },
      { title: "Rose Pink", selected: false },
    ],
  });

  const selectItem = (columnName, index) => {
    let newItems = { ...items };

    if (newItems[columnName][index].selected) {
      newItems[columnName][index].selected = false;
    } else {
      newItems[columnName][index].selected = true;
    }
    setItems(newItems);
  };

  const moveItem = (targetCol, destCol) => {
    let newItems = { ...items };
    let selected = [];
    let notSelected = [];

    newItems[targetCol].forEach((item) => {
      if (item.selected) {
        item.selected = false;
        selected.push(item);
      } else {
        notSelected.push(item);
      }
    });
    // [].concat;

    newItems[targetCol] = notSelected;
    newItems[destCol] = newItems[destCol].concat(selected);
    setItems(newItems);
  };

  return (
    <main className="container">
      <Column
        title="Liked color"
        name="upColumn"
        list={items.upColumn}
        onSelect={selectItem}
      />
      <div className="button-container">
        <button onClick={() => moveItem("downColumn", "upColumn")}>Up</button>
        <button onClick={() => moveItem("upColumn", "downColumn")}>Down</button>
      </div>
      <Column
        title="Not Liked color"
        name="downColumn"
        list={items.downColumn}
        onSelect={selectItem}
      />
    </main>
  );
};

export default TransferList;
