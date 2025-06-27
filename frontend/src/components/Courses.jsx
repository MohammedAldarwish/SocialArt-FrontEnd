import React, { useState } from "react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Courses", icon: "🎨" },
    { id: "drawing", name: "Drawing", icon: "✏️" },
    { id: "painting", name: "Painting", icon: "🖌️" },
    { id: "digital", name: "Digital Art", icon: "💻" },
    { id: "watercolor", name: "Watercolor", icon: "🌊" },
    { id: "sculpture", name: "Sculpture", icon: "🗿" },
  ];

  const courses = [
    {
      id: 1,
      title: "Watercolor Fundamentals: From Beginner to Pro",
      instructor: "Emma Chen",
      instructorAvatar:
        "https://images.pexels.com/photos/32718227/pexels-photo-32718227.jpeg",
      thumbnail: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b",
      category: "watercolor",
      level: "Beginner",
      duration: "8 hours",
      students: 1234,
      rating: 4.9,
      price: 89,
      description:
        "Master the art of watercolor painting with techniques used by professional artists.",
      lessons: 24,
      featured: true,
    },
    {
      id: 2,
      title: "Abstract Art: Express Your Inner Creativity",
      instructor: "Marcus Rodriguez",
      instructorAvatar:
        "https://images.unsplash.com/photo-1625682103688-2ab73a4fb11a",
      thumbnail:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg",
      category: "painting",
      level: "Intermediate",
      duration: "6 hours",
      students: 892,
      rating: 4.8,
      price: 79,
      description:
        "Unleash your creativity through abstract painting techniques and color theory.",
      lessons: 18,
      featured: true,
    },
    {
      id: 3,
      title: "Classical Drawing Techniques",
      instructor: "David Thompson",
      instructorAvatar:
        "https://images.unsplash.com/photo-1695927521717-a0ad39d93505",
      thumbnail:
        "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457",
      category: "drawing",
      level: "Advanced",
      duration: "12 hours",
      students: 567,
      rating: 4.9,
      price: 129,
      description:
        "Learn time-tested drawing techniques from Renaissance masters.",
      lessons: 32,
      featured: false,
    },
    {
      id: 4,
      title: "Digital Art for Beginners",
      instructor: "Sophia Kim",
      instructorAvatar:
        "https://images.pexels.com/photos/32721688/pexels-photo-32721688.jpeg",
      thumbnail:
        "https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg",
      category: "digital",
      level: "Beginner",
      duration: "10 hours",
      students: 2156,
      rating: 4.7,
      price: 99,
      description:
        "Start your digital art journey with industry-standard tools and techniques.",
      lessons: 28,
      featured: true,
    },
    {
      id: 5,
      title: "Portrait Drawing Mastery",
      instructor: "Luna Martinez",
      instructorAvatar:
        "https://images.unsplash.com/photo-1539135950877-26943cd58152",
      thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
      category: "drawing",
      level: "Intermediate",
      duration: "9 hours",
      students: 743,
      rating: 4.8,
      price: 109,
      description:
        "Create stunning portraits with advanced shading and proportion techniques.",
      lessons: 22,
      featured: false,
    },
    {
      id: 6,
      title: "Maritime Art & Seascapes",
      instructor: "James Wilson",
      instructorAvatar:
        "https://images.unsplash.com/photo-1745165549821-7382d2e740d4",
      thumbnail: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa",
      category: "painting",
      level: "Intermediate",
      duration: "7 hours",
      students: 432,
      rating: 4.6,
      price: 85,
      description:
        "Capture the beauty and power of the sea through traditional painting methods.",
      lessons: 20,
      featured: false,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 md:pt-24 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Learn from the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {" "}
              Best
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Master new art techniques with courses taught by professional
            artists and industry experts
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search courses, instructors, or techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <span>{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Courses */}
        {selectedCategory === "all" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              🌟 Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 dark:text-gray-100">
                      ${course.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <img
                        src={course.instructorAvatar}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {course.instructor}
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400 px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{course.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <span>{course.lessons} lessons</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Courses */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {selectedCategory === "all"
              ? "All Courses"
              : `${
                  categories.find((c) => c.id === selectedCategory)?.name
                } Courses`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 dark:text-gray-100">
                    ${course.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {course.instructor}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400 px-2 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{course.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <span>{course.lessons} lessons</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
