import React, {useEffect} from "react";
import { Pagination, PaginationItem } from "@mui/material";
// import useStyles from "./styles";
import { Link } from "react-router-dom";
import { youtubeSearch } from "../actions/posts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Paginate = ({page, setPage, handleChange}) => {
    
    const dispatch = useDispatch();

   

    // const classes = useStyles()

    return (<Pagination onChange={(e) => handleChange(e.target.textContent) } sx={{justifyContent: "space-between", "& .MuiPaginationItem-outlined": {
        padding: "16px", margin:"1rem 8px 0 8px"
    }

    }}  count={5}  variant="outlined"/>


    )

}
export default Paginate