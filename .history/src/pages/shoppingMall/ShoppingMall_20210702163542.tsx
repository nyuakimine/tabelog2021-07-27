import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategoriesDataActionCreator, fetchCategoriesStartActionCreator } from "../../redux/shoppingMall/fetchCategoriesAstions";
import { RootState } from "../../redux/store";
import { CategoriesState } from "../../redux/shoppingMall/fetchCategoriesReducer";
import "./ShoppingMall.css";
import {EmComponent} from "../shoppingMall/EmComponent"

export const ShoppingMall: React.FC = () => {
  let categories: any = useSelector((s: RootState) => s.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in shoppngMall.tsx file ");
    dispatch(fetchCategoriesDataActionCreator());
  }, []);

const onMouseOverHandler = (e)=>{
    const sortList= document.getElementByIdByClassName('all-sort-list')[0]
    const nodes = Array.prototype.slice.call(sortLis);
    const idx = nodes.indexOf(e.target);
    const sLTop = sortList.getBoundClientRect().top;
}
  //categories.loading = false
  //categories.error = null
  //categories.categoryList ={resultcode,message, data}
  //categories.categoryList.data =[]
return categories.loading === true ? (
            <h1>"loading"</h1>
          ) : (
            <div>
              <div id="banner">
                <div className="all-sort-list">
                  {categories.error != null
                    ? "error"
                    : categories.categoryList.data.map((category,index) => {
                        return (
                          <div key = {index} className="item" onMouseOver={onMouseOverHandler}> 
                            <h3>
                              <span>·</span>
                              <a href="##">{category.categoryName}</ a>
                            </h3>
                            <div className="item-list">
                              <div className="subitem">
                                {category.secondLevelCategortVOS.map(
                                    (vos2,secondIdx)=> {
                                        return(
<dl className="fore1" key={secondIdx>
<dt>{vos2.categoryName}</dt>
<dd>
    {vos2.thirdLevelCategoryVOS.map(
        (vos3,thirdIdx)=>{
            return(
                <EmComponent 
                idx={thirdIdx}
                categoryId={vos3.categoryId}
                categoryName={vos3.categoryName}
                ></EmComponent>
            )
        }
    )}
</dd>
</dl>}
                                        );
                                    }
                                )}
    
                                
                             
                              </div>
                            </div>
                          </div>
                        );
                      })}
     
