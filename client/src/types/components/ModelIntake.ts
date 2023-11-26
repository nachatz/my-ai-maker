interface RowArray {
  rows: Row[];
}

type Row = {
  feature?: string;
  id?: string;
  type?: string;
};

export type { Row, RowArray };
