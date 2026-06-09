// Annual nominal returns from Aswath Damodaran, NYU Stern, "Returns by year" worksheet.
// Source workbook: https://pages.stern.nyu.edu/~adamodar/pc/datasets/histretSP.xls
export interface HistoricalReturnYear {
  year: number;
  stock: number;
  bond: number;
  cash: number;
  inflation: number;
}

export const HISTORICAL_RETURNS: HistoricalReturnYear[] = [
  {
    year: 1928,
    stock: 0.438112,
    bond: 0.008355,
    cash: 0.0308,
    inflation: -0.011561
  },
  {
    year: 1929,
    stock: -0.082979,
    bond: 0.042038,
    cash: 0.0316,
    inflation: 0.005848
  },
  {
    year: 1930,
    stock: -0.251236,
    bond: 0.045409,
    cash: 0.0455,
    inflation: -0.063953
  },
  {
    year: 1931,
    stock: -0.438375,
    bond: -0.025589,
    cash: 0.0231,
    inflation: -0.093168
  },
  {
    year: 1932,
    stock: -0.086424,
    bond: 0.087903,
    cash: 0.0107,
    inflation: -0.10274
  },
  {
    year: 1933,
    stock: 0.499822,
    bond: 0.018553,
    cash: 0.0096,
    inflation: 0.007634
  },
  {
    year: 1934,
    stock: -0.011886,
    bond: 0.079634,
    cash: 0.002783,
    inflation: 0.015152
  },
  {
    year: 1935,
    stock: 0.467404,
    bond: 0.04472,
    cash: 0.001675,
    inflation: 0.029851
  },
  {
    year: 1936,
    stock: 0.319434,
    bond: 0.050179,
    cash: 0.001725,
    inflation: 0.014493
  },
  {
    year: 1937,
    stock: -0.353367,
    bond: 0.013791,
    cash: 0.002758,
    inflation: 0.028571
  },
  {
    year: 1938,
    stock: 0.292827,
    bond: 0.042132,
    cash: 0.00065,
    inflation: -0.027778
  },
  {
    year: 1939,
    stock: -0.010976,
    bond: 0.044123,
    cash: 0.000458,
    inflation: 0
  },
  {
    year: 1940,
    stock: -0.106729,
    bond: 0.054025,
    cash: 0.000358,
    inflation: 0.007143
  },
  {
    year: 1941,
    stock: -0.127715,
    bond: -0.020222,
    cash: 0.001292,
    inflation: 0.099291
  },
  {
    year: 1942,
    stock: 0.191738,
    bond: 0.022949,
    cash: 0.003425,
    inflation: 0.090323
  },
  {
    year: 1943,
    stock: 0.250613,
    bond: 0.0249,
    cash: 0.0038,
    inflation: 0.029586
  },
  {
    year: 1944,
    stock: 0.190307,
    bond: 0.025776,
    cash: 0.0038,
    inflation: 0.022988
  },
  {
    year: 1945,
    stock: 0.358211,
    bond: 0.038044,
    cash: 0.0038,
    inflation: 0.022472
  },
  {
    year: 1946,
    stock: -0.084291,
    bond: 0.031284,
    cash: 0.0038,
    inflation: 0.181319
  },
  {
    year: 1947,
    stock: 0.052,
    bond: 0.009197,
    cash: 0.006008,
    inflation: 0.088372
  },
  {
    year: 1948,
    stock: 0.057046,
    bond: 0.01951,
    cash: 0.01045,
    inflation: 0.029915
  },
  {
    year: 1949,
    stock: 0.183032,
    bond: 0.046635,
    cash: 0.01115,
    inflation: -0.020747
  },
  {
    year: 1950,
    stock: 0.308055,
    bond: 0.004296,
    cash: 0.012033,
    inflation: 0.059322
  },
  {
    year: 1951,
    stock: 0.236785,
    bond: -0.002953,
    cash: 0.015175,
    inflation: 0.06
  },
  {
    year: 1952,
    stock: 0.18151,
    bond: 0.02268,
    cash: 0.017225,
    inflation: 0.007547
  },
  {
    year: 1953,
    stock: -0.012082,
    bond: 0.041438,
    cash: 0.018908,
    inflation: 0.007491
  },
  {
    year: 1954,
    stock: 0.525633,
    bond: 0.032898,
    cash: 0.009375,
    inflation: -0.007435
  },
  {
    year: 1955,
    stock: 0.325973,
    bond: -0.013364,
    cash: 0.017243,
    inflation: 0.003745
  },
  {
    year: 1956,
    stock: 0.074395,
    bond: -0.022558,
    cash: 0.026214,
    inflation: 0.029851
  },
  {
    year: 1957,
    stock: -0.104574,
    bond: 0.06797,
    cash: 0.032246,
    inflation: 0.028986
  },
  {
    year: 1958,
    stock: 0.4372,
    bond: -0.02099,
    cash: 0.017665,
    inflation: 0.017606
  },
  {
    year: 1959,
    stock: 0.120565,
    bond: -0.026466,
    cash: 0.03386,
    inflation: 0.017301
  },
  {
    year: 1960,
    stock: 0.003365,
    bond: 0.116395,
    cash: 0.02873,
    inflation: 0.013605
  },
  {
    year: 1961,
    stock: 0.266377,
    bond: 0.020609,
    cash: 0.023525,
    inflation: 0.006711
  },
  {
    year: 1962,
    stock: -0.088115,
    bond: 0.056935,
    cash: 0.027724,
    inflation: 0.013333
  },
  {
    year: 1963,
    stock: 0.226119,
    bond: 0.016842,
    cash: 0.03156,
    inflation: 0.016447
  },
  {
    year: 1964,
    stock: 0.164155,
    bond: 0.037281,
    cash: 0.035457,
    inflation: 0.009709
  },
  {
    year: 1965,
    stock: 0.123992,
    bond: 0.007189,
    cash: 0.039491,
    inflation: 0.019231
  },
  {
    year: 1966,
    stock: -0.09971,
    bond: 0.029079,
    cash: 0.048557,
    inflation: 0.034591
  },
  {
    year: 1967,
    stock: 0.23803,
    bond: -0.015806,
    cash: 0.042935,
    inflation: 0.030395
  },
  {
    year: 1968,
    stock: 0.108149,
    bond: 0.032746,
    cash: 0.053376,
    inflation: 0.047198
  },
  {
    year: 1969,
    stock: -0.082414,
    bond: -0.05014,
    cash: 0.066685,
    inflation: 0.061972
  },
  {
    year: 1970,
    stock: 0.035611,
    bond: 0.167547,
    cash: 0.06391,
    inflation: 0.055703
  },
  {
    year: 1971,
    stock: 0.142212,
    bond: 0.097869,
    cash: 0.043343,
    inflation: 0.032663
  },
  {
    year: 1972,
    stock: 0.187554,
    bond: 0.028184,
    cash: 0.040618,
    inflation: 0.034063
  },
  {
    year: 1973,
    stock: -0.14308,
    bond: 0.036587,
    cash: 0.070354,
    inflation: 0.087059
  },
  {
    year: 1974,
    stock: -0.259018,
    bond: 0.019886,
    cash: 0.078458,
    inflation: 0.123377
  },
  {
    year: 1975,
    stock: 0.369951,
    bond: 0.036053,
    cash: 0.057864,
    inflation: 0.069364
  },
  {
    year: 1976,
    stock: 0.23831,
    bond: 0.159846,
    cash: 0.049766,
    inflation: 0.048649
  },
  {
    year: 1977,
    stock: -0.069797,
    bond: 0.0129,
    cash: 0.05261,
    inflation: 0.06701
  },
  {
    year: 1978,
    stock: 0.065093,
    bond: -0.007776,
    cash: 0.071783,
    inflation: 0.090177
  },
  {
    year: 1979,
    stock: 0.185195,
    bond: 0.006707,
    cash: 0.100543,
    inflation: 0.132939
  },
  {
    year: 1980,
    stock: 0.317352,
    bond: -0.029897,
    cash: 0.113919,
    inflation: 0.125163
  },
  {
    year: 1981,
    stock: -0.047024,
    bond: 0.081992,
    cash: 0.140362,
    inflation: 0.089224
  },
  {
    year: 1982,
    stock: 0.204191,
    bond: 0.328145,
    cash: 0.1109,
    inflation: 0.038298
  },
  {
    year: 1983,
    stock: 0.223372,
    bond: 0.032002,
    cash: 0.0895,
    inflation: 0.03791
  },
  {
    year: 1984,
    stock: 0.061461,
    bond: 0.137334,
    cash: 0.0992,
    inflation: 0.039487
  },
  {
    year: 1985,
    stock: 0.312351,
    bond: 0.257125,
    cash: 0.0772,
    inflation: 0.037987
  },
  {
    year: 1986,
    stock: 0.184946,
    bond: 0.242842,
    cash: 0.0615,
    inflation: 0.010979
  },
  {
    year: 1987,
    stock: 0.058127,
    bond: -0.049605,
    cash: 0.0596,
    inflation: 0.044344
  },
  {
    year: 1988,
    stock: 0.165372,
    bond: 0.082236,
    cash: 0.0689,
    inflation: 0.044194
  },
  {
    year: 1989,
    stock: 0.314752,
    bond: 0.176936,
    cash: 0.0839,
    inflation: 0.046473
  },
  {
    year: 1990,
    stock: -0.030645,
    bond: 0.062354,
    cash: 0.0775,
    inflation: 0.061063
  },
  {
    year: 1991,
    stock: 0.302348,
    bond: 0.150045,
    cash: 0.0554,
    inflation: 0.030643
  },
  {
    year: 1992,
    stock: 0.074937,
    bond: 0.093616,
    cash: 0.0351,
    inflation: 0.029007
  },
  {
    year: 1993,
    stock: 0.099671,
    bond: 0.14211,
    cash: 0.0307,
    inflation: 0.027484
  },
  {
    year: 1994,
    stock: 0.013259,
    bond: -0.080367,
    cash: 0.0437,
    inflation: 0.026749
  },
  {
    year: 1995,
    stock: 0.371952,
    bond: 0.234808,
    cash: 0.0566,
    inflation: 0.025384
  },
  {
    year: 1996,
    stock: 0.22681,
    bond: 0.014286,
    cash: 0.0515,
    inflation: 0.033225
  },
  {
    year: 1997,
    stock: 0.331037,
    bond: 0.099391,
    cash: 0.052,
    inflation: 0.017024
  },
  {
    year: 1998,
    stock: 0.28338,
    bond: 0.149214,
    cash: 0.0491,
    inflation: 0.016119
  },
  {
    year: 1999,
    stock: 0.208854,
    bond: -0.082542,
    cash: 0.0478,
    inflation: 0.026846
  },
  {
    year: 2000,
    stock: -0.090318,
    bond: 0.166553,
    cash: 0.06,
    inflation: 0.033868
  },
  {
    year: 2001,
    stock: -0.118498,
    bond: 0.055722,
    cash: 0.0348,
    inflation: 0.015517
  },
  {
    year: 2002,
    stock: -0.21966,
    bond: 0.151164,
    cash: 0.0164,
    inflation: 0.023769
  },
  {
    year: 2003,
    stock: 0.283558,
    bond: 0.003753,
    cash: 0.0103,
    inflation: 0.018795
  },
  {
    year: 2004,
    stock: 0.107428,
    bond: 0.044907,
    cash: 0.014,
    inflation: 0.032556
  },
  {
    year: 2005,
    stock: 0.048345,
    bond: 0.028675,
    cash: 0.0322,
    inflation: 0.034157
  },
  {
    year: 2006,
    stock: 0.156126,
    bond: 0.01961,
    cash: 0.0485,
    inflation: 0.025406
  },
  {
    year: 2007,
    stock: 0.054847,
    bond: 0.102099,
    cash: 0.0448,
    inflation: 0.040813
  },
  {
    year: 2008,
    stock: -0.365523,
    bond: 0.201013,
    cash: 0.014,
    inflation: 0.000914
  },
  {
    year: 2009,
    stock: 0.259352,
    bond: -0.111167,
    cash: 0.0015,
    inflation: 0.027213
  },
  {
    year: 2010,
    stock: 0.148211,
    bond: 0.084629,
    cash: 0.0014,
    inflation: 0.014957
  },
  {
    year: 2011,
    stock: 0.020984,
    bond: 0.160353,
    cash: 0.0005,
    inflation: 0.029624
  },
  {
    year: 2012,
    stock: 0.158906,
    bond: 0.029716,
    cash: 0.0009,
    inflation: 0.01741
  },
  {
    year: 2013,
    stock: 0.321451,
    bond: -0.091046,
    cash: 0.0006,
    inflation: 0.015017
  },
  {
    year: 2014,
    stock: 0.135244,
    bond: 0.107462,
    cash: 0.0003,
    inflation: 0.007565
  },
  {
    year: 2015,
    stock: 0.013789,
    bond: 0.012843,
    cash: 0.0005,
    inflation: 0.007295
  },
  {
    year: 2016,
    stock: 0.117731,
    bond: 0.006906,
    cash: 0.0032,
    inflation: 0.020746
  },
  {
    year: 2017,
    stock: 0.216055,
    bond: 0.028017,
    cash: 0.0095,
    inflation: 0.021091
  },
  {
    year: 2018,
    stock: -0.042269,
    bond: -0.000167,
    cash: 0.0197,
    inflation: 0.019102
  },
  {
    year: 2019,
    stock: 0.312117,
    bond: 0.096356,
    cash: 0.0211,
    inflation: 0.022851
  },
  {
    year: 2020,
    stock: 0.180232,
    bond: 0.113319,
    cash: 0.0036,
    inflation: 0.01362
  },
  {
    year: 2021,
    stock: 0.284689,
    bond: -0.04416,
    cash: 0.0004,
    inflation: 0.070364
  },
  {
    year: 2022,
    stock: -0.180375,
    bond: -0.178282,
    cash: 0.0209,
    inflation: 0.064544
  },
  {
    year: 2023,
    stock: 0.260607,
    bond: 0.0388,
    cash: 0.0528,
    inflation: 0.033521
  },
  {
    year: 2024,
    stock: 0.248786,
    bond: -0.016372,
    cash: 0.0518,
    inflation: 0.028881
  },
  {
    year: 2025,
    stock: 0.177237,
    bond: 0.077955,
    cash: 0.0421,
    inflation: 0.027351
  }
];
