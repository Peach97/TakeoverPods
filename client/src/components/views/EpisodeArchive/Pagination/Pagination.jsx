import React from "react";
import { Pagination } from "@mui/material";



const Paginate = ({page, count, handleChange}) => {
    return (<Pagination onChange={handleChange} sx={{justifyContent: "space-between", "& .MuiPaginationItem-outlined": {
        padding: "16px", margin:"1rem 8px 0 8px"
    }
    }}  count={count} page={page}   variant="outlined"/>
    )
}
export default Paginate