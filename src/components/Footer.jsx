import webIcon from '../assets/web.png'
import twitterIcon from '../assets/twitterIcon.png'
import gitHubIcon from '../assets/githubIcon.png'

function Footer() {
  return (
    <footer>
      <ul>
        <a href="https://twitter.com/TheKlemmerCode"><img src={twitterIcon} /></a>
        <a href="https://theklemmercode.com"><img src={webIcon} /></a>
        <a href="https://github.com/TheKlemmerCode"><img src={gitHubIcon} /></a>
      </ul>
    </footer>
  )
}

export default Footer
