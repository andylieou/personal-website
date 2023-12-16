import React from "react";

function ContactMe() {
  const socialMediaData = [
    {
      name: "GitHub",
      logo: "github-logo.png",
      link: "https://github.com/andylieou",
    },
    {
      name: "Twitter",
      logo: "twitter-logo.png",
      link: "https://twitter.com/andylieou",
    },
    {
      name: "LinkedIn",
      logo: "linkedin-logo.png",
      link: "http://www.linkedin.com/in/andy-lieou-165a85268",
    },
    {
        name: "Gmail",
        logo: "gmail-logo.png",
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
              src={`src/components/images/social-logos/${platform.logo}`}
              alt={`${platform.name} Logo`}
            />
          </a>
        ))}
      </div>
    </>
  );
}

export default ContactMe;
