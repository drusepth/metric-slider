window.Document = class Header extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    window.f = this.fnDisplayReadingLevel = props.fnDisplayReadingLevel.bind(this);
  }

  documentUpdateCallback(event) {
    var newDocumentText = event.target.innerText;
    var currentReadability = Readability.grade(newDocumentText);

    console.log(newDocumentText);
    console.log(currentReadability);
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
