import { Container, Nav } from 'react-bootstrap';
import style from './question-window.module.scss';
import ObjectCardDisplay from '@element/object-card-display/object-card-display'
import useSWR from 'swr';
import QuestionCard from '@tab/question/question-card/question-card';
import { Question, QuestionsPayload } from '@constant/question/question.d';
import SidebarQuestion from './sidebar-question/sidebar-question';
import React, { useState } from 'react';
import TreeDotsLoading from '@element/tree-dots-loading/tree-dots-loading';
import { createBalancedTreeFromLeaves, getLeaves, Mosaic, MosaicParent, MosaicPath, MosaicWindow, RemoveButton } from 'react-mosaic-component';
import ReactDOM from "react-dom";
import FlexLayout from "flexlayout-react";
import model from './model';
import factory, { buildFactory, FactoryMap } from './factory';

const fetcher = async (url: string) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

type ViewId = 'control' | 'questions' | 'new';

const toolbarControls = [RemoveButton];

export default function QuestionWindow() {
    const { data, error } = useSWR<QuestionsPayload>(`http://${process.env.API}/question`, fetcher)
    // const [currentMosaic, setMosaic] = useState<MosaicParent<string>>(
    //     {
    //         direction: 'row',
    //         first: 'control',
    //         second: 'questions',
    //         splitPercentage: 15,
    //     }
    // )

    /**
     * Mount Display when received data is okay
     */
    let displayer;
    if (error) displayer = <p>failed to load data</p>;
    else if (!data) displayer = <p>Loading<TreeDotsLoading /></p>;
    else displayer = (
        <ObjectCardDisplay
            adicionalClassname={style['questions-display-adicional-style']}
            card={QuestionCard}
            mountCardsFrom={data.questions}
        />
    )

    // const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    //     control: <SidebarQuestion />,
    //     questions: displayer
    // }

    // const TITLE_MAP: Record<ViewId, string> = {
    //     control: 'Controle',
    //     questions: 'Questões',
    //     new: 'New Window',
    // };

    const factoryMap: FactoryMap = {
        'button': (node) => <button>{node.getName()}</button>,
        'control': (node) => <SidebarQuestion />,
        'questions': (node) => displayer
    }

    return (
        <div className={style.painel}>
            {/* <Mosaic<string>
                renderTile={
                    (id, path) => (
                        <MosaicWindow<ViewId>
                            path={path}
                            createNode={() => 'new'}
                            title={TITLE_MAP[id]}
                            toolbarControls={toolbarControls.map(
                                (control, key) => React.createElement(control, { key })
                            )}>
                            {ELEMENT_MAP[id]}
                        </MosaicWindow>
                    )
                }
                initialValue={currentMosaic}
            /> */}
            <FlexLayout.Layout model={model} factory={buildFactory(factoryMap)}/>
        </div>
    )
}