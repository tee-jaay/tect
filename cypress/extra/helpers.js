import moment from "moment";

// Return a date in YYYY-DD-MM format
export const formatedDate = (d1) => {
  return moment(d1).format("YYYY-MM-DD");
};
