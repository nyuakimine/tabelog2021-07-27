import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import "../../pages/tabelog/tabelog1.css";
import "../../pages/tabelog/tabelog2.css";

export const Genre1: React.FC = () => {
  const genreAndStation = useSelector(
    (state: RootState) => state.genreAndStationSlice.data
  );
  //console.log("Genre1Genre1Genre1",genreAndStation);

  return genreAndStation === null ? (
    <h2>loading...</h2>
  ) : (
   
    <ul className="linktree__childlist">
      {genreAndStation.map((genre1, idx) => {
           if (genre1.genreId === 1) {
          return(
       
           
          <li className="linktree__childlist-item" key={idx}>
            <a href="https://tabelog.com/tokyo/A1302/A130201/rstLst/RC040101/">
              {genre1.stationName}×{genre1.genreName}
            </a>
          </li>
           
          )
        }
      })}
    </ul>

  );
};
// if (genreAndStation.genreId === 1) {}