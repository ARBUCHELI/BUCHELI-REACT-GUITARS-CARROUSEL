import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <img style={{border: 'solid #80ced6 5px'}}src={src} alt={''} className='rounded-corners'/>
      </div>
    );
  }
}