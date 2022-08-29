let ENV_API_HOST =
  process.env.REACT_APP_API_HOST_PRODUCTION === "production"
    ? process.env.REACT_APP_API_HOST_PRODUCTION
    : process.env.REACT_APP_API_HOST_DEVELOPEMNT;
let ENV_API_ROOT = ENV_API_HOST + "api/";

class ApiURLs {
  static API_HOST = ENV_API_HOST;

  static BASE_URL = ENV_API_ROOT;

  // static GET_VISITOR_DETAILS = this.BASE_URL + "get-visitor-details";

  // static GET_PRODUCT_LIST_BY_REMARK(remark) {
  //     return this.BASE_URL + "get-product-list-by-remark/" + remark;
  // }

  // static GET_PRODUCT_LIST_BY_SUBCATEGORY(category, subcategory) {
  //     return this.BASE_URL + "get-product-list-by-subcategory/" + category + "/" + subcategory;
  // }
}
export default ApiURLs;
