import {
  PuzzleType,
  SquareIdentifier,
} from './Interfaces';


export class PuzzleUtils {
  static idsByBlock: PuzzleType = [
    [1, 2, 3, 10, 11, 12, 19, 20, 21],
    [4, 5, 6, 13, 14, 15, 22, 23, 24],
    [7, 8, 9, 16, 17, 18, 25, 26, 27],
    [28, 29, 30, 37, 38, 39, 46, 47, 48],
    [31, 32, 33, 40, 41, 42, 49, 50, 51],
    [34, 35, 36, 43, 44, 45, 52, 53, 54],
    [55, 56, 57, 64, 65, 66, 73, 74, 75],
    [58, 59, 60, 67, 68, 69, 76, 77, 78],
    [61, 62, 63, 70, 71, 72, 79, 80, 81]
  ];

  static readonly idsByRow: PuzzleType = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 58, 59, 60, 61, 62, 63],
    [64, 65, 66, 67, 68, 69, 70, 71, 72],
    [73, 74, 75, 76, 77, 78, 79, 80, 81]
  ];

  static readonly idsByColumn: PuzzleType = [
    [1, 10, 19, 28, 37, 46, 55, 64, 73],
    [2, 11, 20, 29, 38, 47, 56, 65, 74],
    [3, 12, 21, 30, 39, 48, 57, 66, 75],
    [4, 13, 22, 31, 40, 49, 58, 67, 76],
    [5, 14, 23, 32, 41, 50, 59, 68, 77],
    [6, 15, 24, 33, 42, 51, 60, 69, 78],
    [7, 16, 25, 34, 43, 52, 61, 70, 79],
    [8, 17, 26, 35, 44, 53, 62, 71, 80],
    [9, 18, 27, 36, 45, 54, 63, 72, 81]
  ];

  static getId(blockNumber: number, index: number) {
    return PuzzleUtils.idsByBlock[blockNumber - 1][index];
  }

  /*   static setDigit(puzzle: PuzzleType, position: PuzzlePosition, digit: number) {
    PuzzleUtils.idsByBlock[position.row][position.column] = digit;
  }

  static getDigit(puzzle: PuzzleType, position: PuzzlePosition): number {
    return PuzzleUtils.idsByBlock[position.row][position.column];
  } */

  static getRowNumberById(id: number): number {
    const res = id / 9;
    if (res % 1 !== 0) {
      return Math.trunc(res) + 1;
    }
    return res;
  }

  static getColumnNumberById(id: number): number {
    const res = id % 9;
    if (res === 0) {
      return 9;
    }
    return res;
  }

  static getBlockNumberById(id: number): number {
    for (let i = 0; i < PuzzleUtils.idsByBlock.length; i += 1) {
      const row = PuzzleUtils.idsByBlock[i];
      for (let x = 0; x < row.length; x += 1) {
        const value = row[x];
        if (value === id) {
          return i + 1;
        }
      }
    }
    throw Error('number does not exist in array');
  }

  static getPositionById(id: number) {
    for (let i = 0; i < PuzzleUtils.idsByBlock.length; i+= 1) {
      const row = PuzzleUtils.idsByBlock[i];
      for (let x = 0; x < row.length; x+= 1) {
        const value = row[x];
        if (value === id) {
          return { row: i, column: x };
        }
      }
    }
    throw Error('number does not exist in array');
  }

  /* static getAllDigitsInBlock(puzzle: PuzzleType, index: number): BlockType {
    return puzzle[index - 1];
  }

  

  static getDigitsInBlock(puzzle: PuzzleType, index: number): number[] {
    const block = PuzzleUtils.getAllDigitsInBlock(puzzle, index);

    return block.filter(nr => nr !== 0);
  } */

  static getAllIdsInBlockById(id: number): number[] {
    const blockId = PuzzleUtils.getBlockNumberById(id);
    return PuzzleUtils.idsByBlock[blockId - 1];
  }

  static getDigitsInRowById(puzzle: PuzzleType, id: number): number[] {
    const row = PuzzleUtils.getAllDigitsInRowById(puzzle, id);

    return row.filter(nr => nr !== 0);
  }

  static getAllDigitsInRowById(puzzle: PuzzleType, id: number): number[] {
    const transformed = PuzzleUtils.transformPuzzle2Row(puzzle);
    const rowId = PuzzleUtils.getRowNumberById(id);
    const row = transformed[rowId - 1];

    return row;
  }

  static getAllIdsInRowById(id: number) {
    const rowId = PuzzleUtils.getRowNumberById(id);
    return PuzzleUtils.idsByRow[rowId - 1];
  }

  static getAllIdsInColumnById(id: number) {
    const columnId = PuzzleUtils.getColumnNumberById(id);
    return PuzzleUtils.idsByColumn[columnId - 1];
  }

  static getAllHighLighted(puzzle: PuzzleType, ident: SquareIdentifier) {
    const rowIds = PuzzleUtils.getAllIdsInRowById(ident.id);
    const columnIds = PuzzleUtils.getAllIdsInColumnById(ident.id);
    const blockIds = PuzzleUtils.getAllIdsInBlockById(ident.id);
    const similarNumbersIds = PuzzleUtils.findIdsForSimilarDigit(
      puzzle,
      ident.digit
    );
    const allHighLighted = [
      ...rowIds,
      ...columnIds,
      ...blockIds,
      ...similarNumbersIds
    ];

    const uniqueArray = allHighLighted
      .filter((item, index) => allHighLighted.indexOf(item) === index)
      .filter(item => item !== ident.id);
    return uniqueArray;
  }

  static transformPuzzle2Row(puzzle: PuzzleType): PuzzleType {
    const bag: PuzzleType = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    for (let index = 0; index < puzzle.length; index += 1) {
      const row = puzzle[index];
      const chunks = PuzzleUtils.chunkArray(row, 3);
      switch (index) {
        case 0:
          bag[0].splice(0, 3, ...chunks[0]);
          bag[1].splice(0, 3, ...chunks[1]);
          bag[2].splice(0, 3, ...chunks[2]);
          break;
        case 1:
          bag[0].splice(3, 6, ...chunks[0]);
          bag[1].splice(3, 6, ...chunks[1]);
          bag[2].splice(3, 6, ...chunks[2]);
          break;
        case 2:
          bag[0].splice(6, 9, ...chunks[0]);
          bag[1].splice(6, 9, ...chunks[1]);
          bag[2].splice(6, 9, ...chunks[2]);
          break;
        case 3:
          bag[3].splice(0, 3, ...chunks[0]);
          bag[4].splice(0, 3, ...chunks[1]);
          bag[5].splice(0, 3, ...chunks[2]);
          break;
        case 4:
          bag[3].splice(3, 6, ...chunks[0]);
          bag[4].splice(3, 6, ...chunks[1]);
          bag[5].splice(3, 6, ...chunks[2]);
          break;
        case 5:
          bag[3].splice(6, 9, ...chunks[0]);
          bag[4].splice(6, 9, ...chunks[1]);
          bag[5].splice(6, 9, ...chunks[2]);
          break;
        case 6:
          bag[6].splice(0, 3, ...chunks[0]);
          bag[7].splice(0, 3, ...chunks[1]);
          bag[8].splice(0, 3, ...chunks[2]);
          break;
        case 7:
          bag[6].splice(3, 6, ...chunks[0]);
          bag[7].splice(3, 6, ...chunks[1]);
          bag[8].splice(3, 6, ...chunks[2]);
          break;
        case 8:
          bag[6].splice(6, 9, ...chunks[0]);
          bag[7].splice(6, 9, ...chunks[1]);
          bag[8].splice(6, 9, ...chunks[2]);
          break;
          default: 
          throw RangeError;
      }
    }
    return bag;
  }

  static findIdsForSimilarDigit(puzzle: PuzzleType, digit: number) {
    const positions: number[] = [];

    if (digit === 0) {
      return positions;
    }

    const transformedPuzzle = PuzzleUtils.transformPuzzle2Row(puzzle);

    for (let i = 0; i < transformedPuzzle.length; i+= 1) {
      for (let x = 0; x < transformedPuzzle[i].length; x+= 1) {
        if (transformedPuzzle[i][x] === digit) {
          positions.push(PuzzleUtils.idsByRow[i][x]);
        }
      }
    }
    return positions;
  }

  private static chunkArray(ary: number[], chunkSize: number): any {
    const temp = [];
    let chunks = [];
    for (let index = 0; index < ary.length; index += chunkSize) {
      chunks = ary.slice(index, index + chunkSize);
      temp.push(chunks);
    }

    return temp;
  }

  /* static getDigitsInColumn(puzzle: PuzzleType, index: number): number[] {
    let result = PuzzleUtils.getAllDigitsInColumn(puzzle, index);
    return result.filter(nr => nr !== 0);
  }

  static getAllDigitsInColumn(puzzle: PuzzleType, index: number): number[] {
    let result: number[] = [];
    const transformed = PuzzleUtils.transformPuzzle(puzzle);

    for (let i = 0; i < transformed.length; i++) {
      result[i] = transformed[i][index - 1] as number;
    }
    return result;
  } */
}
