import "./AboutCard.css"
import linkedinIcon from "../../assets/linkedin.png"

function AboutCard({ member }) {
    const {fullName, position, profilePic, linkedinUrl } = member;

  return (
    <article className="staff-member-card">
      <img src={profilePic} alt="staff member profile pic" className="staff-pic"/>
      <h2>{fullName}</h2>
      <p>{position}</p>
      <a href={linkedinUrl} target="_blank" className="linkedin-link"><img src={linkedinIcon} alt="linkedin button" className="linkedin-link"/></a>
    </article>
  );
}

export default AboutCard;
