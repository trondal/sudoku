import { PuzzleType, SquareIdentifier, PuzzlePosition } from "./Interfaces";
import { PuzzleUtils } from "./PuzzleUtils";

let puzzle: PuzzleType;
let displayed: PuzzleType;
let solution: PuzzleType;
beforeEach(() => {
  puzzle = [
    [0, 8, 0, 0, 2, 3, 9, 0, 1],
    [0, 0, 0, 0, 0, 5, 8, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [8, 0, 6, 3, 0, 0, 0, 9, 0],
    [3, 1, 0, 9, 0, 0, 0, 0, 4],
    [0, 7, 0, 0, 6, 2, 0, 3, 8],
    [5, 0, 0, 0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 6],
    [7, 0, 0, 0, 4, 0, 0, 9, 0]
  ];
  displayed = [
    [0, 8, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 3, 0, 0, 5, 6, 0, 0],
    [9, 0, 1, 8, 0, 0, 0, 0, 0],
    [8, 0, 6, 3, 1, 0, 0, 7, 0],
    [3, 0, 0, 9, 0, 0, 0, 6, 2],
    [0, 9, 0, 0, 0, 4, 0, 3, 8],
    [5, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0],
    [7, 0, 4, 0, 0, 6, 0, 9, 0]
  ];
  solution = [
    [6, 8, 5, 2, 4, 7, 9, 1, 3],
    [4, 2, 3, 1, 9, 5, 6, 8, 7],
    [9, 7, 1, 8, 6, 3, 2, 5, 4],
    [8, 5, 6, 3, 1, 2, 4, 7, 9],
    [3, 4, 7, 9, 5, 8, 1, 6, 2],
    [1, 9, 2, 6, 7, 4, 5, 3, 8],
    [5, 1, 8, 4, 3, 9, 7, 2, 6],
    [2, 6, 9, 7, 8, 1, 3, 4, 5],
    [7, 3, 4, 5, 2, 6, 8, 9, 1]
  ];
});

describe("block is ok", () => {
  /* it("can get all ids for a block", () => {
    let ids = PuzzleUtils.getIdOfAllDigitsInBlock(5);
    expect(ids).toStrictEqual([31, 32, 33, 40, 41, 42, 49, 50, 51]);
  });

  it("can get digits in a block", () => {
    let block = PuzzleUtils.getDigitsInBlock(puzzle, 1);
    expect(block).toStrictEqual([8, 2, 3, 9, 1]);

    block = PuzzleUtils.getDigitsInBlock(puzzle, 9);
    expect(block).toStrictEqual([7, 4, 9]);
  }); */
  /*  it("can get all digits in a block", () => {
    let block = PuzzleUtils.getAllDigitsInBlock(puzzle, 1);
    expect(block).toStrictEqual([0, 8, 0, 0, 2, 3, 9, 0, 1]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 2);
    expect(block).toStrictEqual([0, 0, 0, 0, 0, 5, 8, 0, 0]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 3);
    expect(block).toStrictEqual([0, 0, 0, 6, 0, 0, 0, 0, 0]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 4);
    expect(block).toStrictEqual([8, 0, 6, 3, 0, 0, 0, 9, 0]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 5);
    expect(block).toStrictEqual([3, 1, 0, 9, 0, 0, 0, 0, 4]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 6);
    expect(block).toStrictEqual([0, 7, 0, 0, 6, 2, 0, 3, 8]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 7);
    expect(block).toStrictEqual([5, 0, 0, 0, 0, 0, 7, 0, 4]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 8);
    expect(block).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 6]);

    block = PuzzleUtils.getAllDigitsInBlock(puzzle, 9);
    expect(block).toStrictEqual([7, 0, 0, 0, 4, 0, 0, 9, 0]);
  }); */
  /* it("gets block number by id", () => {
    let numbers = PuzzleUtils.getBlockNumberById(1);
    expect(numbers).toBe(1);

    numbers = PuzzleUtils.getBlockNumberById(21);
    expect(numbers).toBe(1);

    numbers = PuzzleUtils.getBlockNumberById(36);
    expect(numbers).toBe(6);

    numbers = PuzzleUtils.getBlockNumberById(55);
    expect(numbers).toBe(7);

    numbers = PuzzleUtils.getBlockNumberById(31);
    expect(numbers).toBe(5);

    numbers = PuzzleUtils.getBlockNumberById(41);
    expect(numbers).toBe(5);

    numbers = PuzzleUtils.getBlockNumberById(81);
    expect(numbers).toBe(9);
  }); */
});

describe("transform is ok", () => {
  it("can transform puzzle", () => {
    let numbers = PuzzleUtils.transformPuzzle2Row(puzzle);
    expect(numbers).toStrictEqual(displayed);
  });
});

describe("can set digit", () => {
  it("can get position by id", () => {
    const ident: SquareIdentifier = {
      id: 47,
      digit: 88
    };
    const position = PuzzleUtils.getPositionById(ident.id);
    expect(position).toStrictEqual({ row: 3, column: 7 });
  });
});

describe("row is ok", () => {
  /* it("gets row number by id", () => {
    let row = PuzzleUtils.getRowNumberById(1);
    expect(row).toBe(1);

    row = PuzzleUtils.getRowNumberById(9);
    expect(row).toBe(1);

    row = PuzzleUtils.getRowNumberById(22);
    expect(row).toBe(3);

    row = PuzzleUtils.getRowNumberById(73);
    expect(row).toBe(9);

    row = PuzzleUtils.getRowNumberById(81);
    expect(row).toBe(9);
  }); */
  /* it("gets digits in a row", () => {
    let row = PuzzleUtils.getAllDigitsInRowById(puzzle, 1);
    expect(row).toStrictEqual([0, 8, 0, 0, 0, 0, 0, 0, 0]);

    row = PuzzleUtils.getAllDigitsInRowById(puzzle, 9);
    expect(row).toStrictEqual([7, 0, 4, 0, 0, 6, 0, 9, 0]);

    row = PuzzleUtils.getDigitsInRowById(puzzle, 1);
    expect(row).toStrictEqual([8]);

    row = PuzzleUtils.getDigitsInRowById(puzzle, 9);
    expect(row).toStrictEqual([7, 4, 6, 9]);
  }); */
  /* it("should throw a specific type of error.", () => {
    expect.assertions(2);

    try {
      PuzzleUtils.getBlockNumberById(82);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "number does not exist in array");
    }
  }); */
});

describe("column is ok", () => {
  /* it("gets column number by id", () => {
    let column = PuzzleUtils.getColumnNumberById(1);
    expect(column).toBe(1);

    column = PuzzleUtils.getColumnNumberById(9);
    expect(column).toBe(9);

    column = PuzzleUtils.getColumnNumberById(22);
    expect(column).toBe(4);

    column = PuzzleUtils.getColumnNumberById(73);
    expect(column).toBe(1);

    column = PuzzleUtils.getColumnNumberById(81);
    expect(column).toBe(9);
  }); */
  /* it("gets all digits in a column", () => {
    let column = PuzzleUtils.getAllDigitsInColumn(puzzle, 1);
    expect(column).toStrictEqual([0, 0, 9, 8, 3, 0, 5, 0, 7]);

    column = PuzzleUtils.getAllDigitsInColumn(puzzle, 9);
    expect(column).toStrictEqual([0, 0, 0, 0, 2, 8, 0, 0, 0]);
  });

  it("gets digits in a column", () => {
    let column = PuzzleUtils.getDigitsInColumn(puzzle, 1);
    expect(column).toStrictEqual([9, 8, 3, 5, 7]);

    column = PuzzleUtils.getDigitsInColumn(puzzle, 9);
    expect(column).toStrictEqual([2, 8]);
  }); */
});
