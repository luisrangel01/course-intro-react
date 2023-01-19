import "./style.css";
// const styles = {
//   color: "red",
//   backgroundColor: "yellow",
//   '> input': {
//     backgroundColor: "red",
//   }
// };

function TodoCounter() {
  return (
    <>
      {/* <h2 style={styles}>Has completado 2 de 3 TODOs</h2> */}
      <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    </>
  );
}

export { TodoCounter };
