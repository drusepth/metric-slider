window.Header = class Header extends React.Component {
  targetReadingLevel() {
    console.log(this.refs);
    return 5;
  }

  render() {
    return <div className="header">
      <input type="range" min="1" max="12" id="readingLevel" />
      { this.targetReadingLevel() }
    </div>;
  }
}
