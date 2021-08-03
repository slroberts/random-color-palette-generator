import React from 'react';
import Header from './Header';
import ColorCard from './ColorCard';
import Button from './Button';

class App extends React.Component {
  state = {
    colors: [],
  };

  fetchColors = () => {
    (async () => {
      const data = await fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
        }),
      })
        .then((result) => result.json())
        .catch(console.log);

      this.setState({ colors: data.result });
    })();
  };

  componentDidMount() {
    this.fetchColors();

    window.addEventListener('keydown', this.handleKeyDown);
  }

  generateColors = () => {
    this.fetchColors();
  };

  handleKeyDown = (event) => {
    if (event.key === ' ') {
      this.fetchColors();
    }
  };

  render() {
    return (
      <div className='md:container md:mx-auto p-4'>
        <Header />

        <ColorCard colors={this.state.colors} />

        <Button generateColors={this.generateColors} />
      </div>
    );
  }
}

export default App;
