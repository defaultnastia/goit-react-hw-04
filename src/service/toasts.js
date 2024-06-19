import { toast } from "react-hot-toast";

export const noImagesToast = (key) =>
  toast.error(`No images found by word "${key}".`, {
    position: "bottom-center",
    duration: 4000,
    style: {
      color: "white",
      backgroundColor: "crimson",
      padding: "12px 18px",
    },
  });

export const oopsToast = () =>
  toast.error(`Oops! Something went wrong.`, {
    position: "bottom-center",
    duration: 3000,
    style: {
      color: "white",
      backgroundColor: "crimson",
      padding: "12px 18px",
    },
  });

export const emptyFieldToast = () =>
  toast("Enter the key word!", {
    icon: "🦄",
    duration: 3000,
    position: "bottom-center",
    style: {
      border: "2px solid rgb(112 26 117)",
      padding: "12px 30px",
    },
  });

export const sameKeyToast = (key) =>
  toast(`The results for "${key}" search are already on the screen!`, {
    icon: "🦄",
    duration: 4000,
    position: "bottom-center",
    style: {
      border: "2px solid rgb(112 26 117)",
      padding: "12px 10px",
    },
  });
