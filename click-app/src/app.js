import React, {Component} from "react";
import Main from "./components/main";
import image from "./image.json";
import Images from "./components/images";

class App extends Component {
    state ={
        score: 0,
        img: image
    };
    clicked=id=>{
        let counter = 12;
        console.log(this.state.img);
        const newImg = this.state.img.filter(img => img.id !== id);
        this.setState({img: newImg});
        console.log(this.state.img);
        let count = this.state.img.length;
        console.log(count);
        if(counter === count){
            this.setState({ score: 0})
            alert("try again");
            this.setState({img: image});
            counter = 12;
        }
        else if(this.state.score !== 11){
            this.setState({ score: this.state.score + 1})
            counter--;
        }
        else{
            this.setState({ score: 0})
            alert("u win");
            this.setState({img: image});
            counter = 12;
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