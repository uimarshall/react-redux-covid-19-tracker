import spinner from '../assets/images/spinner.gif';

function Spinner() {
  return (
    <div className="spinner container mx-auto">
      <img src={spinner} alt="Loading" />
    </div>
  );
}

export default Spinner;
