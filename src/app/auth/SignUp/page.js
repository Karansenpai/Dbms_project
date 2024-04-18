"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUpForm from "@/components/SignUpForm";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
const defaultTheme = createTheme();

export default function SignUpSide() {

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          className="py-9"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >

          <SignUpForm/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
