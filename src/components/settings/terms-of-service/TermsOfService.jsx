import { useSelector } from "react-redux";
import PageForm from "../PageForm";

const TermsOfService = () => {
  const { pages } = useSelector((state) => state.page);

  console.log(pages?.[0]);

  const pageData = pages?.[0]?.[2];
  return (
    <PageForm
      pageType="terms"
      title={pageData?.title}
      subTitle={pageData?.subTitle}
      content={pageData?.content}
      lastUpdate={pageData?.updatedAt}
    />
  );
};

export default TermsOfService;
