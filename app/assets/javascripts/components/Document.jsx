window.Document = class Header extends React.Component {
  constructor(props) {
    super(props);

    this.documentText = 'It was a dark and stormy night...'
  }

  render() {
    return <div className="documentContainer">
      <div
        className="document"
        contentEditable="true"
        suppressContentEditableWarning
      >
        { this.documentText }
      </div>
    </div>
  }
}
