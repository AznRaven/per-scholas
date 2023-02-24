import { useRef } from "react";


 function Form() {
  let nameRef = useRef();
  let addressRef = useRef();
  let phoneRef = useRef();
  let emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    let NewClient = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      id: crypto.randomUUID()
    };
    console.log(NewClient);
  }

  return (
    <>
    <div className = "Signup">
        <h1> Daily Delicious Recipes </h1>
        <p>Sign up now</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" ref={nameRef} />

            <label htmlFor="address">Address</label>
            <input id="address" ref={addressRef} />
 
            <label htmlFor="phone">Phone</label>
            <input id="phone" ref={phoneRef} />

            <label htmlFor="email">Email</label>
            <input id="email" ref={emailRef} />

             <button>Submit</button>
          </form>
      </div>
    </>
  );
}

export default Form