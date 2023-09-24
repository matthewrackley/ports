// Purpose: Create types for all possible port numbers.
/**
 * @file numbers.ts
 * @fileoverview This file creates multiple types.
 * - `Numbers`
 * - `InitialNumbers`
 * - `Tens`
 * - `Hundreds`
 * - `Thousands`
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
import { Numbers } from 'base-nums';
export type * from 'base-nums';
/**
 * @type TenToFiftyThousand - A type that represents the numbers `10000-59999`.
 * - This type is a union of all possible five digit numbers between `10000` and `59999`.
 */
export type TenToFiftyThousand = `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`;
/**
 * @type FourtyNineThousand - A type that represents the numbers `49152-49999`.
 * - This type is a union of all possible five digit numbers between `49152` and `49999`.
 */
export type FourtyNineThousand = `${4915}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${491}${6 | 7 | 8 | 9}${Numbers}`
  | `${49}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${Numbers}${Numbers}`;
/**
 * @type SixtyFourThousand - A type that represents the numbers 60000-64999.
 * - This type is a union of all possible five digit numbers between 60000 and 64999.
 */
export type SixtyFourThousand = `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousand - A type that represents the numbers 65500-65529.
 * - This type is a union of all possible five digit numbers between 65500 and 65529.
 */
export type SixtyFiveThousand = `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFourHundred - A type that represents the numbers 65000-65499.
 * - This type is a union of all possible five digit numbers between 65000 and 65499.
 */
export type SixtyFiveThousandFourHundred = `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundred - A type that represents the numbers 65500-65529.
 * - This type is a union of all possible five digit numbers between 65500 and 65529.
 */
export type SixtyFiveThousandFiveHundred = `${655}${1 | 2 | 0}${Numbers}`;
/**
 * @type SixtyFiveThousandFiveHundredThirty - A type that represents the numbers 65530-65536.
 * - This type is a union of all possible five digit numbers between 65530 and 65536.
 */
export type SixtyFiveThousandFiveHundredThirty = `${6553}${1 | 2 | 3 | 4 | 5 | 6 | 0}`;
/**
 * @type SixtyFiveThousandFiveHundredThirtyFive - A type that represents the numbers `65530-65535`.
 * - This type is a union of all possible five digit numbers between `65530` and `65535`.
 */
export type SixtyFiveThousandFiveHundredThirtyFive = `${6553}${1 | 2 | 3 | 4 | 5 | 0}`;

export type * as default from 'numbers';
