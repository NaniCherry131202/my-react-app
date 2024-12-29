import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DynamicAccordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state effectively.",
    },
    {
      id: 2,
      title: "Why use React?",
      content:
        "React is fast, flexible, and scalable. Its component-based architecture makes it easy to develop and maintain complex user interfaces, and it integrates seamlessly with other libraries and frameworks.",
    },
    {
      id: 3,
      title: "How does React handle state?",
      content:
        "React uses a concept called 'state' to manage dynamic data in applications. State can be updated using the `setState` method in class components or the `useState` hook in functional components.",
    },
  ];
  

  // State to manage which accordion is expanded
  const [expanded, setExpanded] = useState(false);

  // Handle accordion expansion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography variant="h6">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default DynamicAccordion;
