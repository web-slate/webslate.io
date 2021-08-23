import React from 'react'

const BigOValues = {
  1: {
    notation: 'Constant',
    value: '1'
  },
  'log log n': {
    notation: 'Double Logarithmic',
    value: 'Log Log n'
  },
  'log n': {
    notation: 'Logarithmic',
    value: 'Log n'
  },
  '√n': {
    notation: 'Square Root',
    value: '√n'
  },
  'n': {
    notation: 'Linear',
    value: 'n'
  },
  'n2': {
    notation: 'Quadratic',
    value: (
      <>
        n<sup>2</sup>
      </>
    )
  },
  '2n': {
    notation: 'Exponential',
    value: (
      <>
        2<sup>n</sup>
      </>
    )
  },
  'n!': {
    notation: 'Factorial',
    value: 'n!'
  }
}

const BigO = ({ type = 'time', value, children }) => {
  const { notation, value: oValue } = BigOValues[value] || {}
  if (!notation) {
    return null;
  }

  return (
    <>
      <strong>{(type === 'time') ? 'Time  Complexity' : 'Space Complexity'}: </strong>
      O({oValue}) - {notation}
      {children}
      <br />
    </>
  )
};

export default BigO