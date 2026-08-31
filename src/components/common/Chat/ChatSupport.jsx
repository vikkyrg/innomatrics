import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const location = useLocation();
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isOpen]);

  useEffect(() => {
    if (location.pathname === '/' && !sessionStorage.getItem('chatShown') && !hasShownPopup) {
      setTimeout(() => {
        setIsOpen(true);
        setHasShownPopup(true);
        sessionStorage.setItem('chatShown', 'true');
        setChatMessages([{
          type: 'received',
          text: 'Hello! How can I help you today? 👋',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 2000); // Slight delay before popping up
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
    
    if (lowerMessage.includes('no any help') || 
        lowerMessage.includes('no help') || 
        lowerMessage === 'no' ||
        lowerMessage.includes('not need') ||
        lowerMessage.includes('dont need') ||
        lowerMessage.includes("don't need") ||
        lowerMessage.includes('no need')) {
      return `Thank you for visiting Innomatrics! 🙏\n\nIf you need any assistance in the future, we're here to help:\n\n1. Email: hello@innomatricstech.com\n2. Phone: +91 8431655799\n3. Office hours: Mon-Fri, 9:30 AM - 6:30 PM IST`;
    }

    if (lowerMessage === 'ok' || lowerMessage === 'okay' || lowerMessage === 'thankyou' || lowerMessage === 'thank you' || lowerMessage === 'thanks') {
      return `Thank you for chatting with us! 😊\n\nYou can visit us again anytime for more information. Have a great day!`;
    }
    
    if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('work') || lowerMessage === '1') {
      return `Thank you for your interest in career opportunities!\n\nWe're currently hiring for:\n• React.js Developers\n• Node.js Developers\n• Python Developers\n• App Development\n\nYou can share your resume at: careers@innomatricstech.com. Our HR team will review your application and respond within 24-48 hours.`;
    }
    
    if (lowerMessage.includes('technical') || lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage === '2') {
      return `Thank you for reaching out to Technical Support!\n\nTo better assist you, please provide:\n1. Project/Service name\n2. Specific technical issue\n3. Any error messages you're seeing\n\nOur technical team typically responds within 2-4 hours.`;
    }
    
    if (lowerMessage.includes('business') || lowerMessage.includes('collaborate') || lowerMessage.includes('partnership') || lowerMessage === '3') {
      return `Thank you for your interest in collaborating with us!\n\nWe offer Custom Software, Web/Mobile Apps, and IT Consulting.\n\nPlease share:\n1. Your company name\n2. Project overview\n\nOur business team will contact you within 24 hours.`;
    }
    
    if (lowerMessage === '4') {
      return `Thank you for contacting us. Please describe your inquiry and our team will direct it to the appropriate department. We typically respond within 24 hours.`;
    }

    return `Thank you for your message. Our team has received it and will respond shortly.\n\nFor immediate assistance:\n• Email: hello@innomatricstech.com\n• Phone: +91 8431655799`;
  };

  const toggleChat = () => {
    if (!isOpen && chatMessages.length === 0) {
      setChatMessages([{
        type: 'received',
        text: 'Hello! How can I help you today? 👋',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 sm:w-96 bg-white border border-secondary-200 shadow-2xl mb-4 pointer-events-auto overflow-hidden flex flex-col h-[500px] max-h-[75vh]"
          >
            {/* Header */}
            <div className="bg-primary-900 p-4 border-b border-primary-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-800 border border-primary-700 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Innomatrics Support</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-primary-300 font-bold uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleChat} 
                className="text-primary-300 hover:text-white hover:bg-primary-800 p-2 transition-colors border border-transparent hover:border-primary-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary-50">
              {chatMessages.map((msg, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index} 
                  className={`flex flex-col ${msg.type === 'sent' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 text-xs leading-relaxed font-medium ${
                      msg.type === 'sent' 
                        ? 'bg-primary-900 text-white' 
                        : 'bg-white border border-secondary-200 text-secondary-800'
                    }`}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-bold text-secondary-400 mt-1 uppercase tracking-wider px-1">
                    {msg.time}
                  </span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-secondary-200 shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-900 focus:ring-0 py-3 pl-4 pr-12 text-secondary-900 placeholder-secondary-400 text-xs font-medium focus:outline-none transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="absolute right-2 p-2 text-secondary-400 hover:text-primary-900 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="w-14 h-14 bg-primary-900 text-white border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto z-50 hover:bg-primary-800 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatSupport;