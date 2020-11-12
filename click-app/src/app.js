import React, {Component} from "react";
import Main from "./components/main";
import image from "./image.json";
import Images from "./components/images";

class App extends Component {
    state ={
        score: 0
        
    };
    clicked=id=>{

        if(this.state.score !== 11){
            this.setState({ score: this.state.score + 1})
        }
        else{
            this.setState({ score: 0})
            alert("u win");
        }
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
                    name={image.name}
                    src={image.src} 
                    />
                ))}
            </div>
        );
    }
  
}

export default App;