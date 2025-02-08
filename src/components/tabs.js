import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Grid, Paper } from "@mui/material";
import church from "../assets/img/church2.jpg";
import altar from "../assets/img/altar2.jpg";
import prayer from "../assets/img/chuch1.jpg";

const tabItems = [
  { label: "Our Vision", content: "To create an atmosphere where believers can discover and nurture their potentials in accordance with God's purpose for their lives.", verse: "Colossians 1:10", img: church },
  { label: "Our Mission", content: "Our mission is to serve the NAF Community through pastoral care, robust Biblical guidance, and build the spiritual and moral resilience of personnel to fulfill Airpower tasks demanded by National Defense and security imperatives.", img: altar },
  { label: "Command Philosophy", content: "To develop the spiritual, moral, and ethical component of NAF personnel to effectively meet the Airpower Demands of National Security in all Operational Environments.", img: prayer },
  {
    label: "The Key Enablers",
    content: (
      <ol>
        <li>Provide sustainable pastoral care, moral, and ethical guidance for enhanced NAF operations.</li>
        <li>Create an enabling environment for mutual respect and harmonious co-existence between personnel and their dependents irrespective of faith differences.</li>
        <li>Prioritize sound Biblical teaching and qualitative worship atmospheres as well as enhanced spiritual and material welfare.</li>
      </ol>
    ),
    img: altar,
  },
];

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ p: 3 }}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 5 }}>
      {/* Tabs */}
      <Paper elevation={3} sx={{ borderRadius: "16px", overflow: "hidden" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          aria-label="Church Support Tabs"
        >
          {tabItems.map((item, index) => (
            <Tab key={index} label={item.label} id={`tab-${index}`} />
          ))}
        </Tabs>
      </Paper>

      {/* Tab Panels */}
      {tabItems.map((item, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h8" fontWeight="bold" color="#ec3237">
                {item.label}
              </Typography>
              <Typography variant="body1" mt={1}>
                {item.content}
              </Typography>
              {item.verse && (
                <Typography variant="body2" color="text.secondary" mt={2}>
                  <strong>{item.verse}</strong>
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={item.img}
                alt={item.label}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
                className="rounded-br-[300px] h-auto"
              />
            </Grid>
          </Grid>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
