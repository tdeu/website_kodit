import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './BlogPage.css';

const BlogPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  const imageMap = [
    'nostr.jpeg',
    'ants_pic.jpeg',
    'trilemne.jpeg',
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'image4.jpg',
  ];

  // Hardcoded latest article
  const latestArticle = {
    title: 'NOSTR : Simple "Truc" de plus ou Revolution des Réseaux Sociaux ?',
    pubDate: '2024-08-14 11:59:28',
    link: 'https://medium.com/@0xkodit/nostr-simple-truc-de-plus-ou-r%C3%A9volution-des-r%C3%A9seaux-sociaux-de13cdfe22fc',
    guid: 'https://medium.com/p/de13cdfe22fc',
    author: 'Kodit',
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0xkodit'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched posts:', data.items);
        
        // Add the latest article to the beginning of the array
        const allPosts = [latestArticle, ...data.items.filter(item => item.guid !== latestArticle.guid)];
        
        // Sort posts by date, most recent first
        const sortedPosts = allPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
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
        {posts.map((post, index) => {
          const imageFile = index < imageMap.length ? imageMap[index] : 'default-image.jpg';

          return (
            <li key={post.guid} className={`post-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className={`post-thumbnail-container ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                  <img
                    className="post-thumbnail"
                    src={`/images/blogpics/${imageFile}`}
                    alt="Post Thumbnail"
                  />
                  <div className="overlay">
                    <span className="post-title">{truncateString(post.title, 50)}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;