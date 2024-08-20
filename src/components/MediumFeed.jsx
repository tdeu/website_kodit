import React, { useEffect, useState } from 'react';

const MediumFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0xkodit&count=10'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data.items);
            } catch (error) {
                console.error('Error fetching Medium posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="medium-feed">
            {posts.map((post, index) => (
                <div key={index} className="medium-post">
                    <h3><a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
                    <p>{new Date(post.pubDate).toLocaleDateString()}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.description.slice(0, 150) + '...' }} />
                </div>
            ))}
        </div>
    );
};

export default MediumFeed;