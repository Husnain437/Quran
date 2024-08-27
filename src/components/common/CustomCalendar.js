import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#caa472] mb-1">Safar</h2>
        <p className="text-lg text-gray-300">August - September</p>
      </div>
      <Calendar
        className="react-calendar"
        onChange={setValue}
        value={value}
        tileClassName={({ date, view }) => {
          // Add custom styles to specific dates
          if (date.getDate() === 16 && view === 'month') {
            return 'highlight';
          }
        }}
      />
      <style jsx global>{`
        .react-calendar {
          background-color: #1f2937;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .react-calendar__navigation {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .react-calendar__navigation button {
          color: #caa472;
          background: none;
          border: none;
          font-size: 1.5rem;
          margin: 0 0.5rem;
        }
        .react-calendar__month-view__days__day {
          color: #caa472;
        }
        .react-calendar__tile {
          max-width: initial !important;
          color: #e5e7eb;
          font-weight: bold;
          text-align: center;
          padding: 0.5rem;
          margin: 0.25rem;
        }
        .react-calendar__tile--now {
          background: #374151;
          color: #caa472;
          border-radius: 8px;
        }
        .react-calendar__tile--active {
          background: #caa472;
          color: #1f2937;
          border-radius: 8px;
        }
        .highlight {
          background: #caa472;
          color: #1f2937;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default CustomCalendar;
