import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Batch from "./Batch";

const GET_BATCHES = gql`
  query getBatches {
    batches {
      _id
      name
    }
  }
`;

const BatchList = () => {
  const { data, loading, error } = useQuery(GET_BATCHES);
  if (loading) return <section />;

  const { batches } = data;
  console.log(batches);
  return (
    <section>
      <h2>My Batches</h2>
      {batches.map((batch, index) => {
        return <Batch key={batch.id} batch={batch} index={index} />;
      })}
    </section>
  );
};

export default BatchList;
