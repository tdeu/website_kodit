import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  const imageMap = [
    'nostr.jpeg',
    'ants_pic.jpeg',
    'trilemne.jpeg',
    'image1.jpeg',
    'image2.jpeg',
    'image4.jpg',
  ];

  // Hardcoded latest article
  const latestArticle = {
    title: 'NOSTR : Simple "Truc" de plus ou Révolution des Réseaux Sociaux ?',
    pubDate: '2024-08-14 11:59:28',
    link: 'https://medium.com/@0xkodit/nostr-simple-truc-de-plus-ou-r%C3%A9volution-des-r%C3%A9seaux-sociaux-de13cdfe22fc',
    guid: 'https://medium.com/p/de13cdfe22fc',
    author: 'Kodit',
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0xkodit`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched posts:', data.items);
        
        // Add the latest article to the beginning of the array, avoiding duplicates
        const allPosts = [latestArticle, ...data.items.filter(item => item.guid !== latestArticle.guid)];
        
        // Sort posts by date, most recent first
        const sortedPosts = allPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        
        // Get only the latest 3 posts
        setPosts(sortedPosts.slice(0, 3));
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
    <main>
      <section className="scSiteWB parallax">
        <div className="container" id="web">
          <div className="scSite ">
            <div className="scSite__1 wow fadeInLeft">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>

            <div className="scSite__2 wow fadeInRight">
              <h1>{t('web')}</h1>

              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 web-col-1">
                  <p>{t('web_p1')}</p>
                  <p>{t('web_p2')}</p>
                </div>

                <div className="col-md-7 col-lg-8">
                  <img src="videos/WEBSITE_animation-ezgif.com-crop.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scSiteSD parallax">
        <div className="container" id="software">
          <div className="scSite ">
            <div className="scSite__2 wow fadeInLeft">
              <h1>{t('software')}</h1>

              <div className="row justify-content-center ">
                <div className="col-md-7 col-lg-8">
                  <img src="videos/video-software-rduite-ezgif.com-crop.gif" alt="" />
                </div>

                <div className="col-md-5 col-lg-4">
                  <p>{t('soft_p1')}</p>
                  <p>{t('soft_p2')}</p>
                </div>
              </div>
            </div>

            <div className="scSite__1 wow fadeInRight">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>
          </div>
        </div>
      </section>
     
      <section className="scSiteBP parallax">
        <div className="container" id="branding">
          <div className="scSite">
            <div className="scSite__1">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>

            <div className="scSite__2 wow fadeInRight">
              <h1>{t('branding')}</h1>

              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 brand-col-1">
                  <p>{t('branding_p1')}</p>
                  <p>{t('branding_p2')}</p>
                </div>

                <div className="col-md-7 col-lg-8">
                  <img src="videos/vido-branding-rduite-ezgif.com-crop.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scSiteBrand parallax">
        <div className="container" id="social">
          <div className="scSite">
            <div className="scSite__2 wow fadeInLeft">
              <h1>{t('social')}</h1>

              <div className="row justify-content-center  ">
                <div className="col-md-7 col-lg-7 vid-par">
                  <img src="videos/SOCIAL_animation-ezgif.com-crop.gif" alt="" />
                </div>

                <div className="col-md-5 col-lg-4 sect-par">
                  <p>{t('social_p1')}</p>
                  <p>{t('social_p2')}</p>
                </div>
              </div>
            </div>

            <div className="scSite__1 wow fadeInRight">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* Updated blog posts section */}
      <section id="blog-posts" className="parallax">
        <div className="container">
          <div className="blog-posts wow fadeInLeft">
            <h1>{t('project_life_cycle')}</h1>
            <br />
            <div className="row">
              {posts.map((post, index) => {
                const imageFile = imageMap[index] || 'default-image.jpg';
                return (
                  <div key={post.guid} className="col-6 col-md-4">
                    <div className="blog-post-card">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <div className="post-thumbnail-container">
                          <img
                            src={`/images/blogpics/${imageFile}`}
                            alt={post.title}
                            className="post-thumbnail"
                          />
                          <div className="overlay">
                            <h2>{truncateString(post.title, 50)}</h2>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;