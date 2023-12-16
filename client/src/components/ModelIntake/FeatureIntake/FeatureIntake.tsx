import { type MouseEvent, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  type GridColDef,
  type GridRowModel,
} from "@mui/x-data-grid";
import type { Row } from "~/types";

const columns: GridColDef[] = [
  { field: "feature", headerName: "Feature", width: 300, editable: true },
  {
    field: "type",
    headerName: "Data type",
    width: 300,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Detect", "String", "Int", "Float"],
  },
];

export default function FeatureIntake({
  rows,
  setRows,
}: {
  rows: Row[];
  setRows: (state: Row[]) => void;
}) {
  const [newFeature, setNewFeature] = useState("");

  /**
   * Handles the addition of a feature.
   *
   * @param {MouseEvent<HTMLButtonElement>} e - The button click event.
   * @return {void} This function does not return anything.
   */
  const handleAddFeature = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // (1) Unique ids in the current data set
    // (2) Unique ids in the provided data intake
    // (3) Resetting the new data features
    // (4) Reset input
    // grid data types don't always navigate types properly. MUI should resolve
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const currentIds = new Set(rows.map((f) => f.id));
    const uniqueIds = [
      ...new Set(
        newFeature
          .split(",")
          .map((feature) => feature.trim())
          .filter(Boolean)
          .filter((feature) => !currentIds.has(feature)),
      ),
    ];

    setNewFeature("");
    // @ts-ignore
    setRows((prevFeatures: Row[]) => [
      ...prevFeatures,
      ...uniqueIds.map((feature) => ({
        id: feature,
        feature: feature,
        type: "Detect",
      })),
    ]);
  };

  /**
   * Handles the event when cell editing is stopped.
   *
   * @param {Row} newr - The new row object after editing.
   * @param {Row} oldr - The old row object before editing.
   * @return {Row} - The updated row object after handling the event.
   */
  const handleCellEditStop = (newr: Row, oldr: Row) => {
    // return the old row if the new row changes to a already existing feature
    // grid data types don't always navigate types properly. MUI should resolve
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const currentIds = new Set(rows.map((f: GridRowModel) => f.id));
    return newr.feature !== oldr.feature && currentIds.has(newr.feature)
      ? oldr
      : ((() =>
          (
            // @ts-ignore
            setRows((prevFeatures: Row[]) =>
              prevFeatures.map((f: Row) =>
                f.id === oldr.id ? { ...newr, id: newr.feature } : f,
              ),
            ),
            newr
          ))() as Row[]);
  };

  return (
    <>
      <div className="flex items-center py-6 text-sm uppercase text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        Feature intake
      </div>
      <p className="text-sm text-gray-400 before:me-6 before:flex-[1_1_0%] before:border-t after:ms-6 after:flex-[1_1_0%] after:border-t ">
        You can double click to modify any of your features. Add in specific
        encodings, transformations, data types, etc. By default, we use our
        recommended selections
      </p>
      <div className="flex items-center space-x-4">
        <div className="mb-4 flex-grow">
          <label htmlFor="hs-hero-name-2" className="block text-sm font-medium">
            Features
          </label>
          <input
            type="text"
            id="hs-hero-name-2"
            className="w-full cursor-text rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm hover:border-black"
            placeholder="Add delimited by commas"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => handleAddFeature(e)}
          className="w-1/6 rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Add
        </button>
      </div>

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          autoPageSize
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableColumnMenu={true}
          rows={rows}
          columns={columns}
          // error of type any, no beuno. they should fix that. needs update toast
          // onProcessRowUpdateError={(error: any) => console.log(error)}
          // @ts-ignore
          processRowUpdate={(newr: Row, oldr: Row) =>
            handleCellEditStop(newr, oldr)
          }
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </>
  );
}
