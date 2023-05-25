import profileImage from '../assets/matthewKlemmerSq.jpg'
import linkedIn from '../assets/linkedin.png'
import mail from '../assets/mail.png'

function Header() {
  return (
    <header>
      <img className="profile--image" src={profileImage} />
      <h2 className="name--title">Matthew Klemmer</h2>
      <h4 className="job--title">Software Engineer</h4>
      <span className="email--title">theKlemmerCode@outlook.com</span>
      <div className="header--contacts">
        <a href = "mailto: theklemmercode@outlook.com">
          <div className="contacts--button">
            <img src={mail}></img>
            <span>Email</span>
          </div>
        </a>
        <a href = "https://www.linkedin.com/in/matthew-klemmer/">
          <div className="contacts--button linkedin">
            <img src={linkedIn}></img>
            <span>LinkedIn</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
