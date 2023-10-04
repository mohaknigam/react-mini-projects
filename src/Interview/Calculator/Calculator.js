import { useReducer } from "react";
import "./cal-styling.css";
import { ACTIONS } from "../Constants";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prevNumber = parseFloat(previousOperand);
  const currNumber = parseFloat(currentOperand);
  if (isNaN(prevNumber) || isNaN(currNumber)) return "";
  let answer = "";

  switch (operation) {
    case "+":
      answer = prevNumber + currNumber;
      break;
    case "-":
      answer = prevNumber - currNumber;
      break;
    case "*":
      answer = prevNumber * currNumber;
      break;
    case "÷":
      answer = prevNumber / currNumber;
      break;
  }

  return answer.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const formatNumber = (number) => {
  if (!number) return;
  const [integer, decimal] = number.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

// const reducer = (state, action) => {};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.previousOperand == null && state.currentOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.DELETE_DIGIT:
      if (!state.currentOperand) return state;
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        !state.currentOperand ||
        !state.previousOperand
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
      };
    default:
      break;
  }
};

const Calculator = () => {
  //   const [finalState, dispatch] = useReducer(reducer, {});
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const handleClear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const handleEqual = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  };
  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">
          {formatNumber(previousOperand)} {operation}
        </div>
        <div className="curr-operand">{formatNumber(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={handleClear}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <OperationButton dispatch={dispatch} operation="÷" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperationButton dispatch={dispatch} operation="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperationButton dispatch={dispatch} operation="+" />
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperationButton dispatch={dispatch} operation="-" />
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button className="span-two" onClick={handleEqual}>
        =
      </button>
    </div>
  );
};

export default Calculator;
