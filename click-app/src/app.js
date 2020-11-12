import React, {Component} from "react";
import Main from "./components/main";
import image from "./image.json";
import Images from "./components/images";

class App extends Component {
    state ={
        score: 0
    };
    clicked=id=>{
        this.setState({ score: this.state.score + 1})
    }
    render(){
        return (
            <div>
                <Main/>
                <p>Score: {this.state.score}</p>
                {image.map(image =>(
                    <Images 
                    clicked={this.clicked}
                    id={image.id}
                    src={image.src} 
                    />
                ))}
            </div>
          );
    }
  
}

export default App;