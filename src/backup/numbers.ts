/**
 * @file numbers.ts
 * @fileoverview This file creates two types.
 * - `Numbers`
 * - `Ports`
 * @module ports
 * @license MIT
 * @version 1.0.0
 * @since 9/24/2023
 * @author Matthew Allen Rackley
 */
/**
 * @type InitialNumbers - A type that represents the numbers `1-9`.
 * - This type is a union of all possible single digit `Natural Numbers`.
 */
type InitialNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @type Numbers
 * - A type that represents the numbers `0-9`.
 * - This type is a union of all possible single digit `Whole Numbers`.
 */
type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @type Tens - A type that represents the numbers `10-99`.
 * - This type is a union of all possible two digit numbers.
 */
type Tens = `${InitialNumbers}${Numbers}`;
/**
 * @type Hundreds - A type that represents the numbers `100-999`.
 * - This type is a union of all possible three digit numbers.
 */
type Hundreds = `${InitialNumbers}${Numbers}${Numbers}`;
/**
 * @type Thousands - A type that represents the numbers `1000-9999`.
 * - This type is a union of all possible four digit numbers.
 */
type Thousands = `${InitialNumbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type TenToFiftyThousand - A type that represents the numbers `10000-59999`.
 * - This type is a union of all possible five digit numbers between `10000 and 59999`.
 */
type TenToFiftyThousand = `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type TenThousand - A type that represents the numbers `10000-19999`.
 * - This type is a union of all possible five digit numbers between `10000` and `19999`.
 */
type TenThousand = `${1}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type TwentyThousand - A type that represents the numbers `20000-29999`.
 * - This type is a union of all possible five digit numbers between `20000` and `29999`.
 */
type TwentyThousand = `${2}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type ThirtyThousand - A type that represents the numbers `30000-39999`.
 * - This type is a union of all possible five digit numbers between `30000` and `39999`.
 */
type ThirtyThousand = `${3}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FourtyThousand - A type that represents the numbers `40000-49999`.
 * - This type is a union of all possible five digit numbers between `40000` and `49999`.
 */
type FourtyThousand = `${4}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FiftyThousand - A type that represents the numbers `50000-59999`.
 * - This type is a union of all possible five digit numbers between `50000` and `59999`.
 */
type FiftyThousand = `${5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFourThousand - A type that represents the numbers `60000-64999`.
 * - This type is a union of all possible five digit numbers between `60000` and `64999`.
 */
type SixtyFourThousand = `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousand - A type that represents the numbers `65500-65529`.
 * - This type is a union of all possible five digit numbers between `65500` and `65529`.
 */
type SixtyFiveThousand = `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFourHundred - A type that represents the numbers `65000-65499`.
 * - This type is a union of all possible five digit numbers between `65000` and `65499`.
 */
type SixtyFiveThousandFourHundred = `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundred - A type that represents the numbers `65500-65529`.
 * - This type is a union of all possible five digit numbers between `65500` and `65529`.
 */
type SixtyFiveThousandFiveHundred = `${655}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundredThirty - A type that represents the numbers `65530-65536`.
 * - This type is a union of all possible five digit numbers between `65530` and `65536`.
 */
type SixtyFiveThousandFiveHundredThirty = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`;
/**
 * @type SixtyThousand - A type that represents the numbers `60000-65536`.
 * - This type is a union of all possible five digit numbers between `60000` and `65536`.
 */
type SixtyThousand = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`
  | `${655}${1 | 2 | 0}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`;
/**
 * @type NumericLiterals - A type that represents an object containing all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - The numbers `1-9` are represented by the type `InitialNumbers`.
 * - The numbers `0-9` are represented by the type `Numbers`.
 * - The numbers `10-99` are represented by the type `Tens`.
 * - The numbers `100-999` are represented by the type `Hundreds`.
 * - The numbers `1000-9999` are represented by the type `Thousands`.
 * - The numbers `10000-59999` are represented by the type `TenToFiftyThousand`.
 * - The numbers `60000-64999` are represented by the type `SixtyFourThousand`.
 * - The numbers `65000-65499` are represented by the type `SixtyFiveThousandFourHundred`.
 * - The numbers `65500-65529` are represented by the type `SixtyFiveThousand`.
 * - The numbers `65530-65536` are represented by the type `SixtyFiveThousandFiveHundredThirty`.
 */
export type NumericLiterals = {
  InitialNumbers: InitialNumbers;
  Numbers: Numbers;
  Tens: Tens;
  Hundreds: Hundreds;
  Thousands: Thousands;
  TenToFiftyThousand: TenToFiftyThousand;
  SixtyFourThousand: SixtyFourThousand;
  SixtyFiveThousand: SixtyFiveThousand;
  SixtyFiveThousandFourHundred: SixtyFiveThousandFourHundred;
  SixtyFiveThousandFiveHundred: SixtyFiveThousandFiveHundred;
  SixtyFiveThousandFiveHundredThirty: SixtyFiveThousandFiveHundredThirty;
};
