import RadioButtons from '../ReservationPage/DataPickers/RadioButtons';
import DateComponent from '../ReservationPage/DataPickers/DateComponent';
import TimePicker from '../ReservationPage/DataPickers/TimePicker';
import OccasionPicker from '../ReservationPage/DataPickers/OccasionPicker';
import DinersPicker from '../ReservationPage/DataPickers/DinersPicker';

// eslint-disable-next-line react/prop-types
const ReservationPickers = ({ selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, onReservationDataChange }) => {
  return (
    <>
      <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
        <RadioButtons
          selectedSeating={selectedSeating}
          onSeatingChange={(value) => onReservationDataChange('selectedSeating', value)}
        />
      </fieldset>

      <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
        <DateComponent
          selectedDate={selectedDate}
          setSelectedDate={(value) => onReservationDataChange('selectedDate', value)}
        />
        <TimePicker
          selectedTime={selectedTime}
          setSelectedTime={(value) => onReservationDataChange('selectedTime', value)}
        />
      </fieldset>

      <fieldset className="flex flex-col items-start sm:flex-row sm:justify-between">
        <OccasionPicker
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={(value) => onReservationDataChange('selectedOccasion', value)}
        />
        <DinersPicker
          selectedDiners={selectedDiners}
          setSelectedDiners={(value) => onReservationDataChange('selectedDiners', value)}
        />
      </fieldset>
    </>
  );
};

export default ReservationPickers;
