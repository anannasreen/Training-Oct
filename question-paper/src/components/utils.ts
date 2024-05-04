/* eslint-disable array-callback-return */
export const getQuestionNumberToOptionsMap = (
  options: Record<number, string>
) => {
  const questionNumbers = Object.keys(options);

  const optionA = (questionNumbersMap: any[]) => {
    let count = 0;

    for (let i = 0; i < questionNumbersMap.length; i++) {
      if (questionNumbersMap[i] === "0") {
        count++;
      }
    }

    return count;
  };

  const optionB = (questionNumbersMap: any[]) => {
    let count = 0;

    for (let i = 0; i < questionNumbersMap.length; i++) {
      if (questionNumbersMap[i] === "1") {
        count++;
      }
    }

    return count;
  };

  const P = () => {
    const questionNumbersMap = questionNumbers.map((qNo) => {
      if (+qNo % 7 === 1) {
        return options[+qNo];
      }
    });

    return `P(${optionA(questionNumbersMap)}|${optionB(questionNumbersMap)})`;
  };

  const Q = () => {
    const questionNumbersMap = questionNumbers.map((qNo) => {
      if (+qNo % 7 === 2 || +qNo % 7 === 3) {
        return options[+qNo];
      }
    });

    return `Q(${optionA(questionNumbersMap)}|${optionB(questionNumbersMap)})`;
  };

  const R = () => {
    const questionNumbersMap = questionNumbers.map((qNo) => {
      if (+qNo % 7 === 4 || +qNo % 7 === 5) {
        return options[+qNo];
      }
    });

    return `R(${optionA(questionNumbersMap)}|${optionB(questionNumbersMap)})`;
  };

  const S = () => {
    const questionNumbersMap = questionNumbers.map((qNo) => {
      if (+qNo % 7 === 6 || +qNo % 7 === 0) {
        return options[+qNo];
      }
    });

    return `S(${optionA(questionNumbersMap)}|${optionB(questionNumbersMap)})`;
  };

  //   console.log(P(), Q(), R(), S());
  return `${P()}, ${Q()}, ${R()}, ${S()}`;
};

// test cases

let testCases: any = [
  {
    value: { 1: "0", 2: "1", 3: "1", 4: "0", 5: "0", 6: "1", 7: "1" },
    expected: "P(1|0), Q(0|2), R(2|0), S(0|2)",
  },
  {
    value: { 1: "0", 2: "1" },
    expected: "P(1|0), Q(0|1), R(0|0), S(0|0)",
  },
  {
    value: {
      1: "0",
      2: "1",
      3: "1",
      4: "0",
      5: "0",
      6: "1",
      7: "1",
      8: "0",
      9: "1",
      10: "1",
      11: "0",
      12: "0",
      13: "0",
      14: "1",
    },
    expected: "P(2|0), Q(0|4), R(4|0), S(1|3)",
  },
  {
    value: {
      1: "1",
      2: "1",
      3: "1",
      4: "0",
      5: "0",
      6: "1",
      7: "1",
      8: "0",
      9: "0",
      10: "1",
      11: "0",
      12: "1",
      13: "0",
      14: "1",
      15: "0",
      16: "1",
      17: "1",
      18: "1",
      19: "0",
      20: "1",
      21: "0",
      22: "0",
      23: "0",
      24: "1",
      25: "0",
      26: "1",
    },
    expected: "P(3|1), Q(2|6), R(5|3), S(2|4)",
  },
  {
    value: {
      1: "0",
      2: "1",
      3: "0",
      4: "1",
      5: "0",
      6: "1",
      7: "1",
      8: "1",
      9: "0",
      10: "1",
      11: "0",
      12: "0",
      13: "1",
      14: "1",
      15: "0",
      16: "0",
      17: "1",
      18: "0",
      19: "1",
      20: "1",
      21: "0",
      22: "1",
      23: "0",
      24: "0",
      25: "1",
      26: "0",
      27: "0",
      28: "1",
      29: "0",
      30: "0",
      31: "1",
      32: "1",
      33: "0",
      34: "1",
      35: "1",
      36: "0",
      37: "1",
      38: "0",
      39: "0",
      40: "0",
      41: "0",
      42: "1",
      43: "1",
      44: "1",
      45: "1",
      46: "0",
      47: "1",
      48: "0",
      49: "1",
      50: "1",
      51: "0",
      52: "1",
      53: "0",
      54: "1",
      55: "0",
      56: "0",
      57: "1",
      58: "1",
      59: "0",
      60: "0",
      61: "1",
      62: "1",
      63: "0",
      64: "0",
      65: "1",
      66: "0",
      67: "1",
      68: "0",
      69: "0",
      70: "1",
    },
    expected: "P(5|5), Q(10|10), R(12|8), S(8|12)",
  },
  {
    value: {
      1: "0",
      2: "1",
      3: "0",
      4: "1",
      5: "0",
      6: "1",
      7: "1",
      8: "1",
      9: "0",
      10: "1",
      11: "0",
      12: "0",
      13: "1",
      14: "1",
      15: "0",
      16: "0",
      17: "1",
      18: "0",
      19: "1",
      20: "1",
      21: "0",
      22: "1",
      23: "0",
      24: "0",
      25: "1",
      26: "0",
      27: "0",
      28: "1",
      29: "0",
      30: "0",
      31: "1",
      32: "1",
      33: "0",
      34: "1",
      35: "1",
      36: "0",
      37: "1",
      38: "0",
      39: "0",
      40: "0",
      41: "0",
      42: "1",
      43: "1",
      44: "1",
      45: "1",
      46: "0",
      47: "1",
      48: "0",
      49: "1",
      50: "1",
      51: "0",
      52: "1",
      53: "0",
      54: "1",
      55: "0",
      56: "0",
      57: "1",
      58: "1",
      59: "0",
      60: "0",
      61: "1",
      62: "1",
      63: "0",
      64: "0",
      65: "1",
      66: "0",
      67: "1",
      68: "0",
      69: "0",
      70: "1",
      71: "1",
      72: "0",
      73: "0",
      74: "1",
      75: "1",
      76: "0",
      77: "1",
      78: "1",
      79: "1",
      80: "0",
      81: "1",
      82: "1",
      83: "0",
      84: "0",
      85: "1",
      86: "1",
      87: "1",
      88: "0",
      89: "0",
      90: "0",
      91: "1",
      92: "1",
      93: "0",
      94: "1",
      95: "0",
      96: "1",
      97: "1",
      98: "0",
      99: "1",
      100: "0",
    },
    expected: "P(5|10), Q(15|14), R(15|13), S(13|15)",
  },
];

function test_getQuestionNumberToOptionsMap(
  tcs: { value: Record<number, string>; expected: string }[]
) {
  tcs.forEach((tc, i) => {
    let got = getQuestionNumberToOptionsMap(tc.value);

    if (got === tc.expected) {
      console.log(`test case ${i + 1} passed`);
    } else {
      console.log(
        `test case ${i + 1} failed; expected output = ${
          tc.expected
        } but received ${got}`
      );
    }
  });
}

console.log(test_getQuestionNumberToOptionsMap(testCases));
