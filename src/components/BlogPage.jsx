import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './BlogPage.css';

const BlogPage = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const imageMap = [
    'mask1.jpeg',
    'ivoiro.jpeg',
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
      setIsLoading(true);
      setError(null);
      try {
        console.log('Fetching posts...');
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent('https://medium.com/feed/@0xkodit')}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received data:', data);
        
        // Parse the XML content using the browser's DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        
        // Extract items from the XML
        const items = Array.from(xmlDoc.getElementsByTagName('item')).map(item => ({
          title: item.getElementsByTagName('title')[0].textContent,
          pubDate: item.getElementsByTagName('pubDate')[0].textContent,
          link: item.getElementsByTagName('link')[0].textContent,
          guid: item.getElementsByTagName('guid')[0].textContent,
          author: item.getElementsByTagName('dc:creator')[0].textContent,
        }));

        console.log('Parsed items:', items);
        
        if (!items || items.length === 0) {
          throw new Error('No items found in the API response');
        }
        
        // Add the latest article to the beginning of the array
        const allPosts = [latestArticle, ...items.filter(item => item.guid !== latestArticle.guid)];
        
        // Sort posts by date, most recent first
        const sortedPosts = allPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        console.log('Sorted posts:', sortedPosts);
        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();

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
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <div>
          <p>Error: {error}</p>
          <p>Please try again later.</p>
        </div>
      ) : posts.length > 0 ? (
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
                    <div className={`overlay ${isMobile ? 'mobile' : ''}`}>
                      <span className="post-title">{truncateString(post.title, 50)}</span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No posts found. Please try again later.</p>
          <p>Debug info: isLoading = {isLoading.toString()}, posts.length = {posts.length}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;