import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs
    //   .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
    //   .then(
    //     () => {
    //       alert('Message successfully sent!')
    //       window.location.reload(false)
    //     },
    //     () => {
    //       alert('Failed to send the message, please try again')
    //     }
    //   )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Shaheen Bagh
          <br />
          Jamia Nagar,
          <br />
          New Delhi 110025 <br />
          India <br />
          <br />
          <span>fardeenhsiddiqui98@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
          <iframe title="contact-us"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.761746705296!2d77.30047317387425!3d28.546880187968092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce41be7fa0e79%3A0xf5aab92c434b57cd!2sTayyab%20Masjid!5e0!3m2!1sen!2sin!4v1693216029589!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
