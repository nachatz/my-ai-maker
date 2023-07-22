export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function clearState(setStatesArray) {
  setStatesArray.forEach((setState) => setState(null));
}
