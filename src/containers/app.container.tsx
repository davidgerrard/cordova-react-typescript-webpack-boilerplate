import React from 'react';

import DeviceDetails from '../components/device-details.component';

interface ApplicationInterface {
  isDeviceReady: boolean;
  hasError: boolean;
}

export default class App extends React.Component<{}, ApplicationInterface> {

  private isDeviceReady = false;
  private timerID: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isDeviceReady: false,
      hasError: false
    };
    this.onDeviceReady = this.onDeviceReady.bind(this);
    document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  onDeviceReady() {
    this.isDeviceReady = true;
  }

  componentDidCatch() {
    // Display error UI
    this.setState({ hasError: true });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    console.log('Checking if device is ready...');
    if (this.isDeviceReady) {
      this.setState(() => ({
        isDeviceReady: this.isDeviceReady
      }));
      clearInterval(this.timerID);
      console.log('Device is ready');
    }
  }

  render() {
    if (!this.state.isDeviceReady) {
      return <h1>Loading application...</h1>;
    } else if (this.state.hasError) {
      // Render any custom error UI
      return <h1>Error in application...</h1>;
    } else {
      return (
        <DeviceDetails />
      );
    }
  }
}
