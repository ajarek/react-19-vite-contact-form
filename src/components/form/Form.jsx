import "./form.css";
import { Label } from "../../components/label/Label";
import { Input } from "../../components/input/Input";
import { Textarea } from "../../components/textarea/Textarea";
import { Button } from "../../components/button/Button";
export function Form() {
  return (
    <div className="form">
      <p className="title">Contact Form</p>
      <div className="form-row">
        <div className="input-wrapper">
          <div className="form-wrapper">
            <Label id={"name"} label={"Your Name"} />
            <Input
              id={"name"}
              type={"text"}
              name={"name"}
              placeholder={"👤 John Doe"}
            />
          </div>
          <div className="form-wrapper">
            <Label id={"mail"} label={"Mail"} />
            <Input
              id={"mail"}
              type={"email"}
              name={"mail"}
              placeholder={"✉️ john@doe.en "}
            />
          </div>
          <div className="form-wrapper">
            <Label id={"phone"} label={"Phone"} />
            <Input
              id={"phone"}
              type={"phone"}
              name={"phone"}
              placeholder={"📞 +48 573 219 230"}
            />
          </div>
        </div>
        <div className="form-wrapper">
          <Label id={"name"}
           label={"Message"} 
           style={{paddingLeft:'1rem'}}
           />
          <Textarea cols={"20"} rows={"8"} />
        </div>
      </div>
      <div className="form-wrapper">
        <Label id={"name"} label={"Services"} />
      </div>
      <div className="form-button">
        <Button label={"Web Design"} />
        <Button label={"Web Design"} />
        <Button label={"Web Design"} />
        <Button label={"Web Design"} />
      </div>
      <div className="form-message">
        <Button
          label={"Send Message"}
          style={{ background: "#fa949d", color: "#fff" }}
        />
      </div>
    </div>
  );
}
export default Form;
