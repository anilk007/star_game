import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Home, AccountCircle, Settings } from "@material-ui/icons";
import { Link } from 'react-router-dom';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)

  }
}))

const CardGrid = () => {

  const classes = useStyles()
  const menuItems = [
    { label: "Home", desc: "Home Page", path: "/stargame", icon: <Home /> },
    { label: "My Campaigns", desc: "My Campaigns", path: "/postdata", icon: <AccountCircle /> },
    { label: "QR Code", desc: "QR Code", path: "/managegames", icon: <Settings /> },
    { label: "My Pending Requests", desc: "My Pending Requests", path: "/home", icon: <Home /> },
    { label: "My Reports", desc: "My Reports", path: "/accounts", icon: <AccountCircle /> },
    { label: "Others", desc: "Others", path: "/organizations", icon: <Settings /> }
  ]

  return (
    <div className={classes.root}>
      <Grid className="MT-17"
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"

      >

        {menuItems.map(({ label, desc, path, icon }) => (
          <Grid item xs={12} sm={6} md={4} key={menuItems.indexOf(label)}>
            <Card>
              <CardHeader
                title={`desc : ${desc}`}
              />
              <CardContent>

                <Link className={classes.link} to={path}> <Typography variant="h5" gutterBottom>
                  {icon}
                  {label}

                </Typography></Link>


              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )

}


export default CardGrid;