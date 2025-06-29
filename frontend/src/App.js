import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/ThemeContext';
import { AppStateProvider } from './components/AppStateContext';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components for better performance
const Feed = lazy(() => import('./components/Feed'));
const Messages = lazy(() => import('./components/Messages'));
const Chat = lazy(() => import('./components/Chat'));
const Courses = lazy(() => import('./components/Courses'));
const Settings = lazy(() => import('./components/Settings'));
const Profile = lazy(() => import('./components/Profile'));
const AdminLogin = lazy(() => import('./components/AdminLogin'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));
const Explore = lazy(() => import('./components/Explore'));

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Feed />
      </Suspense>
    </div>
  );
};

// Messages Page
const MessagesPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <Suspense fallback={<LoadingSpinner />}>
      <Messages />
    </Suspense>
  </div>
);

// Individual Chat Page
const ChatPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Suspense fallback={<LoadingSpinner />}>
      <Chat />
    </Suspense>
  </div>
);

// Courses Page
const CoursesPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <Suspense fallback={<LoadingSpinner />}>
      <Courses />
    </Suspense>
  </div>
);

// Settings Page - Keep for backward compatibility but redirect to profile
const SettingsPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <Suspense fallback={<LoadingSpinner />}>
      <Settings />
    </Suspense>
  </div>
);

// Profile Page with integrated settings
const ProfilePage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <Suspense fallback={<LoadingSpinner />}>
      <Profile />
    </Suspense>
  </div>
);

// Explore Page
const ExplorePage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <Suspense fallback={<LoadingSpinner />}>
      <Explore />
    </Suspense>
  </div>
);

const Upload = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <div className="flex items-center justify-center pt-32 pb-24">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Upload</h1>
        <p className="text-gray-600 dark:text-gray-300">Share your creative work with the world</p>
        <p className="text-sm text-purple-600 dark:text-purple-400 mt-4">Coming soon...</p>
      </div>
    </div>
  </div>
);

const Notifications = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
    <Navbar />
    <div className="flex items-center justify-center pt-32 pb-24">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h1>
        <p className="text-gray-600 dark:text-gray-300">Stay updated with latest activity</p>
        <p className="text-sm text-purple-600 dark:text-purple-400 mt-4">Coming soon...</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppStateProvider>
          <div className="App">
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/chat/:id" element={<ChatPage />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminPanel />} />
              </Routes>
            </BrowserRouter>
          </div>
        </AppStateProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;