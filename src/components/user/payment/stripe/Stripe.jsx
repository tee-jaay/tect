import StripeCheckout from "react-stripe-checkout";

const StripeC = () => {
  const onToken = (token) => {
    //   fetch("/save-stripe-token", {
    //     method: "POST",
    //     body: JSON.stringify(token),
    //   }).then((response) => {
    //     response.json().then((data) => {
    //       alert(`We are in business, ${data.email}`);
    //     });
    //   });
    console.log({ token });
  };
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      name="Pay by stripe"
      description="Payed for the project"
      image="https://picsum.photos/400/600"
      ComponentClass="custom-div"
      panelLabel="Send Money"
      amount={12345}
      currency="USD"
    />
  );
};

export default StripeC;
