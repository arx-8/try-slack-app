/**
 * Work around. Suppress error of `cannot be compiled under '--isolatedModules'`.
 */
// eslint-disable-next-line jest/no-export
export {}

/**
 * Verify that UT works correctly.
 */
describe("example", () => {
  it("with TypeScript", () => {
    // ## Arrange ##
    const list: readonly number[] = [...[1, 2, 3, 4, 5]]

    // ## Act ##
    const result = list
      .filter((n) => n % 2 === 0)
      .map((n) => n * 2)
      .reduce((l, r) => l + r)

    // ## Assert ##
    expect(result).toStrictEqual(12)
  })
})

describe("When in doubt, use `toStrictEqual`. It is the most reliable.", () => {
  /**
   * @see https://jestjs.io/docs/en/expect#tostrictequalvalue
   */
  it("`toStrictEqual` is the strictest.", () => {
    class Protein {
      flavor: string

      constructor(flavor: string) {
        this.flavor = flavor
      }
    }

    /* eslint-disable jest/prefer-strict-equal */
    expect(new Protein("lemon")).toEqual({ flavor: "lemon" })
    expect(new Protein("lemon")).not.toStrictEqual({ flavor: "lemon" })
    /* eslint-enable */
  })

  class Human {
    constructor(private readonly name: string, private readonly age: number) {}

    public getGreet(): string {
      return `My name is ${this.name}. ${this.age} years old`
    }
  }

  it("toBe is `===`", () => {
    /* eslint-disable  sort-keys-fix/sort-keys-fix */
    // Literal
    expect(2).not.toBe("2")
    expect(2).not.toBe(true)
    expect(0).not.toBe(false)
    expect(false).toBe(false)

    // Array
    expect([1, 2, 4]).not.toBe([1, 2, 4])
    expect([1, 2, 4]).not.toBe([1, 4, 2])

    // Object
    expect({ k0: 0, k1: 1 }).not.toBe({ k0: 0, k1: 1 })
    expect({ k0: 0, k1: 1 }).not.toBe({ k1: 1, k0: 0 })
    const objInstance = { k0: 0, k1: 1 }
    expect(objInstance).toBe(objInstance)

    // Class
    expect(new Human("taro", 20)).not.toBe(new Human("taro", 20))
    const classInstance = new Human("taro", 20)
    expect(classInstance).toBe(classInstance)
    /* eslint-enable */
  })

  it("toEqual is `deep equal`", () => {
    /* eslint-disable jest/prefer-strict-equal, sort-keys-fix/sort-keys-fix */
    // Literal
    expect(2).not.toEqual("2")
    expect(2).not.toEqual(true)
    expect(0).not.toEqual(false)
    expect(false).toEqual(false)

    // Array
    expect([1, 2, 4]).toEqual([1, 2, 4])
    expect([1, 2, 4]).not.toEqual([1, 4, 2])

    // Object
    expect({ k0: 0, k1: 1 }).toEqual({ k0: 0, k1: 1 })
    expect({ k0: 0, k1: 1 }).toEqual({ k1: 1, k0: 0 })
    const objInstance = { k0: 0, k1: 1 }
    expect(objInstance).toEqual(objInstance)

    // Class
    expect(new Human("taro", 20)).toEqual(new Human("taro", 20))
    const classInstance = new Human("taro", 20)
    expect(classInstance).toEqual(classInstance)
    /* eslint-enable */
  })
})
