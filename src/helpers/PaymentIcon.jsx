const PaymentIcon = ({ name }) => {
  return (
    <img
      alt={name}
      src={`/assets/icons/${name}-24.png`}
      style={{ margin: "4px" }}
    />
  );
};

export default PaymentIcon;
