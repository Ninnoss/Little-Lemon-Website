import { useState } from 'react';
import ReservationDataPickers from './ReservationDataPickers';
import UserInfoWrapper from './UserInfoWrapper';
import LoadingAndConfirmation from './LoadingAndConfirmationMsgs/LoadingAndConfirmation';
import Button from '../Button';
import { formatDate } from '../../utils/formatDate';

const ReservationForm = () => {
  // Form controlled Inputs state object (plus loading and confirmation msg states)
  const [reservationData, setReservationData] = useState({
    selectedSeating: '',
    selectedDate: '',
    selectedTime: '',
    selectedOccasion: '',
    selectedDiners: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    specialRequests: '',
    policyAgreement: false,
    loading: false,
    showConfirmationMsg: false,
  });

  const { selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, firstName, lastName, email, phoneNumber, policyAgreement } =
    reservationData;

  const handleReservationDataChange = (fieldName, value) => {
    if (fieldName === 'selectedDate') {
      value = formatDate(value); // Format the date before setting it
    }
    setReservationData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Reservation Data:', reservationData);

    // Show the loading spinner
    setReservationData((prevState) => ({
      ...prevState,
      loading: true,
    }));

    // Show confirmation message
    setReservationData((prevState) => ({
      ...prevState,
      showConfirmationMsg: true,
    }));
  };

  // check for disabling the submit button if all inputs aren't filled
  const disabled =
    !selectedSeating ||
    !selectedDate ||
    !selectedTime ||
    !selectedOccasion ||
    !selectedDiners ||
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !policyAgreement;

  return (
    <form
      className="pt-16"
      onSubmit={handleSubmit}>
      <ReservationDataPickers
        selectedSeating={selectedSeating}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedOccasion={selectedOccasion}
        selectedDiners={selectedDiners}
        onReservationDataChange={handleReservationDataChange}
      />

      <UserInfoWrapper
        selectedSeating={selectedSeating}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedOccasion={selectedOccasion}
        selectedDiners={selectedDiners}
        policyAgreement={policyAgreement}
        handleReservationDataChange={handleReservationDataChange}
      />

      <div className="pt-44">
        <Button
          className="hover:bg-lightOrange block mx-auto px-8 text-xl"
          type="submit"
          disabled={disabled} // Disable the button if the form is incomplete
          processing={disabled} // Reduce the button opacity if the form is incomplete
        >
          {selectedSeating && selectedDate && selectedTime && selectedOccasion && selectedDiners ? 'Confirm Reservation' : 'Reserve Table'}
        </Button>
      </div>

      <LoadingAndConfirmation
        reservationData={reservationData}
        setReservationData={setReservationData}
      />
    </form>
  );
};

export default ReservationForm;
