import { Col, Row } from 'antd';
import 'firebase/compat/auth';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../firebase/config';
import './style.scss';
import { Typography } from 'antd'

const { Title } = Typography;

function Login() {

    return (
        <Row  >
            <Col span={24} className='login' >
                <div>
                    <Title level={1} type='danger'>Login to chat</Title>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </div>

            </Col>
        </Row>
    );
}

export default Login
