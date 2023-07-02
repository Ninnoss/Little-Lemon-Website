import { LuAlarmClock } from 'react-icons/lu';
import { FaAngleDown } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const TimePicker = () => {
  const timeOptions = [5, 6, 7, 8, 9, 10];

  const [selectedTime, setSelectedTime] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [validationMessage, setValidationMessage] = useState(false);
  const timePickerRef = useRef(null);

  // Closing the TimePicker when clicking outside it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSelect = (time) => {
    setSelectedTime(time);
    setShowOptions(false);
    setValidationMessage(false);
  };

  const handleClick = () => {
    if (!showOptions) {
      setValidationMessage(true);
    }
  };

  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div
      ref={timePickerRef}
      onClick={handleClick}
      className={`relative mt-10 sm:mt-0`}>
      <legend className="font-karla block text-white font-semibold text-2xl py-4">Time</legend>
      <label
        htmlFor="timePicker"
        className="font-karla text-white text-xl sr-only">
        Select a time
      </label>
      <div
        id="time"
        className="w-[250px] flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={toggleOptions}>
        <LuAlarmClock
          size={28}
          className="text-primaryGreen"
        />
        <span className="text-primaryGreen text-xl font-karla">{selectedTime ? selectedTime + ':00 PM' : 'Select Time'}</span>
        <FaAngleDown
          size={24}
          className="text-primaryGreen"
        />
        <input
          id="timePicker"
          name="time"
          type="text"
          className="sr-only"
          placeholder="Select Time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          readOnly
          required
        />
      </div>
      {validationMessage && <p className="text-red-500 mt-2">Please select a time.</p>}

      {showOptions && (
        <div className="absolute top-[8.5rem] left-0 bg-white text-primaryGreen p-2 rounded-lg w-full grid grid-cols-2 z-10">
          {timeOptions.map((time) => (
            <div
              key={time}
              className="p-2.5 z-10 cursor-pointer font-semibold hover:bg-primaryGreen/80 hover:rounded-md duration-200 text-center hover:text-white border border-dashed hover:border-solid"
              onClick={() => handleSelect(time)}>
              {time}:00 PM
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimePicker;
