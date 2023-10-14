import Swal from "sweetalert2";

export const CommingSoon = () => {
  Swal.fire({
    icon: "info",
    title: "Comming Soon",
    showConfirmButton: false,
    scrollbarPadding: false,
    timer: 2000,
  });
};
