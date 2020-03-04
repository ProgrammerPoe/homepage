import React from 'react';
import Screen from '../../components/base/Screen/index.js';
import BorderedBox from '../../components/base/BorderedBox/index.js';

export default class MainScreen extends React.Component {

    render = () => {
        return (
            <>
                <Screen>
                    This is just a really simple message, <a href="https://google.com">Sigh</a>.
                    <BorderedBox>
                        This isn't tho
                    </BorderedBox>
                </Screen>
                <BorderedBox>
                    Idk about this m8;
                </BorderedBox>
            </>
        );
    }

}