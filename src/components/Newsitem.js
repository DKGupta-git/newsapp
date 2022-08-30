import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    const mystyle = {
      height:"300px",
      width:"auto",
    };
    let{title,desc,imgUrl,url,author,publishedAt}=this.props;
    return (
        <div className=''>
        <div className="card text-left" >
        <span className="badge rounded-pill bg-primary" style={{position: "absolute"}}><small>Author : {author?author:"Unknown"}</small></span>
        <img src={imgUrl?imgUrl:"https://images.hindustantimes.com/tech/img/2022/08/28/1600x900/iPhone-14-Pro-Purple-Front-and-Back-MacRumors-Exclusive_1653967629359_1661680194750_1661680194750.jpeg"} className="card-img-top" alt="..." style={mystyle} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} className="btn btn-dark">Read More</a>
          <p className='my-3'><small>Published : {publishedAt?new Date(publishedAt).toGMTString():"Unknown"}</small></p>
        </div>
      </div>
      </div>
    )
  }
}

export default Newsitem
