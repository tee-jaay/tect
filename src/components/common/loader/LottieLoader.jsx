import Lottie from "react-lottie";
import animationData from "./LottieDotLoader.json";
import useStyles from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LottieLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Lottie options={defaultOptions} height={100} width={100} />;
    </div>
  );
};

export default LottieLoader;
