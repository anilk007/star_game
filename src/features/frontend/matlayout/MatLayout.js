import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Grid} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  main_container: {
    border: "1px solid black",
    height: "450px"
  },
  top_container: {
    border: "5px solid green",
    height: "100px"
  },
  logo_item: {
    border: "5px solid yellow",
    width: "300px",
  },
  header_bar_item: {
    border: "5px solid orange",
    width: "900px"
  },
  bottom_container: {
    border: "5px solid pink",
    height: "350px"
  },
  side_bar_item: {
    border: "5px solid yellow",
    width: "300px",
    height: "320px"
  },
  cards_item: {
    border: "5px solid orange",
    width: "900px",
    height: "320px"
  }
}))

const MatLayout = () => {

  const classes = useStyles()
  // const menuItems = [
  //   { label: "Logo", desc: "Home Page", path: "/stargame", icon: <Home /> },
  //   { label: "Header", desc: "My Campaigns", path: "/postdata", icon: <AccountCircle /> },
  //   { label: "SideNav", desc: "My Reports", path: "/accounts", icon: <AccountCircle /> },
  //   { label: "Routes", desc: "Others", path: "/organizations", icon: <Settings /> }
  // ]

  return (
    <div className={classes.root}>
      <Grid className={classes.main_container}
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"

      >

        <Grid item container className={classes.top_container} >
      

          <Grid item 
            className={classes.logo_item} >
            Logo
          </Grid>

          <Grid item className={classes.header_bar_item} >
            Header
          </Grid>

        </Grid>

        <Grid item container>
          

          <Grid item 
            className={classes.side_bar_item} >
            Side Bar
          </Grid>

          <Grid item className={classes.cards_item} >
            menu cards
          </Grid>

        </Grid>


      </Grid>
    </div>
  )

}


export default MatLayout;