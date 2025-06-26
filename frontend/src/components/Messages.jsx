import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      user: {
        name: "Emma Chen",
        avatar: "https://images.pexels.com/photos/32718227/pexels-photo-32718227.jpeg",
        username: "@emma_art"
      },
      lastMessage: {
        text: "Love your latest watercolor piece! 😍",
        time: "2m ago",
        unread: true
      },
      online: true
    },
    {
      id: 2,
      user: {
        name: "Marcus Rodriguez",
        avatar: "https://images.unsplash.com/photo-1625682103688-2ab73a4fb11a",
        username: "@marcus_creates"
      },
      lastMessage: {
        text: "Thanks for the feedback on my abstract work!",
        time: "1h ago",
        unread: true
      },
      online: true
    },
    {
      id: 3,
      user: {
        name: "Sophia Kim",
        avatar: "https://images.pexels.com/photos/32721688/pexels-photo-32721688.jpeg",
        username: "@sophia_paints"
      },
      lastMessage: {
        text: "Would love to collaborate on a project",
        time: "3h ago",
        unread: false
      },
      online: false
    },
    {
      id: 4,
      user: {
        name: "David Thompson",
        avatar: "https://images.unsplash.com/photo-1695927521717-a0ad39d93505",
        username: "@david_classical"
      },
      lastMessage: {
        text: "That Renaissance study is incredible!",
        time: "5h ago",
        unread: false
      },
      online: false
    },
    {
      id: 5,
      user: {
        name: "Luna Martinez",
        avatar: "https://images.unsplash.com/photo-1539135950877-26943cd58152",
        username: "@luna_abstract"
      },
      lastMessage: {
        text: "Your monochrome work speaks to me",
        time: "1d ago",
        unread: false
      },
      online: true
    },
    {
      id: 6,
      user: {
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1745165549821-7382d2e740d4",
        username: "@james_maritime"
      },
      lastMessage: {
        text: "Let's discuss art techniques sometime",
        time: "2d ago",
        unread: false
      },
      online: false
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Online Friends Quick Access */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Online Now:</span>
              {conversations.filter(conv => conv.online).map((conv) => (
                <Link
                  key={conv.id}
                  to={`/chat/${conv.id}`}
                  className="flex-shrink-0 relative"
                >
                  <img
                    src={conv.user.avatar}
                    alt={conv.user.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Conversations List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="divide-y divide-gray-100">
            {filteredConversations.map((conversation) => (
              <Link
                key={conversation.id}
                to={`/chat/${conversation.id}`}
                className="block hover:bg-gray-50 transition-colors"
              >
                <div className="p-4 flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-semibold text-gray-900 truncate">
                        {conversation.user.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {conversation.lastMessage.time}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className={`text-sm truncate ${
                        conversation.lastMessage.unread 
                          ? 'text-gray-900 font-medium' 
                          : 'text-gray-600'
                      }`}>
                        {conversation.lastMessage.text}
                      </p>
                      
                      {conversation.lastMessage.unread && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-1">
                      {conversation.user.username}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredConversations.length === 0 && searchQuery && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No conversations found</h3>
            <p className="text-gray-600">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;