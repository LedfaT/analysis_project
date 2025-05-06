import { styles } from "./AuthSection.styles";
import { Button, TextField, Box, Typography } from "@mui/material";

const AuthSection = () => {
  return (
    <Box sx={styles.section}>
      <Box>
        <Typography variant="h5" fontWeight="bold">Sign In</Typography>
        <Typography sx={{ color: "#6b7280", mt: 0.5 }}>Enter your credentials to access your account</Typography>
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
        <Button variant="contained" sx={styles.button}>
            Sign In
        </Button>

      <Typography sx={styles.footerText}>
            Don't have an account?{" "}
            <Box component="span" sx={styles.link}>
                Sign up
            </Box>
        </Typography>
    </Box>
  );
};

export default AuthSection;
