// Purpose: Create numerical types for all possible port numbers.
/**
 * @file numbers.ts
 * @fileoverview This file creates multiple types.
 * - `InitialNumbers`
 * - `Numbers`
 * - `Thousands`
 * - `TenThousand`
 * - `TwentyThousand`
 * - `ThirtyThousand`
 * - `FourtyThousand`
 * - `FiftyThousand`
 * - `SixtyThousand`
 * - `TenToFiftyThousand`
 * - `SixtyFourThousand`
 * - `SixtyFiveThousand`
 * - `SixtyFiveThousandFourHundred`
 * - `SixtyFiveThousandFiveHundred`
 * - `SixtyFiveThousandFiveHundredThirty`
 * @module numbers
 * @license MIT
 * @version 1.0.0
 * @since 9/24/2023
 * @author Matthew Allen Rackley
 */
'use strict';

/* ========================================================================== */
/*                           Necessary Number Types                           */
/* ========================================================================== */

/**
 * @type InitialNumbers
 * - A type that represents the numbers `1-9`.
 * - This type is a union of all possible single digit `Natural Numbers`.
 */
export type InitialNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @type Numbers
 * - A type that represents the numbers `0-9`.
 * - This type is a union of all possible single digit `Whole Numbers`.
 */
export type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/* ========================================================================== */
/*                       Default And Normal Number Types                      */
/* ========================================================================== */

/**
 * @type Thousand
 * - A type that represents the numbers `1-9999`.
 * - This type is a union of all possible four digit numbers between `1` and `9999`.
 */
export type Thousand = `${InitialNumbers}${Numbers}${Numbers}${Numbers}`
  | `${InitialNumbers}${Numbers}${Numbers}`
  | `${InitialNumbers}${Numbers}`
  | `${InitialNumbers}`;
/**
 * @type TenThousand
 * - A type that represents the numbers `10000-19999`.
 * - This type is a union of all possible five digit numbers between `10000` and `19999`.
 */
export type TenThousand = `${1}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type TwentyThousand
 * - A type that represents the numbers `20000-29999`.
 * - This type is a union of all possible five digit numbers between `20000` and `29999`.
 */
export type TwentyThousand = `${2}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type ThirtyThousand
 * - A type that represents the numbers `30000-39999`.
 * - This type is a union of all possible five digit numbers between `30000` and `39999`.
 */
export type ThirtyThousand = `${3}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FourtyThousand
 * - A type that represents the numbers `40000-49999`.
 * - This type is a union of all possible five digit numbers between `40000` and `49999`.
 */
export type FourtyThousand = `${4}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FiftyThousand
 * - A type that represents the numbers `50000-59999`.
 * - This type is a union of all possible five digit numbers between `50000` and `59999`.
 */
export type FiftyThousand = `${5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyThousand
 * - A type that represents the numbers `60000-65536`.
 * - This type is a union of all possible five digit numbers between `60000` and `65536`.
 */
export type SixtyThousand = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`
  | `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`
  | `${655}${1 | 2 | 0}${Numbers}`

/* ========================================================================== */
/*                           Additional Number Types                          */
/* ========================================================================== */

/**
 * @type TenToFiftyThousand
 * - A type that represents the numbers `10000-59999`.
 * - This type is a union of all possible five digit numbers between `10000` and `59999`.
 */
export type TenToFiftyThousand = `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FourtyNineThousand
 * - A type that represents the numbers `49152-49999`.
 * - This type is a union of all possible five digit numbers between `49152` and `49999`.
 */
export type FourtyNineThousand = `${4915}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${491}${6 | 7 | 8 | 9}${Numbers}`
  | `${49}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${Numbers}${Numbers}`;
/**
 * @type SixtyFourThousand
 * - A type that represents the numbers `60000-64999`.
 * - This type is a union of all possible five digit numbers between `60000` and `64999`.
 */
export type SixtyFourThousand = `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousand
 * - A type that represents the numbers `65500-65529`.
 * - This type is a union of all possible five digit numbers between `65500` and `65529`.
 */
export type SixtyFiveThousand = `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFourHundred
 * - A type that represents the numbers `65000-65499`.
 * - This type is a union of all possible five digit numbers between `65000` and `65499`.
 */
export type SixtyFiveThousandFourHundred = `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundred
 * - A type that represents the numbers `65500-65529`.
 * - This type is a union of all possible five digit numbers between `65500` and `65529`.
 */
export type SixtyFiveThousandFiveHundred = `${655}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundredThirty
 * - A type that represents the numbers `65530-65536`.
 * - This type is a union of all possible five digit numbers between `65530` and `65536`.
 */
export type SixtyFiveThousandFiveHundredThirty = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`;
/**
 * @type SixtyFiveThousandFiveHundredThirtyFive
 * - A type that represents the numbers `65530-65535`.
 * - This type is a union of all possible five digit numbers between `65530` and `65535`.
 */
export type SixtyFiveThousandFiveHundredThirtyFive = `${6553}${1 | 2 | 3 | 4 | 5 | 0}`;

export default Numbers;
