import React from 'react';
import { useMediaQuery } from 'react-responsive'
//Spinners
import khakiDogSpin from '../assets/Spinners/khakiDogSpin.svg';
import greyDogSpin from '../assets/Spinners/greyDogSpin.svg';

//Exporting Spinners Below
export function  KhakiDogSpinn() {
    return (
      <object type="image/svg+xml"  data={khakiDogSpin}>svg-animation</object>
    );
  }
  export function  GreyDogSpinn() {
    return (
      <object type="image/svg+xml" data={greyDogSpin}>svg-animation</object>
    );
  }



  // Media Query Constraints Below
const Large = ({ children }) => {
    const isLarge = useMediaQuery({ minWidth: 800 })
    return isLarge ? children : null
  }
  const Medium = ({ children }) => {
    const isMedium = useMediaQuery({ minWidth: 551, maxWidth: 799 })
    return isMedium ? children : null
  }
  const Small = ({ children }) => {
    const isSmall = useMediaQuery({ minWidth: 401, maxWidth: 550 })
    return isSmall ? children : null
  }
  const Tiny = ({ children }) => {
    const isTiny = useMediaQuery({ minWidth: 100, maxWidth: 400 })
    return isTiny ? children : null
  }

  
  //Spinners Exported with constraints
export const GreyDogSpinner = () => (
    <div>
      <Large><GreyDogSpinn /></Large>
      <Medium><GreyDogSpinn /></Medium>
      <Small><GreyDogSpinn /></Small>
      <Tiny><GreyDogSpinn /></Tiny>
    </div>
  )
  export const KhakiDogSpinner = () => (
      <div>
        <Large><KhakiDogSpinn /></Large>
        <Medium><KhakiDogSpinn /></Medium>
        <Small><KhakiDogSpinn /></Small>
        <Tiny><KhakiDogSpinn /></Tiny>
      </div>
    )