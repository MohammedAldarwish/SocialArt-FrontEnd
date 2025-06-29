import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { SkeletonFeed } from "./Skeleton";
import { useAppState } from "./AppStateContext";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userPreferences } = useAppState();

  // Mock data for the social feed
  const mockPosts = [
    {
      id: 1,
      artistName: "Emma Chen",
      artistAvatar:
        "https://images.pexels.com/photos/32718227/pexels-photo-32718227.jpeg",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
      title: "Blooming Elegance",
      description:
        "Just finished this classical still life study. The interplay of light and shadow in flowers has always fascinated me. What do you think? 🌸",
      category: "Classical",
      likes: 324,
      comments: 28,
      timeAgo: "2 hours ago",
      topComments: [
        {
          username: "alex_art",
          avatar:
            "https://images.unsplash.com/photo-1695927521717-a0ad39d93505",
          text: "The depth and detail are incredible! 😍",
        },
        {
          username: "maria_paints",
          avatar:
            "https://images.pexels.com/photos/32721688/pexels-photo-32721688.jpeg",
          text: "Love the color palette you chose here",
        },
      ],
    },
    {
      id: 2,
      artistName: "Marcus Rodriguez",
      artistAvatar:
        "https://images.unsplash.com/photo-1625682103688-2ab73a4fb11a",
      location: "Barcelona, Spain",
      image:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg",
      title: "Vibrant Energy",
      description:
        "Abstract expression at its finest! Sometimes you just need to let the colors flow and see where they take you 🎨✨",
      category: "Abstract",
      likes: 456,
      comments: 42,
      timeAgo: "4 hours ago",
      topComments: [
        {
          username: "creative_soul",
          avatar:
            "https://images.unsplash.com/photo-1539135950877-26943cd58152",
          text: "This speaks to my soul! The energy is palpable",
        },
      ],
    },
    {
      id: 3,
      artistName: "Sophia Kim",
      artistAvatar:
        "https://images.pexels.com/photos/32721688/pexels-photo-32721688.jpeg",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b",
      title: "Watercolor Dreams",
      description:
        "Experimenting with watercolor bleeding techniques. There's something magical about how colors blend and create their own story 💙💛",
      category: "Watercolor",
      likes: 289,
      comments: 31,
      timeAgo: "6 hours ago",
      topComments: [
        {
          username: "water_artist",
          avatar:
            "https://images.pexels.com/photos/32721719/pexels-photo-32721719.jpeg",
          text: "The way the colors flow together is mesmerizing!",
        },
        {
          username: "paint_lover",
          avatar: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44",
          text: "Teach me your watercolor secrets! 🙏",
        },
      ],
    },
    {
      id: 4,
      artistName: "David Thompson",
      artistAvatar:
        "https://images.unsplash.com/photo-1695927521717-a0ad39d93505",
      location: "London, UK",
      image:
        "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457",
      title: "Divine Ceiling Study",
      description:
        "Renaissance master study - trying to understand the techniques of the old masters. The detail work is absolutely mind-blowing! 🏛️",
      category: "Renaissance",
      likes: 378,
      comments: 25,
      timeAgo: "8 hours ago",
      topComments: [
        {
          username: "history_buff",
          avatar:
            "https://images.unsplash.com/photo-1745165549821-7382d2e740d4",
          text: "The dedication to studying classical techniques is admirable",
        },
      ],
    },
    {
      id: 5,
      artistName: "Luna Martinez",
      artistAvatar:
        "https://images.unsplash.com/photo-1539135950877-26943cd58152",
      location: "Mexico City, Mexico",
      image:
        "https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg",
      title: "Monochrome Emotions",
      description:
        "Sometimes black and white says more than a thousand colors. This piece represents the quiet moments we all need 🖤🤍",
      category: "Contemporary",
      likes: 412,
      comments: 38,
      timeAgo: "12 hours ago",
      topComments: [
        {
          username: "minimalist_art",
          avatar:
            "https://images.pexels.com/photos/32718227/pexels-photo-32718227.jpeg",
          text: "The emotion in this is powerful. Less is indeed more.",
        },
        {
          username: "contrast_king",
          avatar: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44",
          text: "The contrast and composition are perfect!",
        },
      ],
    },
    {
      id: 6,
      artistName: "James Wilson",
      artistAvatar:
        "https://images.unsplash.com/photo-1745165549821-7382d2e740d4",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa",
      title: "Maritime Memories",
      description:
        "Inspired by the old maritime paintings. There's something about ships and the sea that captures the imagination ⛵🌊",
      category: "Historical",
      likes: 267,
      comments: 19,
      timeAgo: "1 day ago",
      topComments: [
        {
          username: "sea_lover",
          avatar:
            "https://images.pexels.com/photos/32721719/pexels-photo-32721719.jpeg",
          text: "This takes me back to adventures on the high seas!",
        },
      ],
    },
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call with variable delay based on user preferences
        const delay = userPreferences?.showAnimations ? 800 : 400;

        await new Promise((resolve) => setTimeout(resolve, delay));

        setPosts(mockPosts);
      } catch (err) {
        setError("Failed to load posts. Please try again.");
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [userPreferences?.showAnimations]);

  if (loading) {
    return (
      <div className="max-w-lg mx-auto pt-20 md:pt-24 pb-20 md:pb-8 px-4">
        <SkeletonFeed count={3} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto pt-20 md:pt-24 pb-20 md:pb-8 px-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
            Unable to load posts
          </h3>
          <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto pt-20 md:pt-24 pb-20 md:pb-8 px-4">
      {/* Stories Section */}
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <div className="flex-shrink-0 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-2 border-2 border-white dark:border-dark-800 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Your Story
            </p>
          </div>
          {posts.slice(0, 6).map((post) => (
            <div key={post.id} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                <img
                  src={post.artistAvatar}
                  alt={post.artistName}
                  className="w-full h-full rounded-full object-cover border-2 border-white dark:border-dark-800"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 truncate w-16">
                {post.artistName.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Flexible space for future expansion */}
      <div className="mt-8">
        {/* Space reserved for future features like auto-loading or infinite scroll */}
      </div>
    </div>
  );
};

export default Feed;
