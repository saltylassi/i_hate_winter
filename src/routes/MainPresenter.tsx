import React from 'react';
import Header from '../Components/Header';
import styled from 'styled-components/native';
import { item } from '../assets/types';
import CurrentTempPresenter from '../Components/CurrentTempPresenter';
import Footer from '../Components/Footer';
import TempListPresenter from '../Components/TempListPresenter';
import { useMain } from '../hooks/useMain';
import MainLayout from '../layouts/MainLayout';

const Temp = styled.Text``;

const MainPresenter = () => {
  const { loaded, temperature, currentRegion, handleRegion } = useMain();

  return loaded && temperature ? (
    <MainLayout>
      <Header region={currentRegion} />
      <CurrentTempPresenter temperature={temperature.filter((item: item) => item.category === 'TMP')[0]} />
      <TempListPresenter items={temperature.filter((item: item) => item.category === 'TMP').slice(0, 12)} />
      <Footer handleRegion={handleRegion} currentRegion={currentRegion} />
    </MainLayout>
  ) : (
    <MainLayout>
      <Temp>loading</Temp>
    </MainLayout>
  );
};

export default MainPresenter;
