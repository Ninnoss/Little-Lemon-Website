/* eslint-disable react/prop-types */
const RadioButtons = ({ selectedSeating, onSeatingChange }) => {
  
  const handleSeatingChange = (value) => {
    onSeatingChange(value);
  };

  return (
    <>
      <label
        htmlFor="indoor-seating"
        className="font-karla text-white font-semibold text-2xl flex items-center py-4">
        Indoor Seating
        <input
          name="seating"
          type="radio"
          id="indoor-seating"
          value="indoor"
          className="sr-only"
          checked={selectedSeating === 'indoor'}
          onChange={() => handleSeatingChange('indoor')}
        />
        <span className="radio h-6 w-6 block rounded-full border-2 border-solid border-highlightGrey ml-8 md:ml-4 relative"></span>
      </label>

      <label
        htmlFor="outdoor-seating"
        className="font-karla text-white font-semibold text-2xl flex items-center py-4 sm:mr-8">
        Outdoor Seating
        <input
          name="seating"
          type="radio"
          id="outdoor-seating"
          value="outdoor"
          className="sr-only"
          checked={selectedSeating === 'outdoor'}
          onChange={() => handleSeatingChange('outdoor')}
        />
        <span className="radio h-6 w-6 block rounded-full border-2 border-solid border-highlightGrey ml-4 relative"></span>
      </label>
    </>
  );
};

export default RadioButtons;
