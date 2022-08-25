import "./input.css"
export function Input(props) {
  return (
    <div className="input-container">
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  )
}
export default Input
