import React from 'react'

import { Pannellum } from 'pannellum-react'
import myImage from '../static/myImage.jpg'

const VR = () => (
  <div className="vr-wrapper">
    <p>Property360 - The only Real Estate Platform in Pakistan that provides facility of viewing properties in VR in its website</p>
    <Pannellum
      width="100%"
      height="50vh"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log('panorama loaded')
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>

    {/******  for video 360 component *******/}

    {/* <PannellumVideo
            video={myVideo}
            loop
            width="100%"
            height="600px"
            pitch={10}
            yaw={180}
            hfov={140}
            minHfov={50}
            maxHfov={180}
        >
            <Pannellum.Hotspot
                type="custom"
                pitch={31}
                yaw={150}
                handleClick={(evt, name) => this.hanldeClick(name)}
                name="hs1"
            />

            <Pannellum.Hotspot
                type="info"
                pitch={31}
                yaw={-57}
                text="Info"
                URL="https://github.com/farminf"
            />
        </PannellumVideo> */}
  </div>
)

export default VR
