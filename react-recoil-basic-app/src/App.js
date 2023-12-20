import logo from "./logo.svg";
import "./App.css";
import TextInput from "./components/TextInput";
import CharcterCount from "./components/CharcterCount";
import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: " ",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const test = get(textState);

    return test.length;
  },
});

function App() {
  return (
    <div>
      <TextInput />
      <CharcterCount />
    </div>
  );
}

export default App;
