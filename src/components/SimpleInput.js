import useInput from "../hooks/use-input";

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SimpleInput = (props) => {
 applied-for-basic-form-template
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
 master

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  const enteredEmailIsValid = validateEmail(enteredEmail);
  const enteredEmailIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

 applied-for-basic-form-template
  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
 master
      return;
    }

    console.log(enteredName, enteredEmail);

    // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
 applied-for-basic-form-template
    resetNameInput();

    resetEmailInput();

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
 master
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={nameEmailChangeHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
