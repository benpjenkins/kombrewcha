export const batchesResolvers = {
  Query: {
    async batches() {
      return [
        {
          _id: "thefirstbatch",
          name: "Ben's Kombuhca"
        }
      ];
    }
  }
};
