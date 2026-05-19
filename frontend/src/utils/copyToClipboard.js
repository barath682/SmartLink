import toast from "react-hot-toast";

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);

    toast.success("Copied to clipboard");
  } catch (error) {
    toast.error("Copy failed");
  }
};

export default copyToClipboard;