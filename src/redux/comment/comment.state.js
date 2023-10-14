export const initialState = {
  dataComment: JSON.parse(localStorage.getItem("comment")) || [],
  dataInvoice: JSON.parse(localStorage.getItem("dataInvoice")) || [],
  dataAddress: JSON.parse(localStorage.getItem("dataAddress")) || [],
};
