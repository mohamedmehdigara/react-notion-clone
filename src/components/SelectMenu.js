import React from "react";

const MENU_HEIGHT = 150;

const allowedTags = [
  {
    id: "page-title",
    tag: "h1",
    label: "Page Title",
  },
  {
    id: "heading",
    tag: "h2",
    label: "Heading",
  },
  {
    id: "subheading",
    tag: "h3",
    label: "Subheading",
  },
  {
    id: "paragraph",
    tag: "p",
    label: "Paragraph",
  },
];

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.state = {
      command: "",
      items: allowedTags,
      selectedItem: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const command = this.state.command;
    if (prevState.command !== command) {
      const items = allowedTags.filter((tag) =>
        tag.label.toLowerCase().startsWith(command.toLowerCase())
      );
      this.setState({ items: items });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler(e) {
    const items = this.state.items;
    const selected = this.state.selectedItem;
    const command = this.state.command;

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (items[selected]) {
          this.props.onSelect(items[selected].tag);
        }
        break;
      case "Backspace":
        if (!command) this.props.close();
        this.setState({ command: command.substring(0, command.length - 1) });
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevSelected =
          selected === 0 ? items.length - 1 : selected - 1;
        this.setState({ selectedItem: prevSelected });
        break;
      case "ArrowDown":
      case "Tab":
        e.preventDefault();
        const nextSelected =
          selected === items.length - 1 ? 0 : selected + 1;
        this.setState({ selectedItem: nextSelected });
        break;
      default:
        this.setState({ command: this.state.command + e.key });
        break;
    }
  }

  render() {
    const { x, y } = this.props.position || { x: 0, y: 0 };
    const positionAttributes = { top: y - MENU_HEIGHT, left: x };

    return (
      <div className="SelectMenu" style={positionAttributes}>
        <div className="Items">
          {this.state.items.map((item, key) => {
            const selectedItem = this.state.selectedItem;
            const isSelected = this.state.items.indexOf(item) === selectedItem;
            return (
              <div
                className={isSelected ? "Selected" : null}
                key={key}
                role="button"
                tabIndex="0"
                onClick={() => this.props.onSelect(item.tag)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SelectMenu;
