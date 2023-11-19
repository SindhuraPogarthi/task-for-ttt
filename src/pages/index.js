import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';

export default function Home() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/userData');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

  }, []);

  return (
    <>
      <div className={styles.container}>

        {/* Cover Image */}
        <div className={styles.coverContainer}>
          <img
            className={styles.cover}
            src={data?.coverPicture}
            alt='Cover Picture'
          />
        </div>

        {/* Profile Picture */}
        <img
          className={styles.profilePicture}
          src={data?.profilePicture}
        />

        {/* Person's Details */}
        <div className={styles.personDetails}>
          <div className={styles.personName}>
            {data.username} {data.diamondBadge && '💎'} {data.verified && '✅'}
          </div>

          <div className={styles.personStatsContainer}>
            <div className={styles.personStats}>
              <div className={styles.personStatsBox}>
                {data.followers}
              </div>
              <span>followers</span>
            </div>

            <div className={styles.personStats}>
              <div className={styles.personStatsBox}>
                {data.following}
              </div>
              <span>following</span>
            </div>
          </div>
        </div>

        <div className={styles.personBio}>
          <span>{data.bio}</span>
          <br />
          
          {data.otherLinks && data.otherLinks.map((link, index) => (
            <div key={index}>
              <a href={link}>{link}</a>
              <br />
            </div>
          ))}
        
          <span>⭐ {data.totalStars}</span>
          <span>👍 {data.totalLikes}</span>
          <span>👁️ {data.totalViews}</span>
          <span>💗 {data.totalhearts}</span>

        </div>

        <div className={styles.postsBox}>
          {data.totalPosts} Posts
        </div>
        <hr/>
        {/* <div className={styles.hrStyles}>
          <hr />
        </div> */}

        <div className={styles.posts}>
          {console.log(data.posts)}
          {data.posts && data.posts.map((post, key) => {

            const dateObject = new Date(post.date);
            const options = { month: 'long', day: 'numeric' };
            const formattedDate = dateObject.toLocaleString('en-US', options);

            return (
              <div key={key} className={styles.post}>
                <div className={styles.title}>
                  <span cla>{post.title}</span>
                  <span>👍</span>
                </div>

                <div className={styles.content}>
                  {post.content}
                </div>

                <div className={styles.postDetails}>
                  <span>
                    <span className={styles.postInfo}>{post.category} </span>
                    <span>by {data.username}</span>
                  </span>
                  <span className={styles.details} style={{ color: 'grey' }}>
                    {formattedDate} · {post.read} min Read · {post.views} views
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}