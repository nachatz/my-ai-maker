import { MouseEvent, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Row } from "~/types";

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

export default function FeatureIntake() {
  const [features, setFeatures] = useState<GridRowsProp>([]);
  const [newFeature, setNewFeature] = useState("");

  const handleAddFeature = (e: MouseEvent<HTMLButtonElement>) => {
    // (1) Unique ids in the current data set
    // (2) Unique ids in the provided data intake
    // (3) Resetting the new data features
    // (4) Reset input
    e.preventDefault();
    const currentIds = new Set(features.map((f) => f.id));
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
    setFeatures((prevFeatures) => [
      ...prevFeatures,
      ...uniqueIds.map((feature) => ({
        id: feature,
        feature: feature,
        type: "Detect",
      })),
    ]);
  };

  const handleCellEditStop = (newr: Row, oldr: Row) => {
    // return the old row if the new row changes to a already existing feature
    const currentIds = new Set(features.map((f) => f.id));
    return newr.feature !== oldr.feature && currentIds.has(newr.feature)
      ? oldr
      : (() => (
          setFeatures((prevFeatures) =>
            prevFeatures.map((f) =>
              f.id === oldr.id ? { ...newr, id: newr.feature } : f,
            ),
          ),
          newr
        ))();
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
          rows={features}
          columns={columns}
          onProcessRowUpdateError={(error) => console.log(error)}
          processRowUpdate={(newr, oldr) => handleCellEditStop(newr, oldr)}
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
