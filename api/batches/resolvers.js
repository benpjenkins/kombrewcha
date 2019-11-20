import Batches from "./batches";

export const batchesResolvers = {
  Query: {
    async batches() {
      try {
        const batches = await Batches.find();
        return batches;
      } catch (error) {
        console.log(erorr);
      }
    }
  }
};
