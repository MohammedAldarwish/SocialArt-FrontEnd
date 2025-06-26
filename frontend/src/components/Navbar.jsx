import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ArtConnect
            </Link>
            
            <div className="flex items-center space-x-8">
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
                to="/upload" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                </svg>
                <span className="text-sm">Upload</span>
              </Link>
              
              <Link 
                to="/notifications" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all relative ${
                  isActive('/notifications') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
                <span className="text-sm font-medium">Likes</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">3</div>
              </Link>
              
              <Link 
                to="/profile" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                  isActive('/profile') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-sm font-medium">Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="flex items-center justify-around py-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
              isActive('/') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          </Link>
          
          <Link 
            to="/explore" 
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
              isActive('/explore') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </Link>

          <Link 
            to="/messages" 
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all relative ${
              isActive('/messages') || location.pathname.startsWith('/chat') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <div className="absolute top-1 right-2 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">2</div>
          </Link>
          
          <Link 
            to="/upload" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
          </Link>
          
          <Link 
            to="/notifications" 
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all relative ${
              isActive('/notifications') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
            </svg>
            <div className="absolute top-1 right-2 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">3</div>
          </Link>
          
          <Link 
            to="/profile" 
            className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
              isActive('/profile') ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-1"></div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;