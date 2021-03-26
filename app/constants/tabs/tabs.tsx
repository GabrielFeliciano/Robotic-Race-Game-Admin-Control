import { TabInput } from "./tabs.d";
import QuestionControler from "@element/question-controler/question-controler";

const tabs: TabInput[] = [
    {
        name: "Perguntas",
        important: false,
        painel: QuestionControler
    }
];

export default tabs;