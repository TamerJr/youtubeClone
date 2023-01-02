import React from 'react'
import { Stack ,Box} from '@mui/material'
import {VideoCard,ChannelCard} from "../utilities"
const Vedios = ({videos ,direction}) => {
  console.log(videos)
  return (
    <Stack direction={direction ||"row"} flexWrap="wrap"
    justifyContent="start" gap={2}>
      {videos?.map((item,idx)=>(
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item}/>}
          {item?.id?.channelId && <ChannelCard channel={item}/>}

          </Box>))}
    </Stack>
          )
}

export default Vedios