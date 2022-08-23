import "./button.css";
export function Button(props) {
  return (
    <div className="button-container">
    <button style={props.style}>{props.label}</button>
    </div>
  );
}
export default Button;