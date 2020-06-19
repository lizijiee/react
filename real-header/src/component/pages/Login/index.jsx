import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./Login.less";

function NormalLoginForm(params) {
  const handleSubmit = e => {
    e.preventDefault();
    params.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  const { getFieldDecorator } = params.form;
  const [tab, setTab] = useState(0);

  return (
    <div className="login-wrap">
      <div className="login-top">
        <img src={require("../../../assets/favicon.png")} alt="中石油logo" />
        <span>中油瑞飞工业互联网平台</span>
      </div>
      <div className="login-main">
        <div className="login-tabs-wrap">
          <span
            className={tab === 0 ? "tab-selected" : null}
            onClick={() => {
              console.log(setTab(0), tab);
            }}
          >
            <em>账号密码登陆</em>
          </span>
          <span
            className={tab === 1 ? "tab-selected" : null}
            onClick={() => {
              console.log(setTab(1), tab);
            }}
          >
            <em>手机号登陆</em>
          </span>
        </div>
        <Form
          onSubmit={handleSubmit}
          className="login-form"
          style={{ display: tab === 0 ? "block" : "none" }}
        >
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "請輸入" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="请输入登陆密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录并授权
            </Button>
            或者 <a href="">免费注册</a>
          </Form.Item>
        </Form>
        <div style={{ display: tab === 1 ? "block" : "none" }}>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("phone", {
                rules: [{ required: true, message: "电话号码不能为空" }]
              })(
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入电话号码"
                />
              )}
            </Form.Item>
            <Form.Item style={{ display: "block" }}>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "验证码不能为空" }]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  style={{ width: "50%" }}
                  type="password"
                  placeholder="请输入验证码"
                />
              )}
              <Button>获取验证码</Button>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录并授权
              </Button>
              或者 <a href="">免费注册</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Form.create({ name: "normal_login" })(NormalLoginForm);
