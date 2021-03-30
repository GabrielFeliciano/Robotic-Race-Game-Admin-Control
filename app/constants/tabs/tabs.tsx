import { TabInput } from "./tabs.d";
import QuestionFrame from "@element/question-frame/question-frame";

const tabs: TabInput[] = [
    {
        name: "Perguntas",
        important: false,
        painel: QuestionFrame
    }
];

export default tabs;