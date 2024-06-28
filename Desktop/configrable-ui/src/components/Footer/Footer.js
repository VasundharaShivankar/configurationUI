import React from 'react';
import './Footer.css';

const Footer = ({ address, contact, socialLinks, copyright }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Address</h4>
          <p>{address.line1}</p>
          <p>{address.line2}</p>
          <p>{address.city}, {address.state}- {address.zip}</p>
        </div>
        <div className="footer-section">
          <h4>Get in Touch</h4>
          <p>Phone: {contact.phone}</p>
          <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className='link-name'>
                  <img src={link.icon} alt={link.name} />{link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
