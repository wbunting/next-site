import GitHubIcon from '../icons/github'
import Button from './button'

export default ({ login, text, ...props }) => (
  <Button invert color="#24292e" onClick={login} noHover {...props}>
    <style jsx>{`
      .icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
    `}</style>
    <span className="icon">
      <GitHubIcon color="white" />
    </span>{' '}
    {text || 'Login with GitHub'}
  </Button>
)
