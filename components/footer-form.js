import { useRef, useState } from "react";
import style from "./footer-form.module.scss";
import Button from "./Button";

function FooterForm(props) {
  const [formSuccess, setFormSuccess] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const inputEmailRef = useRef();

  async function formSubmitHandler(event) {
    event.preventDefault();
    setButtonDisabled(true);
    const enteredEmail = inputEmailRef.current.value;

    let formData = await fetch("/api/newsletter", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ email: enteredEmail }),
    });

    try {
      var formDataJson = await formData.json();
      // console.log("data here:", formDataJson);
      setFormSuccess(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (!formSuccess) {
    return (
      <>
        <form className={style.footerForm} onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="email">Enter Your Email</label>
            <input
              disabled={buttonDisabled}
              ref={inputEmailRef}
              id="email"
              type="email"
              placeholder="WE ARE ALL LUCKY F*CKERS"
              required
            />
          </div>

          <Button
            disabled={buttonDisabled}
            title={buttonDisabled ? "Sending..." : "Submit"}
            className={style.formBtn}
            formSubmit
          />
        </form>
      </>
    );
  }

  if (formSuccess) {
    return (
      <>
        <p style={{ color: "#fff" }}>Thanks! We'll be in touch.</p>
      </>
    );
  }
}

export default FooterForm;
