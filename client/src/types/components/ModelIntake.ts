interface RowArray {
  rows: Row[];
}

type Row = {
  feature?: string;
  id?: string;
  type?: string;
};

type ModelCreate = {
  title?: string;
  description?: string;
  type?: string;
};

export type { Row, RowArray, ModelCreate };
