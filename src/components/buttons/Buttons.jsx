import "./Button.css";

const Buttons = (props) => {
  return (
    <div className="btncontainer">
      {props.showHint && (
        <p className="contents">
          All employees are shown.There are no more employees...
        </p>
      )}
      <button onClick={props.prevButtonHandle}>Previous</button>
      <button onClick={props.nextButtonHandle}>Next</button>
    </div>
  );
};

export default Buttons;
