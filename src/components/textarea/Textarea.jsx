import "./textarea.css"
export function Textarea(props) {
  return (
    <div className="textarea-container">
      <textarea
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.id}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </div>
  );
}
export default Textarea
