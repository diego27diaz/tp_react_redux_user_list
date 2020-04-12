import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

//Styles
import './Header.css';

type Props = { clientsArray: [] };

const mapStateToProps = function(state:any) {
  return {
    clientsArray: state.clients,
  }
}

class Header extends React.Component<Props, {}> {
  
  render() {    
    return (
      <AppBar position="static" className="header">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">
            <span>Client ID: </span> 
            {this.props.clientsArray.map((item:any)=><span key={item.id}>{item.id}</span>)}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect(mapStateToProps)(Header);