import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Let's talk about<br />your next project.</h2>
        <p>Have a question? Send us a message using this form.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Alex Morgan" required />
        </label>
        <label>
          Email address
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="alex@example.com" required />
        </label>
        <label>
          Message
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write your message..." rows="4" required />
        </label>
        <button className="button button-dark" type="submit">Send message →</button>
        {submitted && <p className="success-message">Thanks! Your message was submitted in this demo.</p>}
      </form>
    </section>
  );
}

export default ContactForm;