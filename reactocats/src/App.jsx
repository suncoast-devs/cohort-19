import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          <article>
            <figure>
              <a href="https://octodex.github.com//terracottocat/">
                <img
                  src="https://octodex.github.com//images/Terracottocat_Single.png"
                  width="400"
                  height="400"
                  alt="Terracottocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #149:
                <a href="https://octodex.github.com//terracottocat/">
                  <strong>Terracottocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/chubbmo">
                  <img
                    src="https://github.com/chubbmo.png"
                    width="24"
                    height="24"
                    alt="chubbmo"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//octogatos/">
                <img
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="400"
                  height="400"
                  alt="Octogatos"
                />
              </a>
            </figure>
            <ul>
              <li>
                #148:
                <a href="https://octodex.github.com//octogatos/">
                  <strong>Octogatos</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img
                    src="https://github.com/cameronfoxly.png"
                    width="24"
                    height="24"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//sentrytocat/">
                <img
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Sentrytocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #143:
                <a href="https://octodex.github.com//sentrytocat/">
                  <strong>Sentrytocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronmcefee">
                  <img
                    src="https://github.com/cameronmcefee.png"
                    width="24"
                    height="24"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//boxertocat/">
                <img
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Boxertocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #141:
                <a href="https://octodex.github.com//boxertocat/">
                  <strong>Boxertocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/rubyjazzy">
                  <img
                    src="https://github.com/rubyjazzy.png"
                    width="24"
                    height="24"
                    alt="rubyjazzy"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//suftocat/">
                <img
                  src="https://octodex.github.com//images/surftocat.png"
                  width="400"
                  height="400"
                  alt="Surftocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #140:
                <a href="https://octodex.github.com//suftocat/">
                  <strong>Surftocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/jeejkang">
                  <img
                    src="https://github.com/jeejkang.png"
                    width="24"
                    height="24"
                    alt="jeejkang"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//scubatocat/">
                <img
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="400"
                  height="400"
                  alt="Scubatocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #138:
                <a href="https://octodex.github.com//scubatocat/">
                  <strong>Scubatocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/cameronfoxly">
                  <img
                    src="https://github.com/cameronfoxly.png"
                    width="24"
                    height="24"
                    alt="cameronfoxly"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//dinotocat/">
                <img
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="400"
                  height="400"
                  alt="Dinotocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #130:
                <a href="https://octodex.github.com//dinotocat/">
                  <strong>Dinotocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/kimestoesta">
                  <img
                    src="https://github.com/kimestoesta.png"
                    width="24"
                    height="24"
                    alt="kimestoesta"
                  />
                </a>
                <a href="https://github.com/heyhayhay">
                  <img
                    src="https://github.com/heyhayhay.png"
                    width="24"
                    height="24"
                    alt="heyhayhay"
                  />
                </a>
              </li>
            </ul>
          </article>

          <article>
            <figure>
              <a href="https://octodex.github.com//spidertocat/">
                <img
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="400"
                  height="400"
                  alt="Spidertocat"
                />
              </a>
            </figure>
            <ul>
              <li>
                #88:
                <a href="https://octodex.github.com//spidertocat/">
                  <strong>Spidertocat</strong>
                </a>
              </li>
              <li>
                <a href="https://github.com/jeejkang">
                  <img
                    src="https://github.com/jeejkang.png"
                    width="24"
                    height="24"
                    alt="jeejkang"
                  />
                </a>
              </li>
            </ul>
          </article>
        </main>
        <Footer />
      </>
    )
  }
}

export default App
