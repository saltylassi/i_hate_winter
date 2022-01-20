import { useCallback, useEffect, useState } from 'react';
import { item } from '../assets/types';

import { utils } from '../utils/utils';

export const useMain = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<{ [key: string]: Array<any> }>({});
  const [min, setMin] = useState<any>('');
  const [max, setMax] = useState<any>('');
  const [currentRegion, setCurrentRegion] = useState<string>('bucheon');
  const [baseDate, baseTime] = utils.dateFunctions.getValidTimeArgs(new Date());

  const positions = [
    ['56', '125'],
    ['61', '125'],
    ['71', '115'],
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

  useEffect(() => {
    if (Object.keys(temperature).length) {
      const min = temperature[currentRegion].filter((item: item) => item.category === 'TMN')[0];
      const max = temperature[currentRegion].filter((item: item) => item.category === 'TMX')[0];

      setMin(() => min);
      setMax(() => max);
    }
  }, [currentRegion, temperature]);

  const handleRegion = useCallback((text: string) => {
    setCurrentRegion(() => {
      let region = '';
      if (text === '부천') {
        region = 'bucheon';
      } else if (text === '서울') {
        region = 'seoul';
      } else if (text === '충주') {
        region = 'eumseong';
      }
      return region;
    });
  }, []);

  return {
    loaded,
    temperature: temperature[currentRegion],
    currentRegion,
    min,
    max,
    handleRegion,
  };
};
