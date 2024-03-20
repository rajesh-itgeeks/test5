import { useRef, useState } from "react";
import style from "./form.module.scss";
import Button from "../../Button";

function FormMain(props) {
  const { className } = props;

  const [formSuccess, setFormSuccess] = useState(false);

  const inputEmailRef = useRef();

  async function formSubmitHandler(event) {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;

    let formData = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

  async function clickMehandler(event) {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;

    let fetchedData = await fetch("/api/lists", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    let fetchedDataJson = await fetchedData.json();

    console.log(fetchedDataJson);
  }

  if (!formSuccess) {
    return (
      <>
        <form className={style.formMain} onSubmit={formSubmitHandler}>
          <div className={style.formGroup}>
            <label htmlFor="name">Enter Your Name:</label>
            <input id="name" type="text" placeholder="Name" required />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Enter Your Email:</label>
            <input ref={inputEmailRef} id="email" type="email" placeholder="Email" required />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="choosePerson">Choose someone to contact:</label>

            <select name="select" id="choosePerson">
              <option value="">Who are you reaching out to?</option>
              <option value="person1">Person 1</option>
              <option value="person2">Person 2</option>
              <option value="person3">Person 3</option>
            </select>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Message"></textarea>
          </div>

          <Button title="Submit" className={style.formBtn} formSubmit />
        </form>
      </>
    );
  }

  if (formSuccess) {
    return (
      <>
        <p style={{ color: "#fff" }}>Thanks! We'll be in touch with the latest from the lab.</p>
      </>
    );
  }
}

export default FormMain;
