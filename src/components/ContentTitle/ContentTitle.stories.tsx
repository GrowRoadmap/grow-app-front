import React from 'react';
import { ContentTitle } from './ContentTitle';

export default {
    title: 'ContentTitle',
};

const demoData = {
    title: 'Testando crawler data',
    description: 'lorem ipsum',
    url: 'http://google.com.br',
    icon: 'http://google.com.br',
};

export const DefaultView = () => (
    <div>
        <ContentTitle
            title='Como lidar com a ansiedade ao começar como programador?'
            user=' @MarcosRenato266'
            truncate={{ width: 200 }}
            crawlerData={demoData}
        />
        <ContentTitle
            title='Como lidar com a ansiedade ao começar como programador?'
            user=' @MarcosRenato266'
        />
    </div>
);
