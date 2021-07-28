import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import "../../pages/tabelog/tabelog1.css";
import "../../pages/tabelog/tabelog2.css";

export const Genre3: React.FC = () => {
  const genreAndStation = useSelector(
    (state: RootState) => state.genreAndStationSlice.data
  );
  return genreAndStation === null ? (
    <h2>loading...</h2>
  ) : (
    <ul className="linktree__childlist">
      {genreAndStation.map((genre3, idx) => {
        if (genre3.genreId === 3) {
          return (
            <li className="linktree__childlist-item" key={idx}>
              <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
                {genre3.stationName}×{genre3.genreName}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

