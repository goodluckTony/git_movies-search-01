import React from 'react'
// import { routes } from "../routes";
import { Outlet } from "react-router-dom";


const Content = () => {
  // const {pathname} = window.location;

  return (
    <div>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <Outlet />
      {/* </Suspense> */}
    </div>
  )
}

export default Content;