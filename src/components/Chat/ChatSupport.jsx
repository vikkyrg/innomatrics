import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './ChatSupport.css';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const location = useLocation();
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  useEffect(() => {
    if (location.pathname === '/' && !sessionStorage.getItem('chatShown') && !hasShownPopup) {
      setIsOpen(true);
      setHasShownPopup(true);
      sessionStorage.setItem('chatShown', 'true');
      setChatMessages([{
        type: 'received',
        text: 'Hello! How can I help you today? 👋',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [location, hasShownPopup]);

  const getWelcomeMessage = () => {
    return {
      type: 'received',
      text: 'Welcome to Innomatrics Tech!\n\nPlease select your inquiry type:\n1. Job Opportunities\n2. Technical Support\n3. Business Collaboration\n4. Other Inquiries',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getAutomatedResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Response for "no any help" or similar messages
    if (lowerMessage.includes('no any help') || 
        lowerMessage.includes('no help') || 
        lowerMessage === 'no' ||
        lowerMessage.includes('not need') ||
        lowerMessage.includes('dont need') ||
        lowerMessage.includes("don't need") ||
        lowerMessage.includes('nahi chahiye') ||
        lowerMessage.includes('no need')) {
      return `Thank you for visiting Innomatrics Technologies! 🙏

If you need any assistance in the future, we're here to help:

1. Email: hello@innomatricstech.com
2. Phone: +91 8431655799
3. Office hours: Mon-Fri, 9:30 AM - 6:30 PM IST

Have a great day! 👋`;
    }

    // Response for "ok" messages
    if (lowerMessage === 'ok' || lowerMessage === 'okay' || lowerMessage === 'thankyou' || lowerMessage === 'thank you' || lowerMessage === 'thanks') {
      return `Thank you for chatting with us! 😊

You can visit us again anytime for more information.
Have a great day!`;
    }
    
    // Job related responses
    if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('work') || lowerMessage === '1') {
      return `Thank you for your interest in career opportunities at Innomatrics Technologies!

We're currently hiring for multiple positions:
• React.js Developers
• Node.js Developers
• Python Developers
• App Development

You can:
1. View all job openings on our Careers page
2. Share your resume at: careers@innomatricstech.com

Our HR team will review your application and respond within 24-48 hours.`;
    }
    
    // Technical support responses
    if (lowerMessage.includes('technical') || lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage === '2') {
      return `Thank you for reaching out to Innomatrics Technical Support!

To better assist you, please provide:
1. Project/Service name
2. Specific technical issue
3. Any error messages you're seeing

Our technical team typically responds within 2-4 hours during business hours.`;
    }
    
    // Business collaboration responses
    if (lowerMessage.includes('business') || lowerMessage.includes('collaborate') || lowerMessage.includes('partnership') || lowerMessage === '3') {
      return `Thank you for your interest in collaborating with Innomatrics Technologies!

We offer:
• Custom Software Development
• Web & Mobile App Development
• Digital Marketing Solutions
• IT Consulting Services

Please share:
1. Your company name
2. Type of collaboration interested in
3. Project overview

Our business team will contact you within 24 hours to discuss further.`;
    }
    
    // General inquiry response
    if (lowerMessage === '4') {
      return `Thank you for contacting us. Please describe your inquiry and our team will direct it to the appropriate department. We typically respond within 24 hours.`;
    }

    // Default response for other messages
    return `Thank you for your message. Our team has received it and will respond shortly. 

For immediate assistance:
• Email: hello@innomatricstech.com
• Phone: +91 8431655799
• Business Hours: Mon-Fri, 9:30 AM - 6:30 PM IST`;
  };

  const toggleChat = () => {
    if (!isOpen) {
      setChatMessages([{
        type: 'received',
        text: 'Hello! How can I help you today? 👋',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsFirstMessage(true);
    } else {
      setChatMessages([]);
      setIsFirstMessage(true);
    }
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      type: 'sent',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const lowerMessage = message.toLowerCase();
    const isNoNeedMessage = lowerMessage.includes('no any help') || 
      lowerMessage.includes('no help') || 
      lowerMessage === 'no' ||
      lowerMessage.includes('not need') ||
      lowerMessage.includes('dont need') ||
      lowerMessage.includes("don't need") ||
      lowerMessage.includes('nahi chahiye') ||
      lowerMessage.includes('no need');

    if (isFirstMessage && !isNoNeedMessage) {
      setChatMessages(prev => [...prev, newMessage, getWelcomeMessage()]);
      setIsFirstMessage(false);
    } else {
      setChatMessages(prev => [...prev, newMessage]);
      setTimeout(() => {
        const response = {
          type: 'received',
          text: getAutomatedResponse(message),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, response]);
      }, 1000);
    }
    
    setMessage('');
  };

  return (
    <div className="chat-support">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-content">
           
              <span className="online-status">Online</span>
            </div>
            <button onClick={toggleChat} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-content">
                  <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}
      <button className="chat-button" onClick={toggleChat}>
        <FontAwesomeIcon icon={faComments} />
      </button>
    </div>
  );
};

export default ChatSupport; 