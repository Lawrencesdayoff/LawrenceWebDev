import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Dating_Sim } from './Dating_Sim';

const ContactForm = () => {

    const [sendername, setSenderName] = useState("")
    const [senderemail, setSenderEmail] = useState("")
    const [sendermessage, setSenderMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null); 
    const SERVICE_ID = "service_06sb3c5";
    const TEMPLATE_ID = "template_5n6lmxq";
    const PUBLIC_KEY = "9r3irmNNYz6K1_ZTP";
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStateMessage('Message Sent Successfully')
        }, (error) => {
          console.log(error.text);
          setStateMessage('Something went wrong!')
        });
      e.target.reset()
    };
      
    const handleName = (e) => {
      setSenderName(e)
    }
    const handleMessage = (e) => {
      setSenderMessage(e)
    }
    const handleEmail = (e) => {
      setSenderEmail(e)
    }
      return (
      <>


    <div className="contact_me">
      <h1>Hit me up!</h1>
      <p>
        Have questions? Wanna contact me for collaborative projects, commissions; dare I say employment oppurtunities? Please....
      </p>
      <div className="contact_me_body">
      <div> <Dating_Sim/></div>
        <div className = "contact_me_form">
          <form onSubmit={sendEmail}>
            <div className="contact_me_item"> 
              
              <label  className='contact_me_label'>Name</label>
              <input type="text" name="from_name" className='contact_me_input' value={sendername} onChange ={(e) => handleName(e.target.value)}/>
              
            </div>
            <div>
              <label className="contact_me_label">Email</label>
              <input type="email" name="from_email" className='contact_me_input' value={senderemail} onChange ={(e) => handleEmail(e.target.value)}/>
            </div> 
            <div>  
              <label  className='contact_me_label'>Message</label>
              <textarea name="message" className="contact_me_textarea"value= {sendermessage} onChange ={(e) => handleMessage(e.target.value)}/>
            </div>
            <input type="submit" className="contact_me_button" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
          </form>           
        </div>
        <div> <Dating_Sim/></div>

        </div>
      </div>
      </>
    );
  };export default ContactForm;