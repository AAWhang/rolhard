/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/material-kit-react/components/footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
      [classes.footer]: true,
      [classes.footerWhiteFont]: whiteFont,
    });
    const aClasses = classNames({
      [classes.a]: true,
      [classes.footerWhiteFont]: whiteFont,
    });
    return (
      <footer className={footerClasses}>
        <div className={classes.container} style={{ marginTop: '30px', fontFamily: 'Helvetica Neue, Sans-serif' }}>
          <Grid container justify="space-between">
            <Grid item style={{ width: '260px' }}>
              <p style={{ textAlign: 'left', fontSize: '13px', lineHeight: 1.5 }}>
                WeedClub® is a Professional Cannabis <br />
                Network and Platform. Fuel networking, <br />
                menu sourcing, hiring, land deals, find <br />
                startups and investors and more! Join <br />
                now to Make Friends in High Places®! <br />
              <br />
              <br />
              &copy; {1900 + new Date().getYear()} , POWERED BY{" "}
              <Link onClick={() => { window.location.href = `/About`; }}>
                HODLINK
              </Link>{" "}
              </p>
            </Grid>
            <Grid item justify="left" style={{left: '-5px', position: 'relative'}}>
              <List style={{textAlign: 'left', lineHeight: 1}}>
                <li>
                  <a
                    href="#"
                    className={classes.block}
                    target="_blank"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classes.block}
                    target="_blank"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classes.block}
                    target="_blank"
                  >
                    Refunds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={classes.block}
                    target="_blank"
                  >
                    Merch
                  </a>
                </li>
              </List>
            </Grid>
            <Grid Item style={{width: '260px'}}>
              <p style={{textAlign: 'left', fontSize: '13px', lineHeight: 1.5}}>
                Farmhouse Inc. <br />
                113 Cherry St. #90355 • Seattle, WA <br />
                98104 • US <br />
                Farmhouse Club Services Ltd. <br />
                72 High St. • Haslemere, Surrey <br />
                GU27 2LA • UK <br />
                +1 888 420 6856 <br />
                help@weedclub.com <br />
              </p>
            </Grid>
          </Grid>
        </div>
      </footer>
    );
  }
  
  Footer.propTypes = {
    whiteFont: PropTypes.bool,
  };