export function Square(props) {
  return (
    <button className="square" onClick={props.buttonHandler}>
      {props.value}
    </button>
  );
}
