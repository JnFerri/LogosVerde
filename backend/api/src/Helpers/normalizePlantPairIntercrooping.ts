

async function normalizePlantPairIntercrooping(a: number, b: number) {
  return a < b ? { plantId: a, intercroppingPlantId: b } 
               : { plantId: b, intercroppingPlantId: a };
};

export default normalizePlantPairIntercrooping;