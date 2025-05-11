import { toast } from "react-toastify";

const notify = function (message, type = "success") {
  return toast(message, {
    position: "top-right",
    autoClose: 5000,
    type,
    hideProgressBar: false,
    closeOnClick: false,
  });
};
