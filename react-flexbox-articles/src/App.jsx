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

class OneArticle extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <a href="#">read more</a>
      </article>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <main>
          <OneArticle
            title="First Article"
            content="Bacon ipsum dolor amet ham hock capicola kevin, brisket t-bone pork chop meatball ground round shoulder ribeye bacon. Meatloaf ground round bacon turkey pork belly biltong andouille tenderloin buffalo jowl landjaeger fatback strip steak tongue. Corned beef fatback ground round buffalo, t-bone spare ribs chicken salami tri-tip prosciutto kielbasa beef ribs. Short ribs flank beef, andouille chuck pork belly pastrami turkey pork loin fatback salami. Nulla pork belly ball tip, lorem nostrud adipisicing pancetta consectetur beef. Pig sausage pastrami andouille. Bresaola ribeye short ribs sausage tri-tip landjaeger. Beef ribs pork shankle jerky sint shank eu corned beef aute deserunt. "
          />
          <OneArticle
            title="Second Article"
            content="Bacon ipsum dolor amet ham hock capicola kevin, brisket t-bone pork chop meatball ground round shoulder ribeye bacon. Meatloaf ground round bacon turkey pork belly biltong andouille tenderloin buffalo jowl landjaeger fatback strip steak tongue. Corned beef fatback ground round buffalo, t-bone spare ribs chicken salami tri-tip prosciutto kielbasa beef ribs. Short ribs flank beef, andouille chuck pork belly pastrami turkey pork loin fatback salami. Nulla pork belly ball tip, lorem nostrud adipisicing pancetta consectetur beef. Pig sausage pastrami andouille. Bresaola ribeye short ribs sausage tri-tip landjaeger. Beef ribs pork shankle jerky sint shank eu corned beef aute deserunt."
          />
          <OneArticle
            title="Spicy!!!!!"
            content="Spicy jalapeno bacon ipsum dolor amet ham turkey jowl turducken prosciutto filet mignon pig ground round capicola pork pork loin boudin biltong. Short loin tenderloin rump beef ribs brisket kielbasa cow andouille bresaola alcatra pork belly shoulder. Burgdoggen prosciutto doner cupim sausage kielbasa chuck pork belly strip steak meatball short loin. Picanha ribeye porchetta rump pork frankfurter. "
          />
          <OneArticle
            title="Welcome To React"
            content="Today we take our first steps into a larger world"
          />
          <OneArticle
            title="React is neat"
            content="Simple to learn, lifetime of mastery"
          />
        </main>
        <PageFooter />
      </>
    )
  }
}

export default App
