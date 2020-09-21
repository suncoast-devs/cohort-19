import React, { Component } from 'react'

class PageHeader extends Component {
  render() {
    return (
      <header>
        <h1>responsive flexbox article listing</h1>
        <p>
          Flexbox is an amazingly powerful layout tool. In this example I have
          created a responsive grid of articles that increased the amount of
          visible articles on the page at larger resolutions.
        </p>
      </header>
    )
  }
}

class PageFooter extends Component {
  render() {
    return (
      <footer>
        <p>
          Made with
          <svg viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
          </svg>
          in St Petersburg, Florida.
        </p>
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <main>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Bacon ipsum dolor amet ham hock capicola kevin, brisket t-bone
              pork chop meatball ground round shoulder ribeye bacon. Meatloaf
              ground round bacon turkey pork belly biltong andouille tenderloin
              buffalo jowl landjaeger fatback strip steak tongue. Corned beef
              fatback ground round buffalo, t-bone spare ribs chicken salami
              tri-tip prosciutto kielbasa beef ribs. Short ribs flank beef,
              andouille chuck pork belly pastrami turkey pork loin fatback
              salami. Nulla pork belly ball tip, lorem nostrud adipisicing
              pancetta consectetur beef. Pig sausage pastrami andouille.
              Bresaola ribeye short ribs sausage tri-tip landjaeger. Beef ribs
              pork shankle jerky sint shank eu corned beef aute deserunt.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Bacon ipsum dolor amet capicola chicken shank alcatra dolore
              frankfurter minim aute. Commodo in proident ut consectetur spare
              ribs ball tip frankfurter doner kielbasa meatloaf ex short ribs
              exercitation chuck. Pancetta in ham boudin andouille jerky id
              officia cupim aliquip laborum incididunt. In mollit alcatra velit
              sunt sirloin exercitation voluptate kevin enim in. Flank laborum
              salami ullamco filet mignon quis duis pig.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet ham turkey jowl turducken
              prosciutto filet mignon pig ground round capicola pork pork loin
              boudin biltong. Short loin tenderloin rump beef ribs brisket
              kielbasa cow andouille bresaola alcatra pork belly shoulder.
              Burgdoggen prosciutto doner cupim sausage kielbasa chuck pork
              belly strip steak meatball short loin. Picanha ribeye porchetta
              rump pork frankfurter.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Bacon ipsum dolor amet ribeye short loin capicola, spare ribs
              swine hamburger boudin cow tenderloin landjaeger short ribs. Cupim
              meatball venison shoulder bresaola pig sausage chicken. Ham cupim
              jowl, short loin short ribs pork belly chicken sausage kevin
              prosciutto alcatra corned beef t-bone andouille. Cupim leberkas
              fatback tail short ribs pork chop pork filet mignon tenderloin pig
              pork loin strip steak chuck. Meatball shankle chuck doner alcatra
              ground round cupim beef ribs ham hock frankfurter.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Spicy jalapeno bacon ipsum dolor amet irure excepteur dolore esse
              shoulder. Ground round nisi cow, hamburger t-bone in salami corned
              beef alcatra burgdoggen chuck ribeye aute. Sunt consectetur
              chicken, corned beef shoulder drumstick veniam meatball boudin
              rump pork id.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Short ribs pastrami meatloaf sirloin biltong fatback brisket short
              loin chicken porchetta rump turducken jowl. T-bone cupim beef ribs
              drumstick short ribs sausage shankle venison ham andouille
              hamburger spare ribs meatloaf ribeye. Rump sausage tenderloin
              short loin boudin tail, ball tip landjaeger pork spare ribs t-bone
              buffalo ham venison. Biltong picanha leberkas tenderloin.
              Drumstick ham hock flank cupim capicola shoulder, buffalo strip
              steak.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Bacon ground round tongue swine, frankfurter beef ribs drumstick
              spare ribs picanha chuck. Fatback hamburger cow landjaeger,
              leberkas meatball burgdoggen frankfurter t-bone andouille turkey
              boudin. Pork loin capicola pork belly pancetta meatball, shoulder
              bacon short loin sirloin turkey ground round leberkas shank. Filet
              mignon tail ball tip hamburger, pork chop pork drumstick. Picanha
              short loin pork belly drumstick sirloin, cow beef rump tri-tip
              fatback ground round short ribs.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Sirloin pork shoulder chuck tri-tip meatball. Venison chuck corned
              beef, fatback shank kielbasa turkey cupim tail swine picanha. Ham
              tenderloin ham hock swine venison, spare ribs short loin pig strip
              steak boudin tongue jowl kevin drumstick. Beef ribs spare ribs
              hamburger rump jowl meatloaf shankle ground round strip steak
              tongue kielbasa drumstick doner jerky. Ball tip sirloin
              burgdoggen.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Landjaeger flank tri-tip, ball tip chicken corned beef rump jerky
              buffalo fatback sirloin picanha tail beef. Venison leberkas flank
              jowl. Salami tri-tip bacon burgdoggen bresaola doner cupim flank
              shank landjaeger pancetta leberkas brisket. Chuck spare ribs
              tenderloin, capicola jowl picanha sausage bresaola beef strip
              steak porchetta sirloin. Prosciutto spare ribs biltong shoulder,
              pork belly rump picanha boudin porchetta shankle drumstick tri-tip
              buffalo bacon ribeye.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Ut shankle turkey sausage velit, chicken leberkas. Laboris chicken
              non swine strip steak pork chop. Boudin hamburger qui, tempor
              chicken in bresaola do culpa ad ball tip dolore shankle jowl. Beef
              ribs pancetta irure, tenderloin buffalo beef qui alcatra flank
              kevin corned beef. Doner ad short loin pork loin ut.
            </p>
            <a href="#">read more</a>
          </article>
          <article>
            <h2>Article Title Here</h2>
            <p>
              Sirloin ground round picanha, pastrami fatback tri-tip turducken
              buffalo ribeye pig deserunt drumstick pariatur beef ribs. Ipsum
              cupidatat proident pork chop pork, landjaeger in ball tip picanha
              drumstick. Id sunt jowl, sint eu ut turkey shankle short loin
              mollit do. Kielbasa laborum nisi boudin culpa ham enim turducken
              dolore leberkas velit eu. In beef officia, adipisicing consequat
              picanha leberkas cow esse in strip steak tail pork aute. Bacon
              aliqua pork belly quis, velit nostrud fatback incididunt.
            </p>
            <a href="#">read more</a>
          </article>
        </main>
        <PageFooter />
      </>
    )
  }
}

export default App
