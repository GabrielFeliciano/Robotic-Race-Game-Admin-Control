import { TabInput } from "./tabs.d";
import QuestionWindow from "@tab/question/question-window";

const tabs: TabInput[] = [
    {
        name: "Perguntas",
        important: false,
        painel: QuestionWindow
    }, {
        name: "testes",
        important: false,
        painel: () => <h1>hello bois</h1>
    }
];

export default tabs;