import { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact');
  const [draftReady, setDraftReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // shortcut: use the visitor's mail client; connect a mail service for server-side delivery.
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`);
    window.location.href = `mailto:anestpetollari44@gmail.com?subject=${subject}&body=${body}`;
    setDraftReady(true);
  }
  return <div className="contact-page"><div className="contact-top"><Link className="back-home" to="/"><ArrowLeft size={12} /> Home</Link><span className="availability">Based in Tirana, Albania</span></div><h1>Let's Connect</h1><p className="contact-subtitle">Let’s talk about your next project</p><form onSubmit={submit}><label>Name<input name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={120} /></label><label>Email<input type="email" name="email" autoComplete="email" placeholder="How can I contact you?" required maxLength={254} /></label><label>Message<textarea name="message" placeholder="Tell me about your project..." required maxLength={4000} rows={4} /></label><button className="pill-button" type="submit">Send Message <ArrowRight size={18} /></button>{draftReady && <p role="status" className="form-status">Continue in your email app to review and send the message. If it did not open, email <a href="mailto:anestpetollari44@gmail.com">anestpetollari44@gmail.com</a>.</p>}</form></div>;
}
