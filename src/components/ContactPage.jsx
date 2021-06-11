import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import { green, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
  },
  card: {
    background: "rgba(255, 255, 255, 0.20)",
    "&:hover": {
      background: "rgba(255, 255, 255, 0)",
    },
    boxShadow:
      "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(2px)",
    webkitBackdropFilter: "blur(2px)",
    borderRadius: 3,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
  },
  icons: {
    fontSize: 100,
  },
});

const ContactPage = () => {
  const classes = useStyles();
  const urlItems = {
    tel: "tel:+234-903-8233-089",
    mail: "mailto:mezebu07@gmail.com",
    whatsApp: "https://wa.me/+2349038233089",
    twitter: "https://twitter.com/Mezebu",
    linkedIn: "https://www.linkedin.com/in/ezeigwe-henry-604892211/",
    telegram: "https://t.me/Mezebu",
    target: "_blank",
    rel: "noreferrer noopener",
  };
  const { tel, mail, whatsApp, twitter, linkedIn, telegram, target, rel } =
    urlItems;
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Contacts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <a href={tel} target={target} rel={rel}>
                  <PhoneIcon
                    className={classes.icons}
                    style={{ color: green[800] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <a href={mail} rel={rel} target={target}>
                  <MailIcon
                    className={classes.icons}
                    style={{ color: blue[800] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
              <Card className={classes.card}>
                <a href={whatsApp} rel={rel} target={target}>
                  <WhatsAppIcon
                    className={classes.icons}
                    style={{ color: green[600] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <a href={twitter} rel={rel} target={target}>
                  <TwitterIcon
                    className={classes.icons}
                    style={{ color: blue[600] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <a href={linkedIn} rel={rel} target={target}>
                  <LinkedInIcon
                    className={classes.icons}
                    style={{ color: blue[800] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Card className={classes.card}>
                <a a href={telegram} rel={rel} target={target}>
                  <TelegramIcon
                    className={classes.icons}
                    style={{ color: blue[500] }}
                  />
                </a>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ContactPage;
