function Score({ scores }) {
  return (
    <>
      <ul>
        {scores.map((x, i) => (
          // console.log(score)
          <li key={i}>[{x.date}] : [{x.score}]</li>
        ))}
      </ul>
    </>
  );
}

export default Score;
