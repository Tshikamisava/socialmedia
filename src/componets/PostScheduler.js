import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostScheduler = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <h3>Schedule Post</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default PostScheduler;
