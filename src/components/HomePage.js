import React, { useState, useEffect } from "react";
import KanbanBoard from "./KanbanBoard";
import DisplayMenu from "./DisplayMenu";
import "../styles/App.css";

const HomePage = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'Status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'Priority');

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('ordering', ordering);
  }, [ordering]);

  const getUserAvatar = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? `${user.name}` : '';
  };

  return (
    <div className="app-container">
      <DisplayMenu
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <KanbanBoard tickets={tickets.map(ticket => ({ ...ticket, avatar: getUserAvatar(ticket.userId) }))} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default HomePage;
