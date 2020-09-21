import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changeButton() {
    const { clicks } = this.state;
    if (clicks < 4) {
      return 'cold';
    } else if (clicks < 7) {
      return 'cool';
    } else if (clicks < 10) {
      return 'meek';
    } else if (clicks < 13) {
      return 'warm';
    } else if (clicks < 16) {
      return 'hot';
    } else return 'nuclear';
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    const tempClass = this.changeButton();
    return (
      <button
        onClick={this.handleClick}
        className={`hot-button ${tempClass}`}>
        {this.props.label}
      </button>
    );
  }
}

export default HotButton;
