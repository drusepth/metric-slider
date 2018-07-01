window.App = class App extends React.Component {
  fnDisplayReadingLevel(readingLevel) {
    console.log("Displaying #{readingLevel}")
  }

  render() {
    return <div className="app">
      <window.Header />
      <window.Document fnDisplayReadingLevel={ this.fnDisplayCurrentReadingLevel } />
    </div>;
  }
}
