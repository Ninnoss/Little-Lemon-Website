const RadioButtons = () => {
  return (
    <>
      <fieldset className="flex flex-col items-start sm:flex-row sm:justify-center gap-x-20 md:gap-x-44 lg:gap-x-96 ">
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
          />
          <span className="radio h-6 w-6 block rounded-full border-2 border-solid border-highlightGrey ml-8 md:ml-4 relative"></span>
        </label>

        <label
          htmlFor="outdoor-seating"
          className="font-karla text-white font-semibold text-2xl flex items-center py-4">
          Outdoor Seating
          <input
            name="seating"
            type="radio"
            id="outdoor-seating"
            value="outdoor"
            className="sr-only"
          />
          <span className="radio h-6 w-6 block rounded-full border-2 border-solid border-highlightGrey ml-4 relative"></span>
        </label>
      </fieldset>
    </>
  );
};

export default RadioButtons;
