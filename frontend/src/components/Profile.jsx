import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const Profile = () => {
  const { isDark } = useTheme();

  // Sample user posts data
  const userPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
      title: "Watercolor Dreams",
      likes: 234,
      comments: 18,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578662996442-048c49d68a2a?w=500",
      title: "Digital Portrait",
      likes: 189,
      comments: 12,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
      title: "Abstract Colors",
      likes: 156,
      comments: 8,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578662996442-048c49d68a2a?w=500",
      title: "Nature Study",
      likes: 203,
      comments: 15,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
      title: "Sunset Landscape",
      likes: 178,
      comments: 9,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1578662996442-048c49d68a2a?w=500",
      title: "Character Design",
      likes: 267,
      comments: 22,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
      title: "Urban Sketches",
      likes: 145,
      comments: 6,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1578662996442-048c49d68a2a?w=500",
      title: "Mixed Media Art",
      likes: 198,
      comments: 13,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200 pt-20 md:pt-24 pb-24 md:pb-8">
      {/* Floating Settings Button */}
      <button className="fixed top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-lg border border-gray-100 dark:border-dark-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-dark-800 transition-all">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-700 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1695927521717-a0ad39d93505"
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-lg"
              />
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {/* Name and Username */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Alex Johnson
              </h1>
              <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">
                @alex_artist
              </p>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Passionate artist exploring watercolor and digital art. Always learning and sharing the creative journey. Love experimenting with colors and bringing imagination to life.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    127
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Posts
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    2.4K
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Followers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    1.2K
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Following
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit Profile</span>
                </button>
                <button className="bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-dark-600 transition-all">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-700 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Posts
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-2l-4-4m0 8l4-4" />
              </svg>
              <span>Latest first</span>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-gray-50 dark:bg-dark-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Post Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold mb-2 truncate">{post.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-all">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
