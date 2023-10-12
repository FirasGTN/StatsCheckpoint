import React,{Component} from 'react';
import './App.css';
import Card2 from './components/Card2';

class App extends Component{
  state = {
    fullName: "Travis Fimmel",
    Bio: "Travis Fimmel is an Australian actor and former model. He is known for his role as Ragnar Lothbrok in the History Channel television series Vikings, and as Anduin Lothar in the live-action adaptation of Warcraft. He also starred in the HBO Max science fiction series Raised by Wolves.",
    imgSrc: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQsjVanobwHKR1NJB68CBf38PnLqL-baltyB_ZlcpF7VXEpUUeCuL9AU-uJOrJCCN3Ss3FwoXm5D6gWvVU",
    profession : "Actor and former model",
    show : false,
    counter : 0
  };
  toggleShow = () => {
    this.setState(() => ({ show: !this.state.show }));
  };
  


  render() {
    const { show,imgSrc,fullName,Bio,profession} = this.state;
    return (
      <div className='body' >
        <div className='bt'>
        <button onClick={this.toggleShow}> <h4> Toggle Profile </h4></button>
        </div>
        <div>
        {show && (
          <Card2 img = {imgSrc} name ={fullName} bio = {Bio} profession = {profession} />
        )}
        </div>
      </div>
    );
  }
}

export default App;
