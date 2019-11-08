export const batchesResolvers = {
  Query: {
    async batch() {
      return [
        {
          _id: "thefirstbatch",
          name: "Ben's Kombuhca"
        }
      ];
    }
  }
};
