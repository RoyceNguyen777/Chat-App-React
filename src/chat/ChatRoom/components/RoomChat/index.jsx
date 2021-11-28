import { Button, Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import React from 'react';

function RoomChat({ changeRoom }) {

    return (
        <div className='RoomChat'>
            <Collapse defaultActiveKey={['1','2','3']} >
                <CollapsePanel header={<strong>GENERAL ROOM</strong>} key="1">
                    <Button onClick={() => changeRoom('GENERAL ROOM')} type="link" block>
                        GENERAL ROOM
                    </Button>
                </CollapsePanel>
                <CollapsePanel header={<strong>Chat Room 01</strong>} key="2">
                    <Button onClick={() => changeRoom('ROOM01')} type="link" block>
                        ROOM 01
                    </Button>
                    <Button onClick={() => changeRoom('ROOM02')} type="link" block>
                        ROOM 02
                    </Button>
                    <Button onClick={() => changeRoom('ROOM03')} type="link" block>
                        ROOM 03
                    </Button>
                </CollapsePanel>
                <CollapsePanel header={<strong>Chat Room 02</strong>} key="3">
                    <Button onClick={() => changeRoom('ROOM04')} type="link" block>
                        ROOM 04
                    </Button>
                    <Button onClick={() => changeRoom('ROOM05')} type="link" block>
                        ROOM 05
                    </Button>
                    <Button onClick={() => changeRoom('ROOM06')} type="link" block>
                        ROOM 06
                    </Button>
                </CollapsePanel>
            </Collapse>
        </div>
    );
}

export default RoomChat;