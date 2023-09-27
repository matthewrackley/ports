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
import type { InitialNumbers, Numbers } from './numbers';

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
 * @type Port - A type that represents all possible port numbers as an object.
 * - This type is a union of all possible port numbers as numbers.
 * - Ranges from `1-65536`.
 * @implements port - A type that represents all possible port numbers.
 */
export type Port = {
  [x: number]: typeof x;
};
const portObject = {} as Port;
const ports = {} as Ports;
for (let i = 1; i < (65537); i++) {
  portObject[i as number] = i as number;
};
for (let i = 1; i < (65537); i++) {
  ports[i.toString() as port] = i.toString() as port;
};
/**
 * @type TypeGuard - A type guard that determines whether a value is a port.
 * @function PortGuard
 * @param {Port | Ports} port - A value that may or may not be a Port object.
 * @returns {port is Port | Ports} Returns true if the value is a port, otherwise returns false.
 */
export function PortGuard(port: Port): port is Port;
export function PortGuard(port: Ports): port is Ports;
export function PortGuard(port: Port | Ports): port is Port | Ports;
export function PortGuard(port: Port | Ports): port is Port | Ports {
  const portIsPort: boolean[] = [];
  const portIsPorts: boolean[] = [];
  const portIsntPort: false[] = [];
  let isPort = false;
  const numArray: number[] = [];
  const portArray: number[] = [];
  for (let i = 1; i < 65537; i++) {
    if (0 > i || i > 65537) {
      portIsntPort.push(false);
    }
    portArray.push(i);
    numArray.push(i);
  }
  numArray.forEach((num) => {
    portIsPort.push(num as number in (port as Port) && 0 < num && num < 65537 ? true : false);
    portIsPorts.push(num.toString() in (port as Ports) && 0 < num && num < 65537 ? true : false);
  });
  return isPort = (
    (portIsPort.length === 65536
      || portIsPorts.length === 65536)
    && (portIsntPort.length === 0)
    && (!portIsPort.includes(false)
      || !portIsPorts.includes(false))
  ) ? true : false;
}
/**
 * @type Ports - A type that represents all possible port numbers as an object of string literals.
 * - This type is a union of all possible port numbers as string literals.
 */
export type Ports = { [num in keyof Port as port]: port };

/**
 * @function MakePort - A function that creates a Port object.
 * @returns {[Port | Ports]} - Returns a [Port|Ports] object or an {Error} if the Port is not valid.
 */
export function MakePort(): [Port, Ports] {
  const isPort = PortGuard(portObject);
  const isPorts = PortGuard(ports);
  if (isPort === false) {
    throw new Error(`${portObject} is not a port.`);
  } else if (isPorts === false) {
    throw new Error(`${ports} is not a port.`);
  } else {
    return [portObject, ports] as [Port, Ports];
  }
}
export const PortArray = MakePort();
export const Port = PortArray[0];
export const Ports = PortArray[1];
// function MakePorts() {
//   let ports: Ports = {} as Ports;
//   let portIsPort: boolean[] = Array.of(true);
//   for (let i = 1; i < (65537); i++) {
//     ports[i.toString() as port] = i.toString() as port;
//   }
//   if (PortGuard(ports) === false) {
//     throw new Error(`${ports} is not a port.`);
//   } else {
//     return ports;
//   }
// }
/**
 * @type Ports - A type that represents all possible port numbers.
 * - This type is a union of all possible port numbers.
 * - Uses `Thousand`, `TenToFiftyThousand`, and `SixtyThousand` to create a union of all possible po    rt numbers.
 * - Ranges from `1-65536`.
 */
//type ports = Thousand | TenToFiftyThousand | SixtyThousand;
/**
 * @default
 * @type Port - A type that represents all possible port numbers as an object.
 * - This type is a union of all possible port numbers as numbers.
 *
 */
export default PortArray;
