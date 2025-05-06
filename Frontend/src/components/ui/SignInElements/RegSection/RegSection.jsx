import { styles } from "./RegSection.styles";
import { Button, TextField, Box, Typography } from "@mui/material";

const RegSection = () => {
  return (
    <Box sx={styles.section}>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Create Account
        </Typography>
        <Typography sx={{ color: "#6b7280", mt: 0.5 }}>
          Enter your details to create a new account
        </Typography>
      </Box>

      <Box sx={styles.row}>
        <TextField
          label="First Name"
          placeholder="John"
          fullWidth
          variant="outlined"
          sx={styles.textField}
        />
        <TextField
          label="Last Name"
          placeholder="Doe"
          fullWidth
          variant="outlined"
          sx={styles.textField}
        />
      </Box>

      <TextField
        label="Email"
        placeholder="example@email.com"
        fullWidth
        variant="outlined"
        sx={styles.textField}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        sx={styles.textField}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
        sx={styles.textField}
      />

      <Button variant="contained" sx={styles.button}>
        Create Account
      </Button>

      <Typography sx={styles.footerText}>
        Already have an account?{" "}
        <Box component="span" sx={styles.link}>
          Sign in
        </Box>
      </Typography>
    </Box>
  );
};

export default RegSection;
