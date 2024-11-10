import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([
    {
      title: 'Comment le Nombre 48 a Rendu l IA Accessible a Tous',
      link: 'https://medium.com/@0xkodit/comment-le-nombre-48-a-rendu-lia-accessible-%C3%A0-tous-a65d8d45a9f7',
      image: '48COVER.jpeg',
      guid: '48-article',
      author: 'Kodit',
    },
    {
      title: 'Detection de masques africains par Machine Learning : vers la préservation numérique du patrimoine',
      link: 'https://medium.com/@0xkodit/d%C3%A9tection-de-masques-africains-par-machine-learning-vers-la-pr%C3%A9servation-num%C3%A9rique-du-patrimoine-8a9840efadd1',
      image: 'mask1.jpeg',
      guid: 'masks-article',
      author: 'Kodit',
    },
    {
      title: 'Theorie de la Tache de Cafe : Une Analogie Simple pour Comprendre l IA Générative',
      link: 'https://medium.com/@0xkodit/th%C3%A9orie-de-la-tache-de-caf%C3%A9-une-analogie-simple-pour-comprendre-lia-g%C3%A9n%C3%A9rative-41583c86b203',
      image: 'tache.jpeg',
      guid: 'coffee-article',
      author: 'Kodit',
    }
  ]);

  const imageMap = [
    '48COVER.jpeg',
    'mask1.jpeg',
    'tache.jpeg'
  ];

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