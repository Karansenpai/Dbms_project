"use client"
import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { SignIn } from "@/lib/signIn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignInForm = () => {
  const { data: session } = useSession();
  const router = useRouter(); 
  if(session?.user){
    router.push("/");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("Username");
    const password = data.get("password");
    const res = await SignIn(username, password, value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("Buyer");
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
     
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="Username"
          label="Username"
          name="Username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
            <FormControlLabel
              value="Farmer"
              control={<Radio />}
              label="Farmer"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
};

export default SignInForm;
