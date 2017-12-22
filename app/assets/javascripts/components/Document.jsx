window.Document = class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="documentContainer">
      <div
        className="document"
        contentEditable="true"
      />

    </div>
  }
}
