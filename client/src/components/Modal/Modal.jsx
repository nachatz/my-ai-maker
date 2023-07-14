import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { VariableIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function Modal({ open, setOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const cancelButtonRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTrainClick = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      axios
        .post('http://localhost:8080/v1/process', formData, {
          headers: {
            Authorization: 'Bearer ', // Replace <your_token> with your actual token
          },
        })
        .then((response) => {
          console.log('CSV file sent successfully.');
          console.log('Response:', response.data); // Log the response to the console
        })
        .catch((error) => {
          console.error('Error sending CSV file:', error);
        });
    }
    setOpen(false);
  };
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                      <VariableIcon
                        className="h-6 w-6 text-text-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Train Model
                      </Dialog.Title>
                      <div className="mt-5 flex justify-center flex-col">
                        <p className="text-sm text-gray-500">
                          Upload your data in CSV format. Ensure you include a
                          label column. We'll handle the rest. If you have any
                          questions, please refer to our documentation on
                          preparing your data for training.
                        </p>
                        <label
                          htmlFor="fileInput"
                          className="mt-10 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm cursor-pointer border border-gray-300 hover:bg-gray-50 focus:outline-none focus:border-primary-500 focus:ring-primary-500"
                        >
                          {selectedFile ? (
                            <span>{selectedFile.name}</span>
                          ) : (
                            <span>Upload CSV</span>
                          )}
                          <input
                            id="fileInput"
                            type="file"
                            accept=".csv"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
                    onClick={handleTrainClick}
                  >
                    Train
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
