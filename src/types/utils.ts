/**
 * Must fix any
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeAny = any

/**
 * Any that don't necessarily need to be fixed (e.g. cast)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CastAny = any

/**
 * @param x target
 * @param extraMessage Messages to help identify the cause of the problem if it should occur.
 */
export function nonNull<T>(x: T, extraMessage: string): NonNullable<T> {
  if (x == null) {
    throw new Error(
      `Unexpected null / undefined. Should exist value. (${extraMessage})`
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return x as CastAny
}

/**
 * Type-safe `Object.keys`
 */
export const objectKeys: <T extends string | number>(
  o: Record<T, unknown>
) => T[] = Object.keys

/**
 * Create same key:value object
 */
export const sameKVObject = <T extends string | number>(
  array: readonly T[]
): { [key in T]: T } => {
  return array.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: curr,
    }
  }, {} as { [key in T]: T })
}
