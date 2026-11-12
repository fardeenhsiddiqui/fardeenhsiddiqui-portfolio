import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Seo from '../components/Seo';
import { profile } from '../data/profile';

// EmailJS public configuration. These are public identifiers (not private keys),
// but they are read from the build environment so nothing is hard-coded.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | mailto

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    if (data.get('website')) return; // honeypot: bots fill hidden fields

    if (!configured) {
      const subject = encodeURIComponent(data.get('subject'));
      const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setStatus('sent');
      form.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo title="Contact" description={`Contact ${profile.name} about software engineering roles and projects.`} />
      <section className="section container narrow">
        <h1>Contact</h1>
        <p className="lead">I'm open to backend and full-stack engineering roles. The quickest way to reach me is email.</p>
        <ul className="contact-links">
          <li><a href={`mailto:${profile.email}`}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> {profile.email}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /> LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub</a></li>
        </ul>

        <form ref={form} onSubmit={onSubmit} className="form" noValidate={false}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required maxLength={100} />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={150} />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required maxLength={150} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required maxLength={3000} />
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Leave this empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : configured ? 'Send message' : 'Open in email app'}
          </button>
          <div aria-live="polite" className="form-status">
            {status === 'sent' && <p className="ok">Thanks, your message was sent.</p>}
            {status === 'mailto' && <p className="ok">Your email app should have opened with the message prefilled.</p>}
            {status === 'error' && (
              <p className="err">
                The message could not be sent. Please email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
