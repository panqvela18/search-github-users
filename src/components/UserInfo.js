import React from "react";
import dayjs from "dayjs";
import UserStats from "./UserStats";
import AdditionalInfo from "./AdditionalInfo";
import location_icon from "../images/icon-location.svg";
import website_icon from "../images/icon-website.svg";
import twitter_icon from "../images/icon-twitter.svg";
import company_icon from "../images/icon-company.svg";
import "./UserInfo.css";

export default function UserInfo({ userData }) {
  const joinData = (unformateDate) => {
    const date = dayjs(unformateDate);
    return `Joined ${date.format("DD MMM YYYY")}`;
  };

  return userData == null ? (
    <></>
  ) : (
    <div className="user-info-container">
      <img className="user-logo-desktop" src={userData.avatar_url} />
      <div className="user-desktop">
        <div className="user-avatar-container">
          <img className="user-logo" src={userData.avatar_url} />
          <div className="user-info-short">
            <div>
              <h1>{userData.name}</h1>
              <h3>{`@${userData.login}`}</h3>
            </div>
            <h2>{joinData(userData.created_at)}</h2>
          </div>
        </div>
        <p className="about-user">
          {userData.bio == null ? "This profile has no bio" : userData.bio}
        </p>

        <UserStats
          repos={userData.public_repos}
          followers={userData.followers}
          following={userData.following}
        />
        <div className="additional-info-container">
          <div className="additional-info-left">
            {userData.location == null ? (
              <AdditionalInfo
                logo={location_icon}
                info={"Not Available"}
                visibility={"unavailable"}
              />
            ) : (
              <AdditionalInfo logo={location_icon} info={userData.location} />
            )}
            {userData.blog == "" ? (
              <AdditionalInfo
                logo={website_icon}
                info={"Not Available"}
                visibility={"unavailable"}
              />
            ) : (
              <AdditionalInfo
                logo={website_icon}
                info={
                  <a
                    className="website-link"
                    target={"_blank"}
                    href={userData.blog}
                  >
                    {userData.blog}
                  </a>
                }
              />
            )}
          </div>
          <div className="additional-info-right">
            {userData.twitter_username == null ? (
              <AdditionalInfo
                logo={twitter_icon}
                info={"Not Available"}
                visibility={"unavailable"}
              />
            ) : (
              <AdditionalInfo
                logo={twitter_icon}
                info={userData.twitter_username}
              />
            )}
            {userData.company == null ? (
              <AdditionalInfo
                logo={company_icon}
                info={"Not Available"}
                visibility={"unavailable"}
              />
            ) : (
              <AdditionalInfo logo={company_icon} info={userData.company} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
