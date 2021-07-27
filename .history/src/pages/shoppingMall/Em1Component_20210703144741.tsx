import React from "react";

interface ifProps {
  categoryName: string;
  idx: number;
  categoryId: number;
}

export const Em1Component: React.FC<ifProps> = ({
  categoryName,
  idx,
  categoryId,
}) => {
  return (
    <em key={idx}>
                  
      <a href={`http://localhost:8081/search?goodsCategoryId=${categoryId}`}>
        {categoryName}
      </a>
              
    </em>
  );
};
