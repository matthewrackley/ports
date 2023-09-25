/**
 * @file index.ts
 * @fileoverview This file creates multiple types.
 * - `Ports`
 * @module port-types
 * @license MIT
 * @version 1.0.0
 * @since 9/24/2023
 * @author Matthew Allen Rackley
 */

import type { InitialNumbers, Numbers, SixtyThousand, TenToFiftyThousand, Thousand } from './numbers';
/**
 * @type port - A type that represents all possible port numbers.
 * - This type is a union of all possible port numbers.
 * @implements InitialNumbers - A type that represents the numbers `1-9`.
 * @implements Numbers - A type that represents the numbers `0-9`.
 */
export type port = `${1 | 2 | 3 | 4 | 5}${Numbers}${Numbers}${Numbers}${Numbers}`
  | `${6}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}${Numbers}`
  | `${InitialNumbers}${Numbers}${Numbers}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers}`
  | `${65}${1 | 2 | 3 | 4 | 0}${Numbers}${Numbers}`
  | `${655}${1 | 2 | 3 | 0}${1 | 2 | 3 | 4 | 5 | 6 | 0}`
  | `${InitialNumbers}${Numbers}${Numbers}`
  | `${InitialNumbers}${Numbers}`
  | `${InitialNumbers}`;

/**
 * @type Ports - A type that represents all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - Uses `Thousand`, `TenToFiftyThousand`, and `SixtyThousand` to create a union of all possible po    rt numbers.
 * - Ranges from `1-65536`.
 */
export type ports = Thousand | TenToFiftyThousand | SixtyThousand;

export default port;
