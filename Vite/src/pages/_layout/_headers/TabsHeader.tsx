import React, { useContext } from 'react';
import CommonHeaderChat from './CommonHeaderChat';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
//import { componentPagesMenu, dashboardPagesMenu } from '../../../menu';
import CommonHeaderRight from './CommonHeaderRight';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import ThemeContext from '../../../contexts/themeContext';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
const tablist = () => {
    return (
        <Tabs forceRenderTabPanel={true}>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
            </TabList>

            <TabPanel>
                <input type="text" placeholder="Nhập dữ liệu Tab 1" />
            </TabPanel>
            <TabPanel>
                <input type="text" placeholder="Nhập dữ liệu Tab 2" />
            </TabPanel>
        </Tabs>
    )
}

const TabsHeader = () => {
    const { width } = useDeviceScreen();
    const { tabs } = useContext(ThemeContext);
    return (
        <Header>
            <HeaderLeft>
                {tablist()}
            </HeaderLeft>
            <CommonHeaderRight afterChildren={<CommonHeaderChat />} />
        </Header>
    );
};

export default TabsHeader;
