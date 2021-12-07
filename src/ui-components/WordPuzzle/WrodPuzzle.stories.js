import WordPuzzle from "./index";

export default {
  title: "Components/WordPuzzle",
  component: WordPuzzle,
};

const data = ["Easy", "Fast", "Smart", "Efficient", "Magical"];

const Template = <WordPuzzle data={data} />;

export const Primary = () => Template;
