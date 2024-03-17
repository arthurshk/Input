import React from 'react';

const Sidebar = () => {
  const eventTypes = [
    { id: 1, name: 'Horse Racing' },
    { id: 2, name: 'Gambling Spots' },
    { id: 3, name: 'Concerts' }
  ];

  return (
    <div className="sidebar" style={{ marginTop: '90px' }}>
      <h2>Event Types</h2>
      <ul>
        {eventTypes.map(eventType => (
          <li key={eventType.id}>
            <a href={`#${eventType.name.toLowerCase()}`}>{eventType.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;