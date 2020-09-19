import React from "react";
import newsStyle from "../styles/news.module.scss";
import newsLinks from "../data/news.json";

class News extends React.Component {
    
    constructor(props){
        super();
        this.state = {
            start: 0,
            stop : 10,
            number: 1,
            data: newsLinks.slice(0, 10)
        }
        this.page_size = 10;
        this.next_page = this.next_page.bind(this);
        this.previous = this.previous.bind(this);
    }


    next_page = () =>{
     if(this.state.start+this.page_size<newsLinks.length){
        this.setState((prevState)=>{
            return{
                ...prevState,
                start: prevState.start+this.page_size,
                stop: prevState.stop+this.page_size,
                number: prevState.number+1,
                data: newsLinks.slice(prevState.start+this.page_size, prevState.stop+this.page_size)
            }
        })
        }
        else{
            console.log(this.state.stop, this.page_size, newsLinks.length)
        }
    }
    
    previous = () =>{
        if(this.state.stop-this.page_size>0){
            this.setState((prevState)=>{
                return{
                    ...prevState,
                    start: prevState.start-this.page_size,
                    stop: prevState.stop-this.page_size,
                    number: prevState.number-1,
                    data: newsLinks.slice(prevState.start-this.page_size, prevState.stop-this.page_size)
                }
            })
        }
        
    }

  render(){
    const number = this.state.number
    return (
        <div className={newsStyle.container}>
            <div className={newsStyle.wrapper}>
                <div className={newsStyle.newsContainer}>
                <h3>News</h3>
                    {
                        this.state.data.map( (newsLink) =>
                            <div key={newsLink.title} className={newsStyle.linkContainer}>
                                <a href={newsLink.url} target="_blank" rel="noreferrer noopener">{newsLink.title}</a> 
                                <br/>
                                <small className={newsStyle.date}>{newsLink.date}</small>
                            </div>
                        )
                    }
                <ul className={newsStyle.navigation}>
                    <li onClick={this.previous}><button>&#9668; <span>Previous</span></button></li>
                    <li style={{margin:"0 1rem", fontWeight:"400"}}>{number}/{Math.ceil(newsLinks.length/this.page_size)}</li>
                    <li onClick={this.next_page}><button><span>Next </span>&#9658;</button></li>
                </ul>
                </div>
            </div>
        </div>
      );
  }
};

export default News;
