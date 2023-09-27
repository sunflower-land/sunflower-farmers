import React from "react";
import { Button } from "components/ui/Button";
import { Panel } from "components/ui/Panel";
import { Modal } from "react-bootstrap";

import { ModerationEvent } from "features/world/Phaser";

export const calculateMuteTime = (
  time: number,
  type: "until" | "remaining"
) => {
  if (!time) return "Unknown";
  switch (type) {
    case "until": {
      return new Date(time).toLocaleString();
    }
    case "remaining": {
      const now = new Date().getTime();
      const remaining = time - now;
      const minutes = Math.floor((remaining / 1000 / 60) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

      if (remaining <= 0) return "0m 0s";

      return `${minutes}m ${seconds}s`;
    }
    default: {
      return "Unknown";
    }
  }
};

export const Muted: React.FC<{
  event?: ModerationEvent;
  onClose: () => void;
}> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <Modal show={true} centered backdrop="static" keyboard={false}>
      <Panel>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center text-center">
            <h1 className="text-lg font-bold">You have been muted!</h1>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm">Reason:</p>
            <p className="text-sm">{event.reason}</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm">You are muted until</p>
            <p className="text-sm">
              {event.mutedUntil
                ? calculateMuteTime(event.mutedUntil, "until")
                : "Unknown"}
            </p>
          </div>
          <div className="flex justify-center text-center">
            <p className="text-xxs">
              If you are against this decision, please contact us on Discord.
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="mt-1" onClick={onClose}>
              Accept
            </Button>
          </div>
        </div>
      </Panel>
    </Modal>
  );
};
