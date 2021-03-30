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
        <Tabs className={style.tabs}>
            <TabList className={tabListStyle}>
                <h1 className={style.title}>Painel Admin</h1>
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
                        <TabPanel key={key} className={style.painel} >
                            <tab.painel></tab.painel>
                        </TabPanel>
                    )
                )
            }
        </Tabs>
    )
}