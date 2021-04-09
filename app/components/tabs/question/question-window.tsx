import React, { useCallback, useState } from 'react';

// SASS styling
import style from './question-window.module.scss';

// Makes Request to API
import useSWR from 'swr';
import QuestionCard from '@tab/question/question-card/question-card';

// Card Displayer, Question card
import ObjectCardDisplay from '@element/object-card-display/object-card-display'
import { QuestionsPayload } from '@constant/question/question.d';

// Tree dots loading animation while request isnt fulfilled
import TreeDotsLoading from '@element/tree-dots-loading/tree-dots-loading';

// Controller
import SidebarQuestion from './sidebar-control/sidebar-control';

// Layout Package
import FlexLayout, { Action, Actions, Model } from "flexlayout-react";

// Flexlayout Layout model and factory
import defaultModel from './model';
import { buildFactory, FactoryMap } from './factory/factory';

// Controls config
import { buildControl } from './sidebar-control/controls';

// Controller Actions
import CreateQuestion from './sidebar-control/actions/create-question';
import { WindowStore } from '@redux/store/window';
import { saveWindowModel } from '@redux/actions/window';

// Redux
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { WindowReducerState } from '@redux/reducers/window';

// IMPORTS END -------------------------------------------------------
// -------------------------------------------------------------------

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

// Props
interface QuestionWindowProps {
    saveWindowModel: typeof saveWindowModel
}


// QUESTION WINDOW COMPONENT
export default function QuestionWindow(props: QuestionWindowProps) {
    // SWR requester
    const { data, error } = useSWR<QuestionsPayload>(`http://${process.env.API}/question`, fetcher)

    // Redux
    const dispatch = useDispatch();
    const savedModelJson: Model = useSelector(
        (state: WindowReducerState) => state.model
    )

    // State
    const [ model, setModel ] = useState(
        savedModelJson ? FlexLayout.Model.fromJson(savedModelJson) : defaultModel
    );

    // controls for buttons
    const controls = buildControl(model);

    /**
     * Mount Display when received data is okay
     */
    let              displayer;
    if (error)       displayer = (
        <div className={style.error}>
            <h1>Failed to load data</h1>
            <p>{error.toString()}</p>
        </div>
    );
    else if (!data)  displayer = <h1>Loading<TreeDotsLoading /></h1>;
    else             displayer = (
        <ObjectCardDisplay
            adicionalClassname={style['questions-display-adicional-style']}
            card={QuestionCard}
            mountCardsFrom={data.questions}
        />
    )

    // A object that maps components to be used in the layout
    const factoryMap: FactoryMap = {
        'button': (node) => <button>{node.getName()}</button>,
        'control': (node) => <SidebarQuestion controls={controls} />,
        'questions': (node) => displayer,
        'CreateQuestion': (node) => <CreateQuestion />
    }

    return (
        <FlexLayoutContext.Provider value={model}>
            <div className={style.painel}>
                <FlexLayout.Layout 
                    model={model} 
                    factory={buildFactory(factoryMap)}
                    onModelChange={
                        (model) => {
                            console.log("model")
                            console.log(model)
                            dispatch(
                                saveWindowModel(model.toJson())
                            );
                            return model;
                        }
                    }
                />
            </div>
        </FlexLayoutContext.Provider>
    )
}