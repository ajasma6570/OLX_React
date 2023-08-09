import React,{useEffect,useContext, useState} from 'react';
import {FirebaseContext} from '../../store/Context'
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import {useHistory} from 'react-router-dom'

function Posts() {
const {Firebase} = useContext(FirebaseContext)
const [products,setProducts] =useState([]);
const [isLoading,setLoading]= useState(true)
const {setPostDetails} = useContext(PostContext);
const history = useHistory();
useEffect(()=>{
  Firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }
    })
    setProducts(allPost)
    setLoading(false)
  })
},[])



  return (
    <>
    {isLoading && (
      <div className="moreView">
      <div className="heading">
        <span style={{ backgroundColor: "#c7c5c5", width: "200px", height: "25px" }}></span>
        <span style={{ backgroundColor: "#c7c5c5", width: "200px", height: "25px" }}></span>
      </div>
      <div style={{ width: "1000%", height: "200px", display: "flex", flexDirection: "row" }}>
        {[...Array(4)].map((_, index) => (
          <div key={index} style={{ backgroundColor: "#c7c5c5", width: "300px", height: "175px", margin: "20px" }}></div>
        ))}
      </div>
      </div>
    )}
  
 
  {!isLoading && (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map((product,index)=>(
          <div key={index}
            className="card"
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer"> {product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>
      ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product,index)=>(
          <div className="card"
          key={index}
          onClick={()=>{
            setPostDetails(product)
            history.push('/view')
          }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="Poster" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createAt}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>  
    )}
    </>
  );
}

export default Posts;
