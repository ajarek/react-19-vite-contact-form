import "./alert.css";
export function Alert(props) {
  return (
    <div className="alert-container">
    <p 
    className="alert"
    style={props.style}
    >{props.error}
    </p>
    </div>
  );
}
export default Alert;