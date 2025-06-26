import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list?.map(listItem => (
        <MenuItem item={listItem} key={listItem.label} />
      ))}
    </ul>
  );
}

export default MenuList;
