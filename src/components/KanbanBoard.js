import React from "react";
import "../styles/KanbanBoard.css";

const KanbanBoard = ({ tickets, grouping, ordering }) => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = ticket[grouping.toLowerCase()] || 'Ungrouped';
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  const sortedGroups = Object.keys(groupedTickets).sort((a, b) => a.localeCompare(b));

  sortedGroups.forEach(group => {
    groupedTickets[group].sort((a, b) => b[ordering.toLowerCase()] - a[ordering.toLowerCase()]);
  });

  return (
    <div className="kanban-board">
      {sortedGroups.map(group => (
        <div className="kanban-column" key={group}>
          <h2>{group}</h2>
          {groupedTickets[group].map(ticket => (
            <div className="kanban-card" key={ticket.id}>
              <h3>{ticket.title}</h3>
              <p>{ticket.tag.join(', ')}</p>
              <p>Priority: {ticket.priority}</p>
              <div className="avatar">{ticket.avatar}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
