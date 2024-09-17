import { useCallback } from "react";
import TagManager from "react-gtm-module";

interface GtmEventType extends Record<string, unknown> {
  event?: string;
}

const useGTM = () => {
  const pushGtmEvent = useCallback((props: GtmEventType) => {
    TagManager.dataLayer({
      dataLayer: {
        ...props,
      },
    });
  }, []);

  return {
    pushGtmEvent,
  };
};

export default useGTM;
