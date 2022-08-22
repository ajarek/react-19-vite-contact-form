import "./label.css";
export function Label(props) {
  return (
    <div className="label-container">
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
export default Label;