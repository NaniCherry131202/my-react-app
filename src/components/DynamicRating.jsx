import React, { useState } from "react";
import { Rating, Box, Typography } from "@mui/material";

const DynamicRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: 400,
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" component="div">
        Rate Your Experience
      </Typography>
      <Rating
        name="dynamic-rating"
        value={rating}
        onChange={handleRatingChange}
        precision={0.5} // Allows half-star ratings
        size="large"
      />
      <Typography variant="body1" component="div">
        Your Rating: {rating || "Not rated yet"}
      </Typography>
    </Box>
  );
};

export default DynamicRating;