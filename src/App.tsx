import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { Equalizer } from './components';

const getRandomInt = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const makeColor = (colorNum: number, colors: number) => {
  if (colors < 1) colors = 1;
  return colorNum * (360 / colors) % 360;
}

const renderColumns = (amount: number) => {
  const amplitudes: IAmplitude[] = []

  for(let i = 0; i < amount; i++) {
    const color = "hsl( " + makeColor(i, amount) + ", 100%, 50% )";
    amplitudes.push({  color, id: uuid() })
  }

  return { amplitudes, id: uuid() }
}

export interface IAmplitude {
  color: string;
  id: string;
}

export interface IEqualizer {
  id: string;
  amplitudes: IAmplitude[]
}

const App = () => {
  const [equalizer, setEqualizer] = useState<IEqualizer[]>([])
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setInterval(() => {
      setEqualizer(
        Array(150)
          .fill(0)
          .map(() => renderColumns(getRandomInt(30, 5)))
      )
    }, 100)
  }, [])

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value)
  }

  return <>
    <input value={value} onChange={handleChange} />
    <Equalizer equalizer={equalizer} />
  </>
}

export default App;