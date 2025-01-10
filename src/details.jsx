import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


export default function Details() {
    const [posts, setPosts] = useState();
    const formElement = useRef(null);
    const navigate = useNavigate(); // start useNavigate

    function submitHandler(event) {
        event.preventDefault();
        const data = new FormData(formElement.current);


        const formDataObject = Object.fromEntries(data.entries());

        // gem form data til local storage og stringify det pga man ik kan gemme objekter direkte i local storage
        localStorage.setItem('signupData', JSON.stringify(formDataObject));

        console.log(formDataObject);
        setPosts(formDataObject)



        const options = { 
            
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(formDataObject), 
        }




        // Navi til Profile page
        fetch("/newposts", options)

        //reset efter klik
        formElement.current.reset();



    }



    return (
        <>
            <h1>Sign up</h1>
            <form ref={formElement} className="signup-form" onSubmit={submitHandler}>
                <input className="signup-form__input" name="_id" placeholder="First name..." />
                <input className="signup-form__input" name="headline" placeholder="First name..." />
                <input className="signup-form__input" name="text" placeholder="First name..." />

                <input className="signup-form__button" type="submit" value="Sign Up" />
            </form>
            <p>{posts?.text}</p>
        </>
    );
}