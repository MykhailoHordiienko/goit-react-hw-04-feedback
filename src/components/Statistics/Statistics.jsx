export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Positive Feedback : {positive ? positive : 0} %</p>
    </>
  );
};