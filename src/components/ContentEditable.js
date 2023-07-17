import React from "react";

class ContentEditable extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.target.innerHTML);
    }
  };

  render() {
    const { tagName, html, ...rest } = this.props;
    return React.createElement(
      tagName || "div",
      {
        ...rest,
        ref: this.contentEditable,
        contentEditable: true,
        dangerouslySetInnerHTML: { __html: html },
        onInput: this.handleChange,
      },
      this.props.children
    );
  }
}

export default ContentEditable;
