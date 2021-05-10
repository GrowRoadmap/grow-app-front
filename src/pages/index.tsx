import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { RoadmapTitle } from 'components/RoadmapTitle';
import { Searchbar } from 'components/Searchbar';

const options = [
    {
        value: 'php',
        label: 'PHP',
    },
    {
        value: 'javascript',
        label: 'Javascript',
    },
    {
        value: 'java',
        label: 'Java',
    },
];

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box border='marcos'>aasdad</Box>
            <Text as='h1'>asodkaosdka</Text>
            <RoadmapTitle
                languageName='Javascript'
                languageIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
            />
            <Searchbar options={options} placeholder='procurar roadmap' />
        </Box>
    );
}
