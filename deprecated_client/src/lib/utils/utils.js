export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function clearState(setStatesArray) {
  setStatesArray.forEach((setState) => setState(null));
}

export function checkAndRedirectIfEmpty(value) {
  if (!value) {
    window.location.href = "/";
  }
}

export const arraysToDictionaries = (names, values) => {
  if (names.length !== values.length) {
    throw new Error(
      "Failed to combine arrays, maybe try USING THE SAME LENGTH OF ARRAYS!"
    );
  }

  const combinedArray = Array.from({ length: names.length }, (_, index) => {
    return { feature: names[index], type: values[index] };
  });

  return combinedArray;
};
