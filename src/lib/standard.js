import { standardUnitDependences } from './units';

// Function converts value in passed unit to value in standard unit.
function getValueInStandardUnit(value, unit) {
  if (standardUnitDependences[unit] !== undefined) {
    return value * standardUnitDependences[unit]
  }
  return undefined;
};


// Function converts value in standard unit to value in passed unit.
function getValueByUnit(value, unit) {
  if (standardUnitDependences[unit] !== undefined) {
    return value * (1 / standardUnitDependences[unit])
  }
  return undefined;
};

export { getValueInStandardUnit, getValueByUnit };
