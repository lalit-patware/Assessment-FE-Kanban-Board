import React, { useState } from 'react';
import "../styles/KanbanBoard.css";

const DisplayMenu = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  return (
    <div className="display-menu">
      <button onClick={toggleMenu} className="toggle-button">
        Display Menu
      </button>
      {isVisible && (
        <div className="menu-options">
          <div>
            <label htmlFor="grouping">Grouping: </label>
            <select id="grouping" value={grouping} onChange={handleGroupingChange}>
              <option value="Status">Status</option>
              <option value="Priority">Priority</option>
              <option value="User">User</option>
            </select>
          </div>
          <div>
            <label htmlFor="ordering">Ordering: </label>
            <select id="ordering" value={ordering} onChange={handleOrderingChange}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayMenu;
