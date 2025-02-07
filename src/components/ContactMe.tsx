import React from "react";

function ContactMe() {
  const socialMediaData = [
    {
      name: "GitHub",
      logo: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      link: "https://github.com/andylieou",
    },
    {
      name: "Twitter",
      logo: "https://www.phoronix.net/image.php?id=2023&image=twitter_x",
      link: "https://twitter.com/andylieou",
    },
    {
      name: "LinkedIn",
      logo: "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png",
      link: "http://www.linkedin.com/in/andy-lieou-165a85268",
    },
    {
        name: "Gmail",
        logo: "https://openclipart.org/image/800px/216530",
        link: "mailto:andylieou@gmail.com",
      },
  ];
  return (
    <>
      <div className="social-media-links">
        {socialMediaData.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={platform.logo}
              alt={`${platform.name} Logo`}
            />
          </a>
        ))}
      </div>
    </>
  );
}

export default ContactMe;
