import React from 'react';
import { createUseStyles } from "react-jss";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

const useStyles = createUseStyles({
  header: {
    // boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
    // border: '1px solid black',
    // 'box-shadow': '0 5px 5px rgba(182, 182, 182, 0.75)',
    position: 'sticky',
    paddingBottom: '1px',
    '-webkit-box-shadow': '0 4px 4px rgba(0, 0, 0, 0.3)',
  },
  linksContainer: {
    display: 'flex',
    gap: '15px',
    margin: '20px',
    '& a:first-child': {
      textDecoration: 'none',
      color: 'black', 
      fontWeight: 'bold',
      opacity: '0.7',
    },
    '& a:last-child': {
      textDecoration: 'none',
      color: 'red', 
      fontWeight: 'bold',
      opacity: '0.7',
    },
    '& a:hover': {
      opacity: '1',
    }
  },
});

const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.header}>
      <div className={classes.linksContainer}>
        
        {/* <a key="hui" href="#">Jui</a> */}
        <ul>
          {/* <li> */}
            {routes.map(({path, label}) => 
              // <a key={path} href={path}>{label}</a>
              <NavLink to={path} key={path}>{label}</NavLink>
            )}

          {/* </li> */}
        </ul>

        {/* <a href="/">Home</a>
        <a href="/movies">Movies</a>  */}
      </div>
    </div>
  )
}

export default Header;