import React, { useEffect } from "react";

import classNames from "classnames";
import soil from "assets/land/soil2.png";

import { getTimeLeft, secondsToMidString } from "lib/utils/time";

import { InnerPanel } from "components/ui/Panel";

import { CROPS } from "features/game/types/crops";
import { addNoise } from "lib/images";

import { LIFECYCLE } from "../../lib/plant";
import classnames from "classnames";
import { PlantedCrop } from "features/game/types/game";

interface Props {
  plantedCrop?: PlantedCrop;
  className?: string;
  showCropDetails?: boolean;
}

const CROP_NOISE_LEVEL = 0.1;

const Crop: React.FC<{ image: string; className: string }> = ({
  image,
  className,
}) => {
  return (
    <img
      src={image}
      onLoad={(e) => addNoise(e.currentTarget, CROP_NOISE_LEVEL)}
      className={classnames("w-full", className)}
    />
  );
};

export const Soil: React.FC<Props> = ({
  plantedCrop,
  className,
  showCropDetails,
}) => {
  const [_, setTimer] = React.useState<number>(0);
  const setHarvestTime = React.useCallback(() => {
    setTimer((count) => count + 1);
  }, []);

  useEffect(() => {
    if (plantedCrop) {
      setHarvestTime();
      const interval = window.setInterval(setHarvestTime, 1000);
      return () => window.clearInterval(interval);
    }
  }, [plantedCrop, setHarvestTime]);

  if (!plantedCrop) {
    return <Crop image={soil} className={className as string} />;
  }

  const { harvestSeconds } = CROPS()[plantedCrop.name];
  const lifecycle = LIFECYCLE[plantedCrop.name];
  const timeLeft = getTimeLeft(plantedCrop.plantedAt, harvestSeconds);

  // Seedling
  if (timeLeft > 0) {
    const percentage = 100 - (timeLeft / harvestSeconds) * 100;
    const isAlmostReady = percentage >= 50;

    return (
      <div className="relative w-full h-full">
        <Crop
          image={isAlmostReady ? lifecycle.almost : lifecycle.seedling}
          className={className as string}
        />
        <InnerPanel
          className={classNames(
            "ml-10 transition-opacity absolute whitespace-nowrap sm:opacity-0 bottom-5 w-fit left-1 z-20 pointer-events-none",
            {
              "opacity-100": showCropDetails,
              "opacity-0": !showCropDetails,
            }
          )}
        >
          <div className="flex flex-col text-xxs text-white text-shadow ml-2 mr-2">
            <div className="flex flex-1 items-center justify-center">
              <img src={lifecycle.ready} className="w-4 mr-1" />
              <span>{plantedCrop.name}</span>
            </div>
            <span className="flex-1">{secondsToMidString(timeLeft)}</span>
          </div>
        </InnerPanel>
      </div>
    );
  }

  return <Crop className={className as string} image={lifecycle.ready} />;
};
