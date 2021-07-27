import React from "react";
import "../../pages/shoppingMall/ShoppingMall.css";
import "./fragment.css";

export const NavFragment: React.FC = () => {
  return (
    <nav id="nav">
    <div className="banner_x center">
        <a className="logo"><h1>新蜂商城</h1></a>
        <div className="fr">
            <div className="search">
                <input className="text" type="text" id="keyword"></input>
                <div className="search_hot">
                </div>
            </div>
            <div className="button iconfont icon-search" id="keywordButton" > </div>
        </div>
    </div>
   
</nav>
  );
};
