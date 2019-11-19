import Batches from "./batches";

export const batchesMutations = {
  Mutation: {
    async addBatch(_, { batch }, context) {
      try {
        const newBatch = await Batches.create({
          ...batch
        });
        return newBatch;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
