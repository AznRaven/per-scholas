function Score({ scores }) {
  return (
    <>
      <ul>
        {scores.map((x) => (
          // console.log(score)
          <li key={x.date}>
            {x.date}: {x.score}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Score;
