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
        <div className="contacts--button">
          <img src={mail}></img>
          <span>Email</span>
        </div>
        <div className="contacts--button linkedin">
          <img src={linkedIn}></img>
          <span>LinkedIn</span>
        </div>
      </div>
    </header>
  )
}

export default Header
