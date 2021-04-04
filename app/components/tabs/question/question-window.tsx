import { Container, Nav } from 'react-bootstrap';
import style from './question-window.module.scss';
import ObjectCardDisplay from '@element/object-card-display/object-card-display'
import useSWR from 'swr';
import QuestionCard from '@tab/question/question-card/question-card';
import { Question, QuestionsPayload } from '@constant/question/question.d';
import SidebarQuestion from './sidebar-question/sidebar-question';
import React from 'react';
import TreeDotsLoading from '@element/tree-dots-loading/tree-dots-loading';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';

const fetcher = async (url: string) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

type ViewId = 'a' | 'b' | 'new';

export default function QuestionWindow () {
    const { data, error } = useSWR<QuestionsPayload>(`http://${process.env.API}/question`, fetcher)

    /**
     * Mount Display when received data is okay
     */
    let displayer;
    if (error)       displayer = <p>failed to load data</p>;
    else if (!data)  displayer = <p>Loading<TreeDotsLoading/></p>;
    else             displayer = (
        <ObjectCardDisplay 
        card={QuestionCard} 
        mountCardsFrom={data.questions} 
        />
    )

    const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
        a: <SidebarQuestion />,
        b: displayer
    }

    const TITLE_MAP: Record<ViewId, string> = {
        a: 'Left Window',
        b: 'Top Right Window',
        new: 'New Window',
    };

    return (
        <div className={style.painel}>
            {/* <Mosaic<string> 
                renderTile={
                    (id, path) => (
                        <MosaicWindow<ViewId> path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>
                        ELEMENT_MAP[id]
                        </MosaicWindow>
                    )
                }
                initialValue={{
                    direction: 'row',
                    first: 'a',
                    second: 'b',
                    splitPercentage: 40,
                  }}
            /> */}
            <SidebarQuestion />
            {displayer}
        </div>
    )
}