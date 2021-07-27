import React from "react";

interface ifProps {
  categoryName: string;
  Idx: number;
}

export const Em1Component: React.FC<ifProps> = ({
  categoryName,
  Idx,
}) => {
  return (
    <dl className="fore1" key={Idx}>
      <dt>{categoryName}</dt>
      <dd></dd>
    </dl>
  );
};
