import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import { SkipNavLink } from '@reach/skip-nav';

import NextLogo from './logo';
import Container from './container';
import Popover from './popover';

import GitHubLogo from './icons/github';
import SpectrumLogo from './icons/spectrum';

import { links } from '../site-manifest';

function Navbar({ className, hideLogo, route, isMobile }) {
  if (isMobile) {
    return (
      <Container className={className} center>
        <h1 className="visually-hidden" aria-hidden="true">
          Next.js
        </h1>
        <nav className="expand f5">
          <style jsx>
            {`
              nav {
                position: relative;
                flex: 1;
                height: 96px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
              }
              nav .links {
                display: flex;
                align-items: center;
                z-index: 1;
              }
              nav .dropdown {
                flex: 1 0 100%;
                display: flex;
                margin: 0 -5px;
                text-align: left;
                // justify-content: flex-end;
                // justify-content: space-between;
                justify-content: space-around;
              }
              nav .links a {
                display: inline-block;
                // enlarge the clickable area
                padding: 5px 8px;
                color: inherit;
                text-decoration: none;
              }
              nav .links a.active {
                color: #0070f3;
              }
              nav .links a.selected {
                color: #0070f3;
                font-weight: 600;
              }
              nav .logo {
                font-size: 0;
                text-align: center;
                overflow: hidden;
              }
              nav .logo a {
                display: inline-block;
                padding-right: 4px;
              }
              nav .links .icons {
                display: flex;
                position: relative;
                align-items: center;
              }
              nav .links .icons a {
                position: relative;
                padding: 5px;
                line-height: 1;
                margin-right: 1rem;
              }
              nav .links .icons a .badge {
                position: absolute;
                display: inline-block;
                right: 0px;
                bottom: 4px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: #2bdb66;
                pointer-events: none;
              }
              nav .links .icons a.no-margin {
                margin-right: 0;
              }
            `}
          </style>
          <div className="logo">
            {!hideLogo && (
              <Link href="/">
                <a aria-label="Next.js">
                  <NextLogo />
                </a>
              </Link>
            )}
          </div>
          <div className="links">
            <div className="icons">
              <Link href="https://github.com/zeit/next.js">
                <a
                  aria-label="Next.js on GitHub"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHubLogo />
                </a>
              </Link>
              <Link href={links.spectrum}>
                <a
                  aria-label="Next.js on Spectrum"
                  target="_blank"
                  rel="noreferrer"
                  className="no-margin"
                >
                  <SpectrumLogo />
                  <span className="badge" />
                </a>
              </Link>
            </div>
          </div>
          <div className="links mute dropdown">
            <Link href="/#features" prefetch>
              <a
                className={classNames({
                  selected: route.startsWith('/features')
                })}
                title="Features"
              >
                Features
              </a>
            </Link>
            <Link href="/learn">
              <a
                className={classNames({
                  selected: route.startsWith('/learn')
                })}
                title="Learn"
              >
                Learn
              </a>
            </Link>
            <a
              href="/docs"
              className={classNames({
                selected: route.startsWith('/docs')
              })}
              title="Documentation"
            >
              Docs
            </a>
            <Link href="/showcase" prefetch>
              <a
                className={classNames({
                  selected: route.startsWith('/showcase')
                })}
                title="Showcase"
              >
                Showcase
              </a>
            </Link>
            <a
              href="/blog"
              className={classNames({
                selected: route.startsWith('/blog')
              })}
              title="Blog"
            >
              Blog
            </a>
            {
              // <Link href="/enterprise" prefetch><a className={classNames({ selected: route.startsWith('/enterprise') })} title='Enterprise'>Enterprise</a></Link>
            }
          </div>
        </nav>
      </Container>
    );
  }

  return (
    <Container className={className} center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Next.js
      </h1>
      <nav className="f-reset">
        <style jsx>
          {`
            nav {
              position: relative;
              flex: 1;
              height: 64px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            nav .links {
              display: flex;
              align-items: center;
              z-index: 1;
              pointer-events: auto;
            }
            nav .links a {
              display: inline-block;
              // enlarge the clickable area
              padding: 5px;
              margin-left: -5px;
              margin-right: 2rem;
              text-decoration: none;
              transition: color 0.2s ease;
            }
            nav .links a:hover {
              color: #111;
            }
            nav .links a.selected {
              color: #0070f3;
              font-weight: 600;
            }
            nav .logo {
              position: absolute;
              width: 100%;
              font-size: 0;
              text-align: center;
              overflow: hidden;
              transition: all 0.2s ease;
              // visibility: hidden;
              pointer-events: none;
              // transform: translate3d(0, 30%, 0);
              opacity: 0;
            }
            :global(.active) nav .logo,
            :global(.show-logo) nav .logo {
              pointer-events: auto;
              // transform: translate3d(0, 0, 0);
              opacity: 1;
            }
            nav .logo a {
              display: inline-block;
            }
            nav .links .icons {
              display: flex;
              align-items: center;
            }
            nav .links .icons a {
              position: relative;
              line-height: 1;
              margin-right: 1rem;
            }
            nav .links .icons a .badge {
              position: absolute;
              display: inline-block;
              right: 0px;
              bottom: 4px;
              width: 8px;
              height: 8px;
              border-radius: 4px;
              background-color: #2bdb66;
              pointer-events: none;
            }
            nav .links .icons a.no-margin {
              margin-right: 0;
            }
            // CSS only media query for mobile + SSR
            @media screen and (max-width: 640px) {
              .logo {
                display: none;
              }
            }
          `}
        </style>
        <div className="links">
          <Link href="/#features" prefetch>
            <a
              className={classNames('mute', {
                selected: route.startsWith('/features')
              })}
              title="Features"
            >
              Features
            </a>
          </Link>
          <Link href="/learn">
            <a
              className={classNames('mute', {
                selected: route.startsWith('/learn')
              })}
              title="Learn"
            >
              Learn
            </a>
          </Link>
          <a
            href="/docs"
            className={classNames('mute', {
              selected: route.startsWith('/docs')
            })}
            title="Documentation"
          >
            Docs
          </a>
        </div>
        {!hideLogo && (
          <div className="logo">
            <Link href="/" prefetch>
              <a aria-label="Next.js">
                <NextLogo />
              </a>
            </Link>
          </div>
        )}
        <div className="links">
          <Link href="/showcase" prefetch>
            <a
              className={classNames('mute', {
                selected: route.startsWith('/showcase')
              })}
              title="Showcase"
            >
              Showcase
            </a>
          </Link>
          <a
            href="/blog"
            className={classNames('mute', {
              selected: route.startsWith('/blog')
            })}
          >
            Blog
          </a>
          {
            // <Link href="/enterprise" prefetch><a className={classNames('mute', { selected: route.startsWith('/enterprise') })}>Enterprise</a></Link>
          }
          <div className="icons">
            <Link href="https://github.com/zeit/next.js">
              <a
                aria-label="Next.js on GitHub"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubLogo />
              </a>
            </Link>
            <Popover
              content={
                <div style={{ whiteSpace: 'nowrap' }}>
                  Join <strong className="fw6">Next.js</strong> on{' '}
                  <strong className="fw6">Spectrum</strong>
                </div>
              }
            >
              <Link href={links.spectrum}>
                <a
                  aria-label="Next.js on Spectrum"
                  rel="noreferrer"
                  target="_blank"
                  className="no-margin"
                >
                  <SpectrumLogo />
                  <span className="badge" />
                </a>
              </Link>
            </Popover>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default withRouter(({ router, hideLogo = false }) => {
  const { route } = router;

  const hideLogoDesktop =
    typeof hideLogo.desktop === 'boolean'
      ? hideLogo.desktop
      : typeof hideLogo === 'boolean'
      ? hideLogo
      : false;
  const hideLogoMobile =
    typeof hideLogo.mobile === 'boolean'
      ? hideLogo.mobile
      : typeof hideLogo === 'boolean'
      ? hideLogo
      : false;

  return (
    <>
      <Navbar
        className="navbar-desktop"
        route={route}
        hideLogo={hideLogoDesktop}
        isMobile={false}
      />
      <Navbar
        className="navbar-mobile"
        route={route}
        hideLogo={hideLogoMobile}
        isMobile
      />
      <style jsx global>
        {`
          @media screen and (max-width: 640px) {
            .navbar-desktop {
              display: none;
            }
          }
          @media screen and (min-width: 641px) {
            .navbar-mobile {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
});
