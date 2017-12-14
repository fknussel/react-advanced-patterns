import React from 'react';
import ReactDOM from 'react-dom';
import './toggle.css';

class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  };

  state = {
    on: false
  };

  toggle = () => {
    this.setState(
      prevState => ({ on: !prevState.on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    const { on } = this.state;

    return <Switch on={on} onClick={this.toggle} />;
  }
}

function App() {
  return <Toggle onToggle={on => console.log('toggle', on)} />;
}

function Switch({ on, className = '', ...props }) {
  return (
    <div className="toggle">
      <input className="toggle-input" type="checkbox" />
      <button
        className={`${className} toggle-btn ${
          on ? 'toggle-btn-on' : 'toggle-btn-off'
        }`}
        aria-expanded={on}
        {...props}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
