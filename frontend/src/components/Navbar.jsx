import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ArtConnect
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                  isActive('/') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                <span className="text-sm font-medium">Home</span>
              </Link>
              
              <Link 
                to="/explore" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                  isActive('/explore') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <span className="text-sm font-medium">Explore</span>
              </Link>

              <Link 
                to="/courses" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                  isActive('/courses') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span className="text-sm font-medium">Courses</span>
              </Link>

              <Link 
                to="/messages" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all relative ${
                  isActive('/messages') || location.pathname.startsWith('/chat') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span className="text-sm font-medium">Messages</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">2</div>
              </Link>
              
              <Link 
                to="/notifications" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all relative ${
                  isActive('/notifications') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span className="text-sm font-medium">Notifications</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">5</div>
              </Link>
              
              <Link 
                to="/upload" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                </svg>
                <span className="text-sm">Upload</span>
              </Link>
              
              <Link 
                to="/profile" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                  isActive('/profile') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span className="text-sm font-medium">Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="grid grid-cols-6 gap-1 py-2 px-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all ${
              isActive('/') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          
          <Link 
            to="/explore" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all ${
              isActive('/explore') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span className="text-xs">Explore</span>
          </Link>

          <Link 
            to="/courses" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all ${
              isActive('/courses') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <span className="text-xs">Courses</span>
          </Link>

          <Link 
            to="/messages" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all relative ${
              isActive('/messages') || location.pathname.startsWith('/chat') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span className="text-xs">Messages</span>
            <div className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">2</div>
          </Link>
          
          <Link 
            to="/notifications" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all relative ${
              isActive('/notifications') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span className="text-xs">Alerts</span>
            <div className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">5</div>
          </Link>
          
          <Link 
            to="/profile" 
            className={`flex flex-col items-center py-2 px-1 rounded-xl transition-all ${
              isActive('/profile') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span className="text-xs">Profile</span>
          </Link>
        </div>
        
        {/* Floating Upload Button for Mobile */}
        <Link 
          to="/upload"
          className="absolute bottom-20 right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
          </svg>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;