import React, { useContext, useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { demoPagesMenu } from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';

import Page from '../../../layout/Page/Page';
import { KeepAlive } from "react-activation";

import CommonDashboardSalesByStore from './common/CommonDashboardSalesByStore';
import CommonDashboardWaitingAnswer from './common/CommonDashboardWaitingAnswer';
import CommonDashboardTopSeller from './common/CommonDashboardTopSeller';
import ThemeContext from '../../../contexts/themeContext';

const HomePage = () => {
    const { mobileDesign } = useContext(ThemeContext);
    /**
     * Tour Start
     */
    const { setIsOpen } = useTour();
    useEffect(() => {
        if (localStorage.getItem('tourModalStarted') !== 'shown' && !mobileDesign) {
            setTimeout(() => {
                setIsOpen(true);
                localStorage.setItem('tourModalStarted', 'shown');
            }, 7000);
        }
        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //const { themeStatus } = useDarkMode();

    //const [activeTab, setActiveTab] = useState<TTabs>(TABS.YEARLY);

    return (
        <KeepAlive>
            <PageWrapper title={demoPagesMenu.sales.subMenu.dashboard.text}>
                <Page container='fluid'>
                    <div className='row'>
                        <div className='col-xxl-8'>
                            <input name='trung' placeholder='khong co gi' />
                        </div>
                        <div className='col-xxl-8'>
                            <CommonDashboardSalesByStore />
                        </div>

                        <div className='col-xxl-4 col-xl-6'>
                            <CommonDashboardWaitingAnswer />
                        </div>

                        <div className='col-xxl-8'>
                            <CommonDashboardTopSeller />
                        </div>

                    </div>
                </Page>
            </PageWrapper>
        </KeepAlive>
    );
};

export default HomePage;
