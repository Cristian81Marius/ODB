import React from 'react';

const EventFilter = ({ filter, onFilterChange, nameFilter, setNameFilter }) => {
  const selectStyle = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  return (
    <div style={{ marginLeft: '80px' }}>
      <br />
      <label htmlFor="filter" style={{ fontSize: '18px', marginRight: '10px' }}>
        Filtru evenimente:
      </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={selectStyle}
      >
        <option value="all">Toate evenimentele</option>
        <option value="past">Evenimente trecute</option>
        <option value="future">Evenimente viitoare</option>
        <option value="today">Evenimente de astăzi</option>
      </select>

      <input
        type="text"
        placeholder="Filtru după nume"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

export default EventFilter;
