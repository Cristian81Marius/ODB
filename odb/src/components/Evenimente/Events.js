import React, { useState } from 'react';
import EventCalendar from './EventCalendar';
import EventFilter from './EvenimentFilter';

function Events() {
  const eventsData = [
    {
      date: "May 22, 2023",
      title: "Adunare Duminicală",
      time: "4:00 pm - 7:00 pm",
      venue: "Biserica Tuturor Sfinților Români, București",
      description:
        "Scopul întâlnirii este acela de a ne apropia de Dumnezeu prin studierea Cuvântului Său și prin împărtășirea experiențelor noastre de credință.",
    },
    {
      date: "May 21, 2023",
      title: "Vizita Beneficiari",
      time: "2:00 pm - 3:00 pm",
      venue: "Biserica Tuturor Sfinților Români, București",
      description:
        "Scopul întâlnirii este acela de a ne apropia de Dumnezeu prin studierea Cuvântului Său și prin împărtășirea experiențelor noastre de credință.",
    },
    // Adaugă mai multe evenimente aici...
  ];

  const [filter, setFilter] = useState('all');
  const [nameFilter, setNameFilter] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredEvents = eventsData
    .filter((event) => {
      if (filter === 'past') {
        return new Date(event.date) < new Date();
      } else if (filter === 'future') {
        return new Date(event.date) >= new Date();
      } else if (filter === 'today') {
        const today = new Date().toISOString().slice(0, 10);
        return event.date === today;
      }
      return true;
    })
    .filter((event) => {
      if (nameFilter) {
        return event.title.toLowerCase().includes(nameFilter.toLowerCase());
      }
      return true;
    });
    
    filteredEvents.sort((a, b) => {
        const dateA = new Date(a.date + " " + a.time);
        const dateB = new Date(b.date + " " + b.time);
        return dateA - dateB;
      });

  return (
    <div>
      <EventFilter filter={filter} onFilterChange={handleFilterChange} nameFilter={nameFilter} setNameFilter={setNameFilter} />
      {filteredEvents.map((event, index) => (
        <EventCalendar
          key={index}
          date={event.date}
          title={event.title}
          time={event.time}
          venue={event.venue}
          description={event.description}
        />
      ))}
    </div>
  );
}

export default Events;
