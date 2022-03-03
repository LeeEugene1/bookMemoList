import { Row, Col, Input, Button } from "antd";
import { useRef } from "react";

export default function Signin(){
    const emailRef = useRef<Input>(null)
    const passwordRef = useRef<Input>(null)
    return (
        <Row align="middle">
            <Col span={24}>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12}>
                        <div>My Books</div>
                        <div>Please Note Your Opinion</div>
                        <div>
                            Email
                            <span>*</span>
                        </div>
                        <Input type="text"
                        ref={emailRef}
                        ></Input>
                        <div>
                            Password
                            <span>*</span>
                        </div>
                        <div>
                        <Input type="password"
                        autoComplete="current-password"
                        name="password"
                        ref={passwordRef}></Input>
</div>
<div><Button size="large"
onClick={click}
>Sign In

</Button></div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    function click(){
        const email = emailRef.current!.state.value
        const password = passwordRef.current!.state.value
    
    }
}
