import "../../styles/error.css";

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage = ({ message, onClose }: ErrorMessageProps) => {
  return (
    <div className="custom-alert">
      <span className="closebtn" onClick={onClose}>
        &times;
      </span>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
