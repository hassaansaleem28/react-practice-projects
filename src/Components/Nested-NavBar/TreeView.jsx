import menus from "./data";
import MenuList from "./MenuList";
import "./style.css";

function TreeView() {
  return (
    <>
      <h1
        style={{
          marginBottom: "5rem",
          fontStyle: "italic",
        }}
      >
        Project - 6 (Tree View Nav - Nested Nav)
      </h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
}

export default TreeView;
