import style from './question-window.module.scss';
import ObjectCardDisplay from '@element/object-card-display/object-card-display'
import useSWR from 'swr';
import QuestionCard from '@tab/question/question-card/question-card';
import { Question, QuestionsPayload } from '@constant/question/question.d';
import SidebarQuestion from './sidebar-question/sidebar-question';
import React, { useState } from 'react';
import TreeDotsLoading from '@element/tree-dots-loading/tree-dots-loading';
import ReactDOM from "react-dom";
import FlexLayout, { Model } from "flexlayout-react";
import model from './model';
import factory, { buildFactory, FactoryMap } from './factory';

export const FlexLayoutContext = React.createContext(
    Model.fromJson({ global: {}, borders: [], layout: {} })
);

const fetcher = async (url: string) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

export default function QuestionWindow() {
    const { data, error } = useSWR<QuestionsPayload>(`http://${process.env.API}/question`, fetcher)

    /**
     * Mount Display when received data is okay
     */
    let displayer;
    if (error)       displayer = <p>failed to load data</p>;
    else if (!data)  displayer = <p>Loading<TreeDotsLoading /></p>;
    else             displayer = (
        <ObjectCardDisplay
            adicionalClassname={style['questions-display-adicional-style']}
            card={QuestionCard}
            mountCardsFrom={data.questions}
        />
    )

    const factoryMap: FactoryMap = {
        'button': (node) => <button>{node.getName()}</button>,
        'control': (node) => <SidebarQuestion />,
        'questions': (node) => displayer
    }

    return (
        <FlexLayoutContext.Provider value={model}>
            <div className={style.painel}>
                <FlexLayout.Layout model={model} factory={buildFactory(factoryMap)}/>
            </div>
        </FlexLayoutContext.Provider>
    )
}