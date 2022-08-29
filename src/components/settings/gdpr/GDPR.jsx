import { useSelector } from "react-redux";
import PageForm from "../PageForm";

const GDPR = () => {
  const { pages } = useSelector((state) => state.page);

  const pageData = pages?.[0]?.[3];
  return (
    <PageForm
      pageType={"gdpr"}
      title={pageData?.title}
      subTitle={pageData?.subTitle}
      content={pageData?.content}
      lastUpdate={pageData?.updatedAt}
    />
  );
};

export default GDPR;
