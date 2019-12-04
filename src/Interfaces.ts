interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
  0: T;
  length: L;
}
export type BlockType = FixedLengthArray<number, 9>;
export type PuzzleType = FixedLengthArray<BlockType, 9>;

export interface IBoardState {
  puzzle: PuzzleType;
}
