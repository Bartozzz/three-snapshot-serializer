/// <reference types="ts-toolbelt" />
export declare type UUID = string;
export declare type UUIDMap = Map<UUID, UUID>;
export declare const UUID_PLACEHOLDER = "00000000-0000-0000-0000-000000000000";
export declare const UUID_REGEX: RegExp;
/**
 * Converts a number to a UUID-like string.
 *
 * @number    number      Number to generate UUID from
 * @return    UUID string
 */
export declare function numToUUID(id: number): string;
/**
 * Replaces the UUID with substitute from map. If there is no substitute,
 * generates a new one.
 */
export declare const replaceUUID: import("Function/Curry").Curry<(map: UUIDMap, uuid: UUID) => any>;
/**
 * Replaces all UUIDs with generated, well-known substitutes. Assures that each
 * UUID is the same across snapshots.
 */
export declare const replaceUUIDs: (object: Object) => any;
