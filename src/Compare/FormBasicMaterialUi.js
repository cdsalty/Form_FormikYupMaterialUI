import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

const SignUp_Form = () => {
  // Styling
  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "20px auto" // to center it accordingly
  };
  const headerStyle = {
    padding: "7px",
    margin: 0
  };
  const avatarStyle = {
    backgroundColor: "blue"
  };
  const buttonStyle = {
    marginTop: "15px"
  };

  return (
    <Grid>
      <Paper elevation={16} style={paperStyle}>
        <Grid align="left">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <Grid align="center">
          <h2 style={headerStyle}>Sign-Up Form</h2>
          <Typography variant="caption" gutterBottom>
            Fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="First Name"
            placeholder="Enter your first name"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
          />
          <TextField fullWidth label="Email" />
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <Button
            style={buttonStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default SignUp_Form;
