import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Youtube() {
  const [youtubeVideo, setYouTubeVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBbSf1uS8OOxtbW_B7DvmpATzKvkhbUaaY"
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideo(data.items);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1 className="fw-bold text-center my-5">Latest Videos</h1>
        <div
          className="mx-auto  row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4 mx-auto "
          style={{ width: "75%" }}
        >
          {youtubeVideo?.map((video, i) => {
            let vidId = video.id.videoId;
            let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div className="col" key={i}>
                <div className="card">
                  <Link to={videoLink}>
                    <img
                      src={video.snippet.thumbnails.high.url}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body ">
                    <p className="card-text m-1">
                      <Link
                        to={videoLink}
                        className="text-decoration-none text-black"
                      >
                        {video.snippet.title}
                      </Link>
                    </p>
                    <p className="card-title fw-bolder py-0">
                      {video.snippet.channelTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Youtube;
