import React from 'react';
// import IconLink from "./IconLink";
import {Box} from "@mui/material";

function ProjectsLayout(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               {/* <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/> */}
               <a href={live} target={"_blank"} rel="noopener noreferrer">
                    <i className={'fa fa-safari'}/> {'Live Demo'}
                </a>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                <a href={live} target={"_blank"} rel="noopener noreferrer">
                    <i className={'fa fa-code'}/> {'Source Code'}
                </a>
            </Box>
         </Box>
      </Box>
   );
}

export default ProjectsLayout;