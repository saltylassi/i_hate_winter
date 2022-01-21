import { useCallback, useEffect, useState } from 'react';
import { item } from '../assets/types';

import { utils } from '../utils/utils';

export const useMain = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<{ [key: string]: Array<any> }>({});
  const [currentRegion, setCurrentRegion] = useState<string>('bucheon');
  const [baseDate, baseTime] = utils.dateFunctions.getValidTimeArgs(new Date());

  const positions = [
    ['56', '125'],
    ['61', '125'],
    ['71', '114'],
  ];

  useEffect(() => {
    const getData = async () => {
      const result = await Promise.all(
        positions.map(async (position) => await utils.apis.getTemperature(position[0], position[1], baseDate, baseTime))
      );
      setTemperature(() => {
        return {
          bucheon: result[0],
          seoul: result[1],
          eumseong: result[2],
        };
      });
      setLoaded(() => true);
    };
    getData();
  }, []);

  const handleRegion = useCallback((text: string) => {
    setCurrentRegion(() => {
      return text;
    });
  }, []);

  return {
    loaded,
    temperature: temperature[currentRegion],
    currentRegion,

    handleRegion,
  };
};
