import React from "react";
import styles from "./NewBeeCarousel.css";
import { Image, Carousel as AntCarousel } from 'antd';



export const Carousel : React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png" />
      <Image src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner2.png" />
    
    </AntCarousel>
  );
}

