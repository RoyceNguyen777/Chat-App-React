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
                    <Title style={{color:'#ffff',fontSize:'60px',margin:'10px'}} >
                        Login to chat
                        <p style={{ margin: 'auto' }}>App được viết bởi Royce Nguyễn  <br />
                            <a href='tel:0764932229'> Gọi Điện Thoại cho tôi</a>
                            <br />
                            <a href='mailto:nguyenthahthu2014@gmail.com'> Gửi Mail cho tôi</a>

                        </p>
                    </Title>

                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                    <p style={{ margin: 'auto' }}>Hãy đăng nhập bằng Facebook hoặc Google của bạn và sử dụng như <a href='https://www.messenger.com/'>Messenger</a> . Mình bảo đảm an toàn
                        vì do mình dùng bên thứ 3 chuyên bảo mật <a href='https://developers.facebook.com/'>Tài Khoản của Facebook</a> và <a href='https://firebase.google.com/'>Google</a> <br />
                    </p>
                </div>

            </Col>
        </Row>
    );
}

export default Login
