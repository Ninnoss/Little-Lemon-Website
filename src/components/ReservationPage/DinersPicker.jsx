import { FaAngleDown } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';

const DinersPicker = () => {
  const dinerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedDiners, setSelectedDiners] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [requiredMessage, setRequiredMessage] = useState(false);
  const dinersPickerRef = useRef(null);

  // Closing the DinersPicker when clicking outside it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dinersPickerRef.current && !dinersPickerRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSelect = (diners) => {
    setSelectedDiners(diners);
    setShowOptions(false);
    setRequiredMessage(false);
  };

  const handleClick = () => {
    if (!showOptions) {
      setRequiredMessage(true);
    }
  };

  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div
      ref={dinersPickerRef}
      onClick={handleClick}
      className={`relative mt-10 sm:mt-0 `}>
      <legend className="font-karla block text-white font-semibold text-2xl py-4">Diners</legend>
      <label
        htmlFor="dinersPicker"
        className="font-karla text-white text-xl sr-only">
        Select the number of diners
      </label>
      <div
        id="diners"
        className="w-[250px] flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={toggleOptions}>
        <HiUserGroup
          size={'2rem'}
          className="text-primaryGreen"
        />
        <span className="text-primaryGreen text-xl font-karla">{selectedDiners ? `${selectedDiners} Diners` : 'Select Diners'}</span>
        <FaAngleDown
          size={24}
          className="text-primaryGreen"
        />
        <input
          id="dinersPicker"
          name="diners"
          type="text"
          className="sr-only"
          placeholder="Select Diners"
          value={selectedDiners}
          onChange={(e) => setSelectedDiners(e.target.value)}
          readOnly
          required
        />
      </div>
      {requiredMessage && <p className="text-red-500 mt-2">Please select the number of diners.</p>}

      {showOptions && (
        <div className="absolute top-[8rem] left-0 bg-white text-primaryGreen p-2 rounded-lg w-full grid grid-cols-2 z-10">
          {dinerOptions.map((diners) => (
            <div
              key={diners}
              className="p-2 cursor-pointer font-semibold hover:bg-primaryGreen/80 hover:rounded-md duration-200 text-center hover:text-white border border-dashed hover:border-solid"
              onClick={() => handleSelect(diners)}>
              {diners} Diners
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DinersPicker;
