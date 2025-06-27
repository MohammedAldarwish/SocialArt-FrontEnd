import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Mock user data
  const users = {
    1: {
      name: "Emma Chen",
      avatar: "https://images.pexels.com/photos/32718227/pexels-photo-32718227.jpeg",
      username: "@emma_art",
      online: true
    },
    2: {
      name: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1625682103688-2ab73a4fb11a",
      username: "@marcus_creates",
      online: true
    },
    3: {
      name: "Sophia Kim",
      avatar: "https://images.pexels.com/photos/32721688/pexels-photo-32721688.jpeg",
      username: "@sophia_paints",
      online: false
    },
    4: {
      name: "David Thompson",
      avatar: "https://images.unsplash.com/photo-1695927521717-a0ad39d93505",
      username: "@david_classical",
      online: false
    },
    5: {
      name: "Luna Martinez",
      avatar: "https://images.unsplash.com/photo-1539135950877-26943cd58152",
      username: "@luna_abstract",
      online: true
    },
    6: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1745165549821-7382d2e740d4",
      username: "@james_maritime",
      online: false
    }
  };

  const currentUser = users[id];

  // Mock conversation data
  const mockMessages = {
    1: [
      { id: 1, text: "Hey! I saw your latest watercolor piece on the feed", sender: "other", time: "10:30 AM", avatar: currentUser?.avatar },
      { id: 2, text: "Thank you! I'm really happy with how it turned out 😊", sender: "me", time: "10:32 AM" },
      { id: 3, text: "The way the colors blend together is absolutely stunning!", sender: "other", time: "10:33 AM", avatar: currentUser?.avatar },
      { id: 4, text: "I've been experimenting with wet-on-wet techniques lately", sender: "me", time: "10:35 AM" },
      { id: 5, text: "Love your latest watercolor piece! 😍", sender: "other", time: "2m ago", avatar: currentUser?.avatar }
    ],
    2: [
      { id: 1, text: "Your abstract work is incredible!", sender: "me", time: "Yesterday" },
      { id: 2, text: "Thanks for the feedback on my abstract work!", sender: "other", time: "1h ago", avatar: currentUser?.avatar },
      { id: 3, text: "The energy and movement in your pieces is amazing", sender: "me", time: "1h ago" }
    ],
    3: [
      { id: 1, text: "I love your painting style!", sender: "me", time: "Yesterday" },
      { id: 2, text: "Would love to collaborate on a project", sender: "other", time: "3h ago", avatar: currentUser?.avatar },
      { id: 3, text: "That sounds amazing! What did you have in mind?", sender: "me", time: "2h ago" }
    ]
  };

  useEffect(() => {
    setMessages(mockMessages[id] || []);
  }, [id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "me",
        time: "now"
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">User not found</h2>
          <Link to="/messages" className="text-purple-600 hover:text-purple-700">
            Back to Messages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Chat Header - Fixed */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between fixed top-0 md:top-16 left-0 right-0 z-40 shadow-sm">
        <div className="flex items-center space-x-3">
          <Link 
            to="/messages"
            className="text-purple-600 hover:text-purple-700 transition-colors p-1 rounded-lg hover:bg-purple-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </Link>
          
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100"
            />
            {currentUser.online && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900">{currentUser.name}</h2>
            <p className="text-sm text-gray-500">
              {currentUser.online ? 'Active now' : 'Last seen recently'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </button>
          
          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </button>
          
          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Messages Area - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-gray-50" style={{ 
        marginTop: window.innerWidth >= 768 ? '120px' : '72px',
        marginBottom: '80px',
        minHeight: 'calc(100vh - 200px)'
      }}>
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a conversation</h3>
              <p className="text-gray-600">Send a message to {currentUser.name}</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 max-w-xs md:max-w-md lg:max-w-lg ${
                  msg.sender === 'me' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                }`}>
                  {msg.sender === 'other' && (
                    <img
                      src={msg.avatar}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  
                  <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                    msg.sender === 'me'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'me' ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input - Fixed Bottom */}
      <div className="bg-white border-t border-gray-200 px-4 py-4 fixed bottom-0 left-0 right-0 z-40 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
            {/* Attachment Buttons */}
            <div className="flex space-x-2">
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </button>
            </div>
            
            {/* Message Input */}
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder={`Message ${currentUser.name}...`}
                rows={1}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none max-h-32"
                style={{ minHeight: '44px' }}
              />
            </div>
            
            {/* Send Button */}
            <button
              type="submit"
              disabled={!message.trim()}
              className={`p-3 rounded-full transition-all flex-shrink-0 ${
                message.trim()
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;