import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Profile = () => {
  const { isDark, theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    theme: theme || "auto",
    privacy: "public",
    notifications: true,
  });

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLoginSuccess = (data) => {
    setIsLoggedIn(true);
    setUser(data.user || data);
  };

  const handleRegisterSuccess = (data) => {
    setIsLoggedIn(true);
    setUser(data.user || data);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  const switchToRegister = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  // Settings modal handlers
  const handleThemeChange = (e) => {
    setSettings((prev) => ({ ...prev, theme: e.target.value }));
    setTheme(e.target.value);
  };
  const handlePrivacyChange = (e) => {
    setSettings((prev) => ({ ...prev, privacy: e.target.value }));
  };
  const handleNotificationsChange = (e) => {
    setSettings((prev) => ({ ...prev, notifications: e.target.checked }));
  };

  // Show login/register forms if not logged in
  if (!isLoggedIn) {
    return showLogin ? (
      <Login
        onLoginSuccess={handleLoginSuccess}
        onSwitchToRegister={switchToRegister}
      />
    ) : (
      <Register
        onRegisterSuccess={handleRegisterSuccess}
        onSwitchToLogin={switchToLogin}
      />
    );
  }

  // Sample user posts data with better image variety
  const userPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
      title: "Watercolor Dreams",
      likes: 234,
      comments: 18,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1578662996442-048c49d68a2a?w=600&h=600&fit=crop",
      title: "Digital Portrait",
      likes: 189,
      comments: 12,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop",
      title: "Abstract Colors",
      likes: 156,
      comments: 8,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
      title: "Nature Study",
      likes: 203,
      comments: 15,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551913902-c92207136625?w=600&h=600&fit=crop",
      title: "Sunset Landscape",
      likes: 178,
      comments: 9,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&h=600&fit=crop",
      title: "Character Design",
      likes: 267,
      comments: 22,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&h=600&fit=crop",
      title: "Urban Sketches",
      likes: 145,
      comments: 6,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=600&h=600&fit=crop",
      title: "Mixed Media Art",
      likes: 198,
      comments: 13,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=600&fit=crop",
      title: "Color Study",
      likes: 134,
      comments: 7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      {/* Floating Settings Button */}
      <button
        className="hidden md:flex fixed top-20 right-4 sm:top-24 sm:right-6 md:top-28 md:right-8 lg:top-32 lg:right-10 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-dark-600/50 rounded-full items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-dark-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        onClick={() => setShowSettings(true)}
        aria-label="Open settings"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
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

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowSettings(false)}
              aria-label="Close settings"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Settings
            </h2>
            <form className="space-y-6">
              {/* Theme Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="light"
                      checked={settings.theme === "light"}
                      onChange={handleThemeChange}
                      className="form-radio text-purple-600"
                    />
                    <span>Light</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="dark"
                      checked={settings.theme === "dark"}
                      onChange={handleThemeChange}
                      className="form-radio text-purple-600"
                    />
                    <span>Dark</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="auto"
                      checked={settings.theme === "auto"}
                      onChange={handleThemeChange}
                      className="form-radio text-purple-600"
                    />
                    <span>Auto</span>
                  </label>
                </div>
              </div>
              {/* Privacy Setting */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Privacy
                </label>
                <select
                  value={settings.privacy}
                  onChange={handlePrivacyChange}
                  className="w-full rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-900 px-3 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              {/* Notifications Setting */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Enable Notifications
                </span>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={handleNotificationsChange}
                  className="form-checkbox h-5 w-5 text-purple-600 rounded"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 dark:border-dark-700 p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
              {/* Profile Picture */}
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1695927521717-a0ad39d93505?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-xl"
                />
                <button className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:from-purple-700 hover:to-pink-700 hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
              <div className="flex-1 text-center lg:text-left w-full">
                {/* Name and Username */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {user?.name || user?.username || "Alex Johnson"}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-purple-600 dark:text-purple-400 mb-4 sm:mb-5 md:mb-6">
                  @{user?.username || "alex_artist"}
                </p>

                {/* Bio */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  Passionate artist exploring watercolor and digital art. Always
                  learning and sharing the creative journey. Love experimenting
                  with colors and bringing imagination to life through various
                  mediums.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-md mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                      127
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">
                      Posts
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                      2.4K
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">
                      Followers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                      1.2K
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">
                      Following
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">Edit Profile</span>
                  </button>
                  <button className="bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-dark-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-sm sm:text-base">Share Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 dark:border-dark-700 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                My Posts
              </h2>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                  />
                </svg>
                <span>Latest first</span>
              </div>
            </div>

            {/* Posts Grid - Enhanced for better responsiveness */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {userPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-gray-50 dark:bg-dark-700 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Enhanced Post Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="flex items-center space-x-1">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium">{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            <span className="font-medium">{post.comments}</span>
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/30">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Corner badge for featured posts */}
                  {post.likes > 200 && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-90">
                      ⭐ Popular
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Load More Button */}
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 text-gray-700 dark:text-gray-300 px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium hover:from-purple-100 hover:to-pink-100 dark:hover:from-dark-600 dark:hover:to-dark-500 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
                <span className="text-sm sm:text-base">Load More Posts</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
