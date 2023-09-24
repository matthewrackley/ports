/**
 * @file index.ts
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
 * @type {InitialNumbers} - A type that represents the numbers 1-9.
 */
type InitialNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @type Numbers
 * - A type that represents the numbers 0-9.
 */
type Numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @type Tens - A type that represents the numbers 10-99.
 * - This type is a union of all possible two digit numbers.
 */
type Tens = `${InitialNumbers}${Numbers}`;
/**
 * @type Hundreds - A type that represents the numbers 100-999.
 * - This type is a union of all possible three digit numbers.
 */
type Hundreds = `${InitialNumbers}${Numbers}${Numbers}`;
/**
 * @type Thousands - A type that represents the numbers 1000-9999.
 * - This type is a union of all possible four digit numbers.
 */
type Thousands = `${InitialNumbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type TenThousands - A type that represents the numbers 10000-59999.
 * - This type is a union of all possible five digit numbers between 10000 and 59999.
 */
type TenThousands = `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFourThousand - A type that represents the numbers 60000-64999.
 * - This type is a union of all possible five digit numbers between 60000 and 64999.
 */
type SixtyFourThousand = `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousand - A type that represents the numbers 65500-65529.
 * - This type is a union of all possible five digit numbers between 65500 and 65529.
 */
type SixtyFiveThousand = `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFourHundred - A type that represents the numbers 65000-65499.
 * - This type is a union of all possible five digit numbers between 65000 and 65499.
 */
type SixtyFiveThousandFourHundred = `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundred - A type that represents the numbers 65500-65529.
 * - This type is a union of all possible five digit numbers between 65500 and 65529.
 */
type SixtyFiveThousandFiveHundred = `${655}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundredThirty - A type that represents the numbers 65530-65536.
 * - This type is a union of all possible five digit numbers between 65530 and 65536.
 */
type SixtyFiveThousandFiveHundredThirty = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`;
type PortsBackup = `${InitialNumbers}` | Tens | Hundreds | Thousands | TenThousands | SixtyFourThousand | SixtyFiveThousand | SixtyFiveThousandFourHundred | SixtyFiveThousandFiveHundred | SixtyFiveThousandFiveHundredThirty;

/**
 * @type Ports - A type that represents all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - The numbers 1-9 are represented by the type `InitialNumbers`.
 * - The numbers 0-9 are represented by the type `Numbers`.
 *
 * @requires InitialNumbers
 * @requires Numbers
 */
export type Ports = `${InitialNumbers}`
  | `${InitialNumbers}${Numbers}`
  | `${InitialNumbers}${Numbers}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`
  | `${InitialNumbers}${Numbers}${Numbers}${Numbers}`
  | `${655}${1 | 2 | 3 | 0}${1 | 2 | 3 | 4 | 5 | 6 | 0}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`
  | `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`;

export default Ports;
