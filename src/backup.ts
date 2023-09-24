import type {
  FiftyThousand,
  FourtyThousand,
  Hundreds,
  InitialNumbers,
  Numbers,
  SixtyFiveThousand,
  SixtyFiveThousandFiveHundred,
  SixtyFiveThousandFiveHundredThirty,
  SixtyFiveThousandFourHundred,
  SixtyFourThousand,
  SixtyThousand,
  TenThousand,
  TenToFiftyThousand,
  Tens,
  ThirtyThousand,
  Thousands,
  TwentyThousand
} from './numbers';
/**
 * @type FourtyNineThousand - A type that represents the numbers `49152-49999`.
 * - This type is a union of all possible five digit numbers between `49152` and `49999`.
 */
type FourtyNineThousand = `${4915}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${491}${6 | 7 | 8 | 9}${Numbers}`
  | `${49}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${Numbers}${Numbers}`;
type SixtyFiveThousandFiveHundredThirtyFive = `${6553}${1 | 2 | 3 | 4 | 5 | 0}`;
/**
 * @type CertificateManagementOverCMS - A type that represents the numbers `49152-65535`.
 * - This type is a union of all possible five digit numbers between `49152` and `65535`.
 * - This type represents the port numbers used for Certificate Management over CMS.
 *
 * [Certificate Management over CMS - Wikipedia :](https://en.wikipedia.org/wiki/Certificate_Management_over_CMS)
 * > "The Certificate Management over CMS (CMC) is an Internet Standard published by the IETF, defining transport mechanisms for the Cryptographic Message Syntax (CMS). It is defined in RFC 5272, its transport mechanisms in RFC 5273."
 */
type CertificateManagementOverCMS =
  FiftyThousand
  | SixtyFourThousand
  | SixtyFiveThousand
  | SixtyFiveThousandFourHundred
  | SixtyFiveThousandFiveHundred
  | `${491}${6 | 7 | 8 | 9}${Numbers}`
  | SixtyFiveThousandFiveHundredThirtyFive
  | `${4915}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${49}${2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${Numbers}${Numbers}`;
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
type Ports = `${InitialNumbers}`
  | Tens
  | Hundreds
  | Thousands
  | FiftyThousand
  | SixtyFourThousand
  | SixtyFiveThousand
  | SixtyFiveThousandFourHundred
  | SixtyFiveThousandFiveHundred
  | SixtyFiveThousandFiveHundredThirty;

export default Ports;
