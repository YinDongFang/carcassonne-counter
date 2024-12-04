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
      className="flex flex-col gap-1 items-center hover:bg-[#d3e3fd] p-1 cursor-pointer"
      onClick={decrease}
    >
      <div className="w-16 h-16">
        <Tile className="h-full w-full" {...restProps} />
      </div>
      {count}
    </div>
  );
}

function App() {
  const [id, setId] = useState(0);

  const reset = () => setId(id + 1);

  return (
    <div className="p-2 flex flex-col items-stretch gap-2">
      <div>
        <button className="" onClick={reset}>
          重 置
        </button>
      </div>
      <div className="flex flex-wrap gap-1" key={id}>
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
