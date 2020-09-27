import React, {Component} from 'react';
import './searchBar.css';

class SearhcBar extends Component {
    state={
        search:''

    }
    inputChanged(e){
       this.setState({
           search:e.target.value
       })
    }
    searchImage(){
       this.props.onSearchImage(this.state.search); // appdeki keyi burada yakaladık

    }
    //Enter tuşu ile arama yapmak için
    onKeyPress(e){
       if(e.key=== 'Enter'){
           this.searchImage()
       }
    }

    render() {
        return (
            <div>
                <div className="searchBar container">
                    <div className="ui icon input">
                        <input className="prompt"
                               type="text"
                               placeholder="Ara"
                               value={this.state.search} //state içindeki searcha tanımladıgını direk verir
                               onChange={this.inputChanged.bind(this)}
                               onKeyPress={this.onKeyPress.bind(this)}
                        />
                        <i className="search icon" />
                    </div>
                    <i className="inverted circular search link icon"
                       onClick={this.searchImage.bind(this)}
                    />
                    <div className="results"/>

                </div>
            </div>
        );
    }
}

export default SearhcBar;