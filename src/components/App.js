import React,{Component} from 'react';
import SearhcBar from './searchBar/searhcBar';
import axios from 'axios';
import ImageList from "./image/imageList";


class App extends Component {
    state={
        images:[]
    }


    onSearchImage=async(search)=>{

     const result= await  axios.get('https://api.unsplash.com/search/photos',{
            params:{
                    query:search
            },
            headers:{
                Authorization:'Client-ID lBWTrP_2FN0byxhox8cDeyTXQmW83jT9ROsAE20HRLE'
            }
        })
        console.log(result.data.results)
        this.setState({
            images:result.data.results
        });
    }
    render(){
        return (
            <div className="searchBar-container">
                <SearhcBar onSearchImage={this.onSearchImage} />
                <ImageList images={this.state.images}/>

            </div>
        );
    }
}

export default App;
