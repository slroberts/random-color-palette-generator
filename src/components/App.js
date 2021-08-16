import React from 'react';
import axios from 'axios';

import Header from './Header';
import ColorCard from './ColorCard';
import Button from './Button';
import Prompt from './Prompt';

class App extends React.Component {
  state = {
    colors: [],
  };

  fetchColors = async () => {
    const res = await axios({
      method: 'POST',
      url: ' https://cors-everywhere.herokuapp.com/http://colormind.io/api/',
      data: JSON.stringify({
        model: 'default',
      }),
    })
      .then((res) => {
        this.setState({ colors: res.data.result });
      })
      .catch((err) => {
        console.log(err);
      });

    return res;
  };

  componentDidMount() {
    this.fetchColors();

    window.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        this.fetchColors();
      }
    });
  }

  render() {
    return (
      <div className='md:container md:mx-auto p-4'>
        <Header />

        <ColorCard colors={this.state.colors} />

        <Button generatePalette={this.fetchColors} />

        <Prompt
          classes='text-center mt-6'
          message={`Or just press the "Spacebar" to generate new palettes.`}
        />

        <Prompt
          classes='mt-12 md:w-4/12 w-full flex justify-center px-8 py-3 text-base text-center rounded-full text-black bg-white md:py-4 md:text-sm m-auto mb-40 border border-gray-200'
          message='Click to copy individual color'
        />
      </div>
    );
  }
}

export default App;
