import { Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";

import { StyledAvatar, StyledContactSection, StyledFooter } from "./styles";
import { contactData } from "./data";
import Copyright from "../../components/Copyright/Copyright";
import Link from "../../Link";

const Contact = () => {
  return (
    <StyledContactSection>
      <Container>
        <Box>
          <Toolbar />
          <Typography
            sx={{ fontSize: 11, letterSpacing: 3 }}
            color="text.primary"
            variant="button"
          >
            Get in touch
          </Typography>
          <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
            CONTACT
          </Typography>
          <Box sx={{ my: 2 }}>
            {contactData.length > 0 && (
              <Grid container spacing={3}>
                {contactData.map(({ id, title, icon, detail, link }) => (
                  <Grid item key={id} lg={4} md={4} sm={6} xs={12}>
                    <StyledFooter
                      elevation={0}
                      component={motion.div}
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        type: "tween",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <StyledAvatar variant="rounded">
                        <Box>{icon}</Box>
                      </StyledAvatar>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {title}
                        </Typography>
                        <Divider sx={{ my: 0.5 }} />
                        <Typography
                          component={Link}
                          href={link}
                          variant="subtitle2"
                          fontWeight={600}
                          underline="hover"
                        >
                          {detail}
                        </Typography>
                      </Box>
                    </StyledFooter>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
        <Divider />
        <Toolbar />
        <Copyright />
      </Container>
    </StyledContactSection>
  );
};

export default Contact;
