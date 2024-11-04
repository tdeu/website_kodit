import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getSortedPosts } from '../data/blogPosts';
import './BlogPage.css';

const BlogPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Get posts from local data
    setPosts(getSortedPosts());

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  return (
    <div className="blog-page">
      <h2 className="page-title">{t('our_latest_insights')}</h2>
      <div className="center-line"></div>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={post.id} className={`post-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
            <a href={post.link}>
              <div className={`post-thumbnail-container ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                <img
                  className="post-thumbnail"
                  src={`/images/blogpics/${post.image}`}
                  alt={post.title}
                />
                <div className={`overlay ${isMobile ? 'mobile' : ''}`}>
                  <span className="post-title">{truncateString(post.title, 50)}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;