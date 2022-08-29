import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <input type="text" value="231.34" />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
