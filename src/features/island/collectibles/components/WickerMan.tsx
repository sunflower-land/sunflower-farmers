import React, { useContext, useRef } from "react";

import Spritesheet, {
  SpriteSheetInstance,
} from "components/animation/SpriteAnimator";
import { burningSound } from "lib/utils/sfx";

import wickerManFire from "assets/sfts/wicker_man_fire.png";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { ZoomContext } from "components/ZoomProvider";

export const WickerMan: React.FC = () => {
  const { scale } = useContext(ZoomContext);
  const wickerManGif = useRef<SpriteSheetInstance>();

  const burn = () => {
    const isPlaying = wickerManGif.current?.getInfo("isPlaying");

    if (!isPlaying) {
      burningSound.play();
      wickerManGif.current?.goToAndPlay(0);
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer hover:img-highlight"
      onClick={burn}
    >
      <Spritesheet
        className="absolute group-hover:img-highlight pointer-events-none"
        style={{
          width: `${PIXEL_SCALE * 48}px`,
          bottom: "94.25px",
          left: `${PIXEL_SCALE * -14}px`,
          imageRendering: "pixelated",
        }}
        getInstance={(spritesheet) => {
          wickerManGif.current = spritesheet;
        }}
        image={wickerManFire}
        widthFrame={48}
        heightFrame={58}
        zoomScale={scale.get()}
        fps={12}
        endAt={32}
        steps={32}
        direction={`forward`}
        autoplay={false}
        loop={true}
        onLoopComplete={(spritesheet) => {
          spritesheet.pause();
        }}
      />
    </div>
  );
};
