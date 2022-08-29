import { useSelector } from "react-redux";
import PageForm from "../PageForm";

const Disclaimer = () => {
  const { pages } = useSelector((state) => state.page);

  const pageData = pages?.[0]?.[0];
  return (
    <PageForm
      pageType={"disclaimer"}
      title={pageData?.title}
      subTitle={pageData?.subTitle}
      content={pageData?.content}
      lastUpdate={pageData?.updatedAt}
    />
  );
};

export default Disclaimer;
