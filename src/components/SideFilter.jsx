/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
// import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useDispatch } from 'react-redux';

export default function SideFilter({ name }) {
  // const dispatch = useDispatch();
  // const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-bh-content"
          id="panel-bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>filters</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
