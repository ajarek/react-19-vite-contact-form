import "./form.css"
import React from "react"
import { Label } from "../../components/label/Label"
import { Input } from "../../components/input/Input"
import { Textarea } from "../../components/textarea/Textarea"
import { Button } from "../../components/button/Button"
import { Alert } from "../../components/alert/Alert"
export class Form extends React.Component {
  state = {
    validateName: "",
    validateEmail: "",
    validatePhone: "",
    validateTextarea: "",
    inputValueName: "",
    inputValueEmail: "",
    inputValuePhone: "",
    inputValueTextarea: "",
    validationChecked: [],
    buttonLabel: "",
  }
  InputName = (e) => {
    this.setState({ inputValueName: e.target.value })
    setTimeout(() => {
      if (this.state.inputValueName.match(/^([A-Z][a-z]{2,})$/)) {
        this.setState({ validateName: "Valid" })
        this.state.validationChecked.push("true")
      } else {
        this.setState({
          validateName:
            "Invalid:Only first capital letter, min = 3, no digit !",
        })
      }
    }, 0)
  }
  InputEmail = (e) => {
    this.setState({ inputValueEmail: e.target.value })
    setTimeout(() => {
      if (
        this.state.inputValueEmail.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        this.setState({ validateEmail: "Valid" })
        this.state.validationChecked.push("true")
      } else {
        this.setState({
          validateEmail: "Invalid:This is not a valid email !",
        })
      }
    }, 0)
  }

  InputPhone = (e) => {
    this.setState({ inputValuePhone: e.target.value })
    setTimeout(() => {
      if (this.state.inputValuePhone.match(/^\d{9}$/)) {
        this.setState({ validatePhone: "Valid" })
        this.state.validationChecked.push("true")
      } else {
        this.setState({
          validatePhone: "Invalid:only 9 digits with no spaces !",
        })
      }
    }, 0)
  }

  InputTextarea = (e) => {
    this.setState({ inputValueTextarea: e.target.value })
    setTimeout(() => {
      if (this.state.inputValueTextarea.match(/^[\s\S]{5,100}$/)) {
        this.setState({ validateTextarea: "Valid" })
        this.state.validationChecked.push("true")
      } else {
        this.setState({
          validateTextarea: "Invalid:number of characters min = 5 max = 100 !",
        })
      }
    }, 0)
  }
  sendMassage = (e) => {
    e.preventDefault()
    this.state.validationChecked.length === 4
      ? alert(`
  Message sent!
  name: ${this.state.inputValueName},
  email: ${this.state.inputValueEmail},
  phone: ${this.state.inputValuePhone},
  text : ${this.state.inputValueTextarea},
  refers to: ${this.state.buttonLabel}
  `)
      : alert(`no valid ${this.state.validationChecked}`)
    this.clearInput()
  }
  displayLabel = (e) => {
    e.preventDefault()
    this.setState({ buttonLabel: e.target.innerText })
    e.target.classList.toggle("choice")
  }
  clearInput = () => {
    this.setState({ inputValueName: "" })
    this.setState({ validateName: "" })
    this.setState({ validateEmail: "" })
    this.setState({ validatePhone: "" })
    this.setState({ validateTextarea: "" })
    this.setState({ inputValueEmail: "" })
    this.setState({ inputValuePhone: "" })
    this.setState({ inputValueTextarea: "" })
    this.setState({ validationChecked: new Array(0) })
    this.setState({ buttonLabel: "" })
    document.querySelectorAll(".form-button button").forEach((el) => {
      el.classList.remove("choice")
    })
  }
  render() {
    return (
      <form className="form">
        <p className="title">Contact Form</p>
        <div className="form-row">
          <div className="input-wrapper">
            <div className="form-wrapper">
              <Label id={"name"} label={"Your Name"} />
              <Input
                onChange={this.InputName}
                value={this.state.inputValueName}
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"👤 John"}
              />
            </div>
            <Alert
              error={this.state.validateName}
              style={
                this.state.validateName === "Valid"
                  ? { color: "green" }
                  : { color: "red" }
              }
            />
            <div className="form-wrapper">
              <Label id={"mail"} label={"Mail"} />
              <Input
                onChange={this.InputEmail}
                value={this.state.inputValueEmail}
                id={"mail"}
                type={"email"}
                name={"mail"}
                placeholder={"✉️ john@doe.en "}
              />
            </div>
            <Alert
              error={this.state.validateEmail}
              style={
                this.state.validateEmail === "Valid"
                  ? { color: "green" }
                  : { color: "red" }
              }
            />
            <div className="form-wrapper">
              <Label id={"phone"} label={"Phone"} />
              <Input
                onChange={this.InputPhone}
                value={this.state.inputValuePhone}
                id={"phone"}
                type={"phone"}
                name={"phone"}
                placeholder={"📞 +48 573 219 230"}
              />
            </div>
            <Alert
              error={this.state.validatePhone}
              style={
                this.state.validatePhone === "Valid"
                  ? { color: "green" }
                  : { color: "red" }
              }
            />
          </div>
          <div className="form-wrapper">
            <Label
              id={"name"}
              label={"Message"}
              style={{ paddingLeft: "1rem" }}
            />
            <Textarea
              onChange={this.InputTextarea}
              value={this.state.inputValueTextarea}
              cols={"20"}
              rows={"8"}
            />
            <Alert
              error={this.state.validateTextarea}
              style={
                this.state.validateTextarea === "Valid"
                  ? { color: "green" }
                  : { color: "red" }
              }
            />
          </div>
        </div>

        <div className="form-wrapper">
          <Label id={"name"} label={"Services"} />
        </div>
        <div className="form-button">
          <Button label={"Web Design"} onClick={this.displayLabel} />
          <Button label={"Web Development"} onClick={this.displayLabel} />
          <Button label={"Logo Design"} onClick={this.displayLabel} />
          <Button label={"Other"} onClick={this.displayLabel} />
        </div>
        <div className="form-message">
          <Button
            label={"Send Message"}
            style={{ background: "#fa949d", color: "#fff" }}
            onClick={this.sendMassage}
          />
        </div>
      </form>
    );
  }
}
export default Form
