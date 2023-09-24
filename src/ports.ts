/**
 * @file index.ts
 * @fileoverview This file creates one types.
 * - `Ports`
 * @module ports
 * @license MIT
 * @version 1.0.0
 * @since 9/24/2023
 * @author Matthew Allen Rackley
 */
import type { Thousand, TenToFiftyThousand, SixtyThousand } from 'numbers';
export type * from 'base-nums';

/**
 * @type Ports - A type that represents all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - All types that represents an object containing all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - The numbers `1-9` are represented by the type `InitialNumbers`.
 * - The numbers `10-99` are represented by the type `Tens`.
 * - The numbers `100-999` are represented by the type `Hundreds`.
 * - The numbers `1000-9999` are represented by the type `Thousands`.
 * - The numbers `10000-59999` are represented by the type `FiftyThousand`.
 * - The numbers `60000-64999` are represented by the type `SixtyFourThousand`.
 * - The numbers `65000-65499` are represented by the type `SixtyFiveThousandFourHundred`.
 * - The numbers `65500-65529` are represented by the type `SixtyFiveThousand`.
 * - The numbers `65530-65536` are represented by the type `SixtyFiveThousandFiveHundredThirty`.
 */
export type Ports = Thousand | TenToFiftyThousand | SixtyThousand;

export default Ports;
