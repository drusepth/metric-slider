window.Document = class Header extends React.Component {
  constructor(props) {
    super(props);

    this.documentText = 'It was a dark and stormy night...'
  }

  documentUpdateCallback(event) {
    var newDocumentText = event.target.innerText;

    console.log(newDocumentText);
  }

  render() {
    return <div className="documentContainer">
      <div
        className="document"
        contentEditable="true"
        suppressContentEditableWarning
        onBlur={ this.documentUpdateCallback }
      >
        { this.documentText }
      </div>
      <input type="button" value="Update" />
    </div>
  }
}
