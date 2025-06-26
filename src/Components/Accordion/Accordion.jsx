import { useState } from "react";
import { data } from "./data";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [selectedId, setSelectedID] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  return (
    <div className="accordion">
      <h1>Project 1</h1>
      <h1>"ACCORDION"</h1>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          enableMultiSelection={enableMultiSelection}
          num={i}
          id={el.id}
          text={el.text}
          key={el.id}
          selectedId={selectedId}
          setSelectedID={setSelectedID}
        />
      ))}
      <button className="btn" onClick={() => setEnableMultiSelection(s => !s)}>
        Enable Multi Selection
      </button>
    </div>
  );
}
export default Accordion;
