import { useState } from "react";

function AccordionItem({
  title,
  id,
  num,
  text,
  enableMultiSelection,
  selectedId,
  setSelectedID,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectedID(id) {
    setSelectedID(id === selectedId ? null : id);
    console.log(id);
  }
  return (
    <div
      className={`akela ${
        enableMultiSelection
          ? isOpen
            ? "open"
            : ""
          : selectedId === id
          ? "open"
          : ""
      }`}
      onClick={
        enableMultiSelection
          ? () => setIsOpen((i) => !i)
          : () => handleSelectedID(id)
      }
    >
      <p
        className={`number ${
          enableMultiSelection
            ? isOpen
              ? "colored"
              : ""
            : selectedId === id
            ? "colored"
            : ""
        }`}
      >
        {num < 9 ? `0${num + 1}` : num}
      </p>
      <h2 className="heading">{title}</h2>
      <p className="icon">
        {enableMultiSelection
          ? isOpen
            ? "-"
            : "+"
          : selectedId === id
          ? "-"
          : "+"}
      </p>
      <div
        className={`text ${
          enableMultiSelection
            ? isOpen
              ? "textOpen"
              : ""
            : selectedId === id
            ? "textOpen"
            : ""
        }`}
      >
        {enableMultiSelection
          ? isOpen
            ? text
            : null
          : selectedId === id
          ? text
          : null}
      </div>
    </div>
  );
}
export default AccordionItem;
