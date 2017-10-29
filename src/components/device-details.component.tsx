import React from 'react';

interface MyState {
  deviceData: Device;
}

interface Device { [key: string]: any; }

export default class DeviceDetails extends React.Component<{}, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {
      deviceData: device
    };
  }

  render() {
    let deviceInformation = null;
    if (this.state.deviceData) {
      deviceInformation = Object.keys(this.state.deviceData).map(key =>
        <div>{key} - {this.state.deviceData[key]}</div>
      );

    }

    return (
      <div>
        <h1>Device Information</h1>
        {deviceInformation}
      </div>
    );
  }
}
