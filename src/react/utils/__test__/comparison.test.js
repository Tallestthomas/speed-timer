import {
  getDuration,
  getBestComparisons,
  getPBComparison,
} from '..';

describe('getDuration', () => {
  it('should return 1000', () => {
    const splits = [
      {
        endedAt: {
          realtimeMS: 2000,
        },
      },
      {
        endedAt: {
          realtimeMS: 3000,
        },
      },

    ];

    expect(getDuration(splits, 1)).toEqual(1000);
  });
});

describe('getBestComparison', () => {
  const splits = [
    {
      endedAt: {
        realtimeMS: 2000,
      },
      bestDuration: {
        realtimeMS: 1800,
      },
    },
    {
      endedAt: {
        realtimeMS: 3000,
      },
      bestDuration: {
        realtimeMS: 1200,
      },
    },
  ];

  const comparisons = getBestComparisons(splits);

  it('should return array with length of 2', () => {
    expect(comparisons.length).toEqual(2);
  });

  it('should have the values of 200 & -200', () => {
    expect(comparisons[0]).toEqual(200);
    expect(comparisons[1]).toEqual(-200);
  });
});

describe('getPBComparisons', () => {
  const split = {
    endedAt: {
      realtimeMS: 2000,
    },
    personalBest: {
      realtimeMS: 2200,
    },
  };

  const comparison = getPBComparison(split);

  it('should return -200', () => {
    expect(comparison).toEqual(-200);
  });
});