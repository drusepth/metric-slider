window.Header = class Header extends React.Component {
  constructor(props) {
    super(props);
    this.targetReadingLevel = 6;

    this.changeReadingLevel = this.changeReadingLevel.bind(this);
  }

  changeReadingLevel(event) {
    this.targetReadingLevel = event.target.value;

    // hack because wtf redrawing
    this.targetReadingLevelDisplay.innerText = this.targetReadingLevel;
  }

  render() {
    return <div className="header">
      <span
        ref={(span) => { this.targetReadingLevelDisplay = span; }}
        className="readingLevelDisplay"
      >
        { this.targetReadingLevel }
      </span>

      <input
        type="range"
        min="1"
        max="12"
        onChange={ this.changeReadingLevel }
        defaultValue="{ this.targetReadingLevel }"
      />
    </div>;
  }
}
