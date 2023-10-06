import React, { Component } from 'react'

export class Card2 extends Component {
    constructor(){
        super();
        this.state ={
            SecS : 0,
            MinS : 0,
            HourS : 0
        };
        this.CounterFn = () => {
          this.setState(() => ({ SecS: this.state.SecS + 1}));
          let sec = this.state.SecS;
          let min = this.state.MinS;
          if (sec === 60){
            this.setState(() => ({ MinS: this.state.MinS + 1}))
            this.setState(() => ({ SecS: 0}))
          }
          else if (min === 60){
            this.setState(() => ({ HourS: this.state.HourS + 1}))
            this.setState(() => ({ MinS: 0}))
          }
        };
      }
        
    componentWillMount(){
        setInterval(()=>{this.CounterFn()},1000)
      }

  render() {
    return (
      <div>
          <div className='timer-container'>
            <h3 className='timer'>{this.state.HourS} : Hours</h3>
            <h3 className='timer'>{this.state.MinS} : Minute</h3>
            <h3 className='timer'>{this.state.SecS} : Second</h3>
          </div>
          <div className='test'>
              <div className='card'>
                    <img src={this.props.img} alt="" />
                    <h1>{this.props.name}</h1>
                  <div className='cardBody'>
                      <h3>Profession : <span>{this.props.profession}</span></h3>
                      <h3>Bio : <span>{this.props.bio}</span></h3>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Card2