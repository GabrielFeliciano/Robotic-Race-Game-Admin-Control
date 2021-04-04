import { TabInput } from '@constant/tabs/tabs.d';
import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs';

import dynamic from 'next/dynamic';
const Tabs = dynamic<TabsProps>(import('react-tabs').then(mod => mod.Tabs), { ssr: false });

import 'react-tabs/style/react-tabs.css';
import style from './main-bar.module.scss';

const tabStyle = `react-tabs__tab ${style.tab}`;
const importantTabStyle = `${tabStyle} ${style.important}`;
const tabListStyle = `react-tabs__tab-list ${style['tab-list']}`;

interface Props {
    tabs: TabInput[]
}

export default function MainBar (props: Props) {
    return (
        <Tabs 
        className={style.tabs} 
        selectedTabPanelClassName={`react-tabs__tab-panel--selected ${style['active-painel']}`}>
            <TabList className={tabListStyle}>
                <p className={style.title}>Painel Admin</p>
                {
                    props.tabs.map(
                        (tab, key) => {
                            const classToImplement = tab.important 
                            ?   importantTabStyle
                            :   tabStyle;
                            return <Tab className={classToImplement} key={key}>{tab.name}</Tab>
                        }
                    )
                }
            </TabList>

            {
                props.tabs.map(
                    (tab, key) => (
                        <TabPanel key={key}>
                            <tab.painel></tab.painel>
                        </TabPanel>
                    )
                )
            }
        </Tabs>
    )
}