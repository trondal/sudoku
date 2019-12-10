interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  0: T;
  length: L;
}
export type BlockType = FixedLengthArray<number, 9>;
export type PuzzleType = FixedLengthArray<BlockType, 9>;

export interface IBoardState {
  ident: SquareIdentifier;
  puzzle: PuzzleType;
  highlighted: number[];
}

export interface SquareIdentifier {
  id: number;
  digit: number;
}

export interface PuzzlePosition {
  row: number;
  column: number;
}
