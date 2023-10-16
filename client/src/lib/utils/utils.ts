/**
 * Combines an array of strings into a space-separated string with truthy values.
 *
 * @param classes - An array of strings or falsy values to be joined.
 * @returns A space-separated string of truthy values from the input array.
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checks a boolean value and redirects to the home page if it is falsy.
 *
 * @param value - The boolean value to be checked.
 */
export function checkAndRedirectIfEmpty(value: boolean) {
  if (!value) {
    window.location.href = "/";
  }
}

/**
 * Combines two arrays into an array of objects with corresponding names and values.
 *
 * @param names - An array of strings representing feature names.
 * @param values - An array of strings representing feature types or values.
 * @throws Error if the length of the 'names' and 'values' arrays is not the same.
 * @returns An array of objects with 'feature' and 'type' properties.
 */
export const arraysToDictionaries = (names: string[], values: string[]) => {
  if (names.length !== values.length) {
    throw new Error(
      "Failed to combine arrays, maybe try USING THE SAME LENGTH OF ARRAYS!"
    );
  }

  const combinedArray = Array.from({ length: names.length }, (_, index) => {
    return { feature: names[index], type: values[index] };
  });

  return combinedArray;
}
