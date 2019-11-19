export const Batch = props => {
  console.log("BATCH COMPONENT");
  return (
    <article>
      <h3>{props.batch.name}</h3>
      <button type="button">Favorite</button>
      <button type="button">Bottle that 'Booch!</button>
    </article>
  );
};

export default Batch;
