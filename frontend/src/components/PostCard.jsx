import React, { useState } from 'react';

const PostCard = ({ post }) => {

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img 
            src={post.artistAvatar} 
            alt={post.artistName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{post.artistName}</h3>
            <p className="text-sm text-gray-500">{post.location}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
          </svg>
        </button>
      </div>

      {/* Artwork Image */}
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </div>
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span className="font-medium">{post.comments}</span>
            </button>
            
            <button className="text-gray-600 hover:text-purple-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
              </svg>
            </button>
          </div>
          
          <button className="text-gray-600 hover:text-purple-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </button>
        </div>

        {/* Post Content */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">{post.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
          
          {/* Comments Preview */}
          {post.topComments && post.topComments.length > 0 && (
            <div className="mt-3 space-y-2">
              {post.topComments.map((comment, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <img 
                    src={comment.avatar} 
                    alt={comment.username}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 text-sm">{comment.username}</span>
                    <span className="text-gray-600 text-sm ml-2">{comment.text}</span>
                  </div>
                </div>
              ))}
              <button className="text-gray-500 text-sm hover:text-gray-700">
                View all {post.comments} comments
              </button>
            </div>
          )}
          
          <p className="text-gray-400 text-xs uppercase tracking-wide">{post.timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;