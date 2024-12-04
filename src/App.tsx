import { useState } from "react";
import "./App.css";
import tiles from "./assets/tiles_second_edition.webp";

interface TileProps {
  row: number;
  col: number;
  className?: string;
}

function Tile(props: TileProps) {
  const { row, col, className } = props;

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${tiles})`,
        backgroundSize: "1600% 1000%",
        backgroundPositionX: `${((col - 1) * 100) / 15}%`,
        backgroundPositionY: `${((row - 1) * 100) / 9}%`,
      }}
    />
  );
}

interface TileCounterProps extends TileProps {
  initialCount: number;
}

function TileCounter(props: TileCounterProps) {
  const { initialCount, ...restProps } = props;

  const [count, setCount] = useState(initialCount);

  const decrease = () => {
    if (count) setCount(count - 1);
  };

  return (
    <div
      className={`
        relative p-2 rounded-md shadow-sm cursor-pointer select-none aspect-square
        flex flex-col gap-1 items-center 
        transition-all duration-300
        ${
          count === 0
            ? "opacity-60 grayscale bg-gray-300 hover:bg-gray-300"
            : "bg-white hover:bg-blue-50 hover:shadow-md"
        }
      `}
      onClick={decrease}
    >
      <Tile className="h-full w-full" {...restProps} />
      <div
        className="absolute -top-0 -right-0 w-7 h-7 flex items-center justify-center rounded-full leading-none bg-blue-500 bg-opacity-80 text-white font-semibold text-lg"
        style={{
          fontFamily: "Russo One",
          borderTop: "1px solid rgba(255, 255, 255, 0.5)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
          textShadow:
            "2px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 10px rgba(255, 255, 255, 0.7)",
        }}
      >
        {count ? (
          count
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function App() {
  const [id, setId] = useState(0);

  const reset = () => setId(id + 1);

  return (
    <div className="bg-gradient-to-br fixed w-full h-full from-gray-100 to-gray-200 p-2 flex flex-col items-stretch gap-2">
      <div className="text-center">
        <button
          onClick={reset}
          className="
              bg-green-500 text-white px-2 py-1 rounded-md 
              hover:bg-green-600 transition duration-300
              shadow-md hover:shadow-lg
            "
        >
          重置所有卡牌
        </button>
      </div>
      <div
        key={id}
        className="grid gap-2 col justify-around"
        style={{ gridTemplateColumns: "repeat(auto-fill, 100px)" }}
      >
        <TileCounter initialCount={2} row={5} col={2} />
        <TileCounter initialCount={4} row={5} col={1} />
        <TileCounter initialCount={1} row={5} col={4} />
        <TileCounter initialCount={4} row={3} col={6} />
        <TileCounter initialCount={5} row={2} col={7} />
        <TileCounter initialCount={2} row={1} col={15} />
        <TileCounter initialCount={1} row={1} col={14} />
        <TileCounter initialCount={3} row={2} col={3} />

        <TileCounter initialCount={2} row={2} col={2} />
        <TileCounter initialCount={3} row={2} col={15} />
        <TileCounter initialCount={3} row={2} col={12} />
        <TileCounter initialCount={3} row={3} col={2} />
        <TileCounter initialCount={2} row={1} col={8} />
        <TileCounter initialCount={3} row={1} col={4} />
        <TileCounter initialCount={2} row={1} col={13} />
        <TileCounter initialCount={3} row={1} col={9} />

        <TileCounter initialCount={1} row={5} col={8} />
        <TileCounter initialCount={3} row={5} col={6} />
        <TileCounter initialCount={2} row={1} col={2} />
        <TileCounter initialCount={1} row={1} col={1} />
        <TileCounter initialCount={8} row={3} col={15} />
        <TileCounter initialCount={9} row={4} col={2} />
        <TileCounter initialCount={4} row={4} col={9} />
        <TileCounter initialCount={1} row={4} col={13} />
      </div>
    </div>
  );
}

export default App;
