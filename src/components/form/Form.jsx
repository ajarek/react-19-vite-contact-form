import "./form.css";
import {Label} from "../../components/label/Label"
import {Input} from "../../components/input/Input"
export function Form() {
  return (
    <div className="form">
      <p className="title">Contact Form</p>
      <div className="form-wrapper">
      <Label
      id={'name'}
      label={'Your Name' }
      />
      <Input
      id={'name'}
      type={'text'}
      name={'name'}
      placeholder={'👤 John Doe'}
      />
      </div>
      <div className="form-wrapper">
      <Label
      id={'mail'}
      label={'Mail' }
      />
      <Input
      id={'mail'}
      type={'email'}
      name={'mail'}
      placeholder={'✉️ john@doe.en '}
      />
      </div>
       <div className="form-wrapper">
      <Label
      id={'phone'}
      label={'Phone' }
      />
      <Input
      id={'phone'}
      type={'phone'}
      name={'phone'}
      placeholder={'📞 +48 573 219 230'}
      />
      </div>
    </div>
  );
}
export default Form;
