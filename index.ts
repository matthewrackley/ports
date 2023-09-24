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
type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Ports = `${1 | 2 | 3 | 4 | 5}${Numbers | 0}${Numbers | 0}${Numbers | 0}${Numbers | 0}`
  | `${6}${1 | 2 | 3 | 4 | 0}${Numbers | 0}${Numbers | 0}${Numbers | 0}`
  | `${65}${1 | 2 | 3 | 4 | 5 | 0}${1 | 2 | 0}${Numbers | 0}`
  | `${65}${1 | 2 | 3 | 4 | 0}${Numbers | 0}${Numbers | 0}`
  | `${Numbers}${Numbers | 0}${Numbers | 0}${Numbers | 0}`
  | `${655}${1 | 2 | 3 | 0}${1 | 2 | 3 | 4 | 5 | 6 | 0}`
  | `${Numbers}${Numbers | 0}${Numbers | 0}`
  | `${Numbers}${Numbers | 0}`
  | `${Numbers}`;

export default Ports;
