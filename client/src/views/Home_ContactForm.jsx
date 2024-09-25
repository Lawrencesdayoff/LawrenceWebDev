import { useState } from 'react';

const ContactForm = () => {

    const [sendername, setSenderName] = useState("")
    const [senderemail, setSenderEmail] = useState("")
    const [sendermessage, setSenderMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);    emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };  return (
      <>


    <div className="contact_me">
      <h1>Hit me up!</h1>
      <p>
        Have questions? Wanna contact me for collaborative projects, commissions; dare I say employment oppurtunities? Please....
      </p>
      <form onSubmit={sendEmail}>
        <div className="contact_me_item"> 
          
          <label  className='contact_me_label'>Name</label>
          <input type="text" name="user_name" className='contact_me_input' />
          
        </div>
        <div>
          <label className="contact_me_label">Email</label>
          <input type="email" name="user_email" className='contact_me_input'/>
        </div> 
        <div>  
          <label  className='contact_me_label'>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
      </div>
      </>
    );
  };export default ContactForm;