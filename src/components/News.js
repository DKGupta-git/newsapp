import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async updatebewsfun(event) {
  this.props.progress(0);
    // console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=5`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(30);
    let parseData = await data.json();
    this.props.progress(70);
    // document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`;
    this.setState({ articles: parseData.articles, loading: false, totalresults: parseData.totalResults });
    this.props.progress(100);
    // console.log(parseData.articles);
  }
  async componentDidMount() {
    // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4fc8c7072a77446db7db41b43255275a&page=${this.state.page}&pageSize=3`;
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({articles: parseData.articles });
    // console.log(parseData);
    this.updatebewsfun();
  }

  // prevnewsbuttonfunction = async () => {
  //   console.log("previous");
  //   // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4fc8c7072a77446db7db41b43255275a&page=${this.state.page-1}&pageSize=3`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({articles: parseData.articles,loading:false});
  //   console.log("befiore" + this.state.page);
  //   await this.setState({ page: this.state.page - 1 });
  //   console.log("after" + this.state.page);
  //   this.updatebewsfun();
  // };
  // componentDidUpdate() {
  //   console.log("hello");
  // }
  // nextnewsbuttonfunction = async () => {
  //   // if(!(this.state.page+1>(Math.ceil(this.state.totalart/9)))){
  //   // let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4fc8c7072a77446db7db41b43255275a&page=${this.state.page+1}&pageSize=3`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({articles: parseData.articles,totalart: Math.ceil(parseData.totalResults) ,loading:false });
  //   // let x=this.state.page+1;
  //   // console.log("h"+x);
  //   // await this.setState({page : this.state.page+1 });
  //   // console.log("hh"+this.state.page);
  //   // this.updatebewsfun();
  //   this.setState({ page: this.state.page + 1 }, () => this.updatebewsfun());
  //   // console.log(parseData);
  //   // }
  // };
  capitalizeFirstLetter(strings) {
    return strings.charAt(0).toUpperCase() + strings.slice(1);
  }
  fetchMoreData= async()=>{
    this.props.progress(0);
    // console.log("hhh"+this.state.page);
     this.setState({ page: this.state.page + 1 });
  //  console.log("hhll"+this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=4fc8c7072a77446db7db41b43255275a&page=${this.state.page+1}&pageSize=5`;
    this.setState({ loading: false });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log("poars"+parseData);
    // document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`;
    // this.setState({ articles: parseData.articles, loading: false });
   
    this.setState({
      articles: this.state.articles.concat( parseData.articles)
    });
    this.props.progress(100);
  }
  render() {
    return (
      <>
        
          {/* {console.log("666"+this.state.totalresults)} */}
          <InfiniteScroll
            dataLength={(this.state.articles).length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalresults}
            loader={<Loading/>}

          >
            {this.state.loading && <Loading />}
            <h1 className="my-3">
              {this.capitalizeFirstLetter(this.props.category)}-News
            </h1>
            <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-4"
                    style={{ margin: "10px 0" }}
                    key={element.url}
                  >
                    <Newsitem 
                      title={element.title}
                      desc={element.description}
                      imgUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>

          {/* <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.prevnewsbuttonfunction}
            >
              &larr; Prev
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalart / 9)
              }
              className="btn btn-primary"
              onClick={this.nextnewsbuttonfunction}
            >
              Next &rarr;
            </button>
          </div> */}
                </>
    );
  }
}

export default News;
