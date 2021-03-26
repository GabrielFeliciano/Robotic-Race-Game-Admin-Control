import { TabInput } from '@constant/tabs/tabs.d';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
        <Tabs>
            <TabList className={tabListStyle}>
                <h1 className={style.title}>Painel Admin</h1>
                {
                    props.tabs.map(
                        tab => {
                            const classToImplement = tab.important 
                            ?   importantTabStyle
                            :   tabStyle;
                            return <Tab className={classToImplement}>{tab.name}</Tab>
                        }
                    )
                }
            </TabList>

            {
                props.tabs.map(
                    tab => <TabPanel>{
                        <tab.painel></tab.painel>
                    }</TabPanel>
                )
            }
        </Tabs>
    )
}