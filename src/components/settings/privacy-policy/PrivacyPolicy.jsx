import { useSelector } from "react-redux";
import PageForm from "../PageForm";
const PrivacyPolicy = () => {
  const { pages } = useSelector((state) => state.page);

  const pageData = pages?.[0]?.[1];

  return (
    <PageForm
      pageType={"privacy"}
      title={pageData?.title}
      subTitle={pageData?.subTitle}
      content={pageData?.content}
      lastUpdate={pageData?.updatedAt}
    />
  );
};

export default PrivacyPolicy;
