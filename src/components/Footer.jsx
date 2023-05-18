import instagramIcon from '../assets/instagramIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import twitterIcon from '../assets/twitterIcon.png'
import gitHubIcon from '../assets/githubIcon.png'

function Footer() {
  return (
    <footer>
      <ul>
        <a href=""><img src={twitterIcon} /></a>
        <a href=""><img src={facebookIcon} /></a>
        <a href=""><img src={instagramIcon} /></a>
        <a href=""><img src={gitHubIcon} /></a>
      </ul>
    </footer>
  )
}

export default Footer
