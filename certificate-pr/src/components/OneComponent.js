import React from 'react';
import {useCart} from 'react-use-cart';
const OneComponent = ({oneDimensionArray}) => {
    
    const {addItem} = useCart();
    return (
        <div className={'one-component item'}>
            {/* content for link, img, title, description here */}
            
             {oneDimensionArray.map((product,index) => 
                
                
                    <div className="card">
                        
                    <div className="my-layer">
                    <div className="box">
                        <i className="fas fa-search" />
                    </div>
                    <div className="box-js">
                        <div className="box-1">
                        <img src={product.img1} alt="" />
                        </div>
                        <div className="box-1">
                        <img src={product.img2} alt="" />
                        </div>
                        <div className="box-1">
                        <img src={product.img3} alt="" />
                        </div>
                    </div>
                    <div className="bottom">
                        <button onClick={()=>{addItem(product); alert(product.about + " sebete elave edildi",1000)}} className="box-b1">
                        Add to card
                        </button>
                        <div className="box-b2">
                        <i className="fas fa-heart" />
                        </div>
                    </div>
                    </div>
                    <div className="img-area">
                    <img src={product.img1} alt="" />
                    </div>
                    <div className="text-area">
                    <div className="about">
                        <p className="marca">{product.about}</p>
                        <span>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        </span>
                        <p className="price">
                        {product.price}$
                        </p>
                    </div>
                    </div>
                    </div>
             
             )}
             
        </div>
    )
}

export default OneComponent