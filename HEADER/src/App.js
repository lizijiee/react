import React from "react";
import { useState, useEffect, useRef } from "react";
// import logo from './logo.svg';
// import GetQueryString from "./GetQueryString";

import { Icon } from "antd";
import "./App.less";

const menuTree = [
  {
    id: 1,
    path: null,
    value: "工业平台",
    children: [
      {
        id: 2,
        _parentId: 1,
        path: "http://11.11.14.1:32005/landing/login/",
        value: "PaaS平台",
        children: []
      },
      {
        id: 3,
        _parentId: 1,
        path: "http://11.11.53.65:8888",
        value: "工业互联网基础平台",
        children: []
      },
      {
        id: 4,
        _parentId: 1,
        path: "http://11.11.53.190:8080/#",
        value: "大数据平台",
        children: [
          {
            id: 5,
            _parentId: 4,
            path: "http://11.11.53.190:8080/#/main/dashboard/metrics",
            value: "大数据管理",
            children: []
          },
          {
            id: 6,
            _parentId: 4,
            path: "http://11.11.53.190:8779/",
            value: "实时引擎",
            children: []
          },
          {
            id: 7,
            _parentId: 4,
            path: "http://11.11.53.190:6080/#/main/tenement/list",
            value: "安全中心",
            children: []
          },
          {
            id: 8,
            _parentId: 4,
            path: "http://11.11.53.190:3007/#/main/hostManagement",
            value: "数据集成",
            children: []
          },
          {
            id: 9,
            _parentId: 4,
            path: "http://11.11.53.65:8888",
            value: "数据中心",
            children: []
          },
          {
            id: 10,
            _parentId: 4,
            path: "http://11.11.53.190:8585/#/home",
            value: "多维建模",
            children: []
          },
          {
            id: 11,
            _parentId: 4,
            path: "http://11.11.53.190:9321/",
            value: "任务调度",
            children: []
          },
          {
            id: 12,
            _parentId: 4,
            path: "http://11.11.53.80:8001/#/project",
            value: "数据挖掘",
            children: []
          },
          {
            id: 13,
            _parentId: 4,
            path: "http://11.11.53.190:21001/#/main/home",
            value: "数据治理",
            children: []
          },
          {
            id: 14,
            _parentId: 4,
            path: "http://11.11.53.78:8000/",
            value: "敏捷BI",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 18,
    path: null,
    value: "应用管理",
    children: [
      {
        id: 19,
        _parentId: 18,
        path: "http://11.11.78.240:9091/#/user/login",
        value: "门户后台控制台",
        children: []
      }
    ]
  },
  {
    id: 20,
    path: null,
    value: "开发者中心",
    children: [
      {
        id: 21,
        _parentId: 20,
        path: "http://11.11.53.220",
        value: "开发者门户",
        children: []
      },
      {
        id: 22,
        _parentId: 20,
        path: "http://11.11.174.166:8090/bbs/",
        value: "开发者论坛",
        children: []
      },
      {
        id: 23,
        _parentId: 20,
        path: "http://11.11.174.165:19091/demo/",
        value: "开发者文档中心",
        children: []
      }
    ]
  },
  {
    id: 25,
    path: null,
    value: "技术支撑工具",
    children: [
      {
        id: 26,
        _parentId: 25,
        path: "http://11.11.174.165:8066",
        value: "用户中心",
        children: []
      },
      {
        id: 27,
        _parentId: 25,
        path: "http://11.11.174.165:8070",
        value: "分布式配置服务",
        children: []
      },
      {
        id: 28,
        _parentId: 25,
        path: "http://11.11.174.165:1111",
        value: "服务注册中心",
        children: []
      },
      {
        id: 29,
        _parentId: 25,
        path: "http://11.11.174.165:5601",
        value: "日志服务",
        children: []
      },
      {
        id: 30,
        _parentId: 25,
        path: "http://11.11.78.158:8081",
        value: "短信服务",
        children: []
      },
      {
        id: 31,
        _parentId: 25,
        path: "http://11.11.174.165:8001/",
        value: "微服务网关服务",
        children: []
      },
      {
        id: 32,
        _parentId: 25,
        path: "http://11.11.174.165:18082",
        value: "微服务管理控制台",
        children: []
      },
      {
        id: 33,
        _parentId: 25,
        path: "http://11.11.174.166:8848/nacos/#/login",
        value: "微服务注册服务",
        children: []
      },
      {
        id: 34,
        _parentId: 25,
        path: "http://11.11.78.158:3000/",
        value: "平台监控服务",
        children: []
      },
      {
        id: 35,
        _parentId: 25,
        path: "http://11.11.78.159",
        value: "负载均衡服务",
        children: []
      },
      {
        id: 36,
        _parentId: 25,
        path: "http://11.11.78.160",
        value: "数据集成服务",
        children: []
      },
      {
        id: 37,
        _parentId: 25,
        path: "http://11.11.78.160:9003",
        value: "分布式事务服务",
        children: []
      },
      {
        id: 38,
        _parentId: 25,
        path: "http://11.11.174.165:28080/#/main",
        value: "分布式性能监控服务",
        children: []
      }
    ]
  }
];

function App() {
  // const [count, setCount] = useState(0);
  const ref = useRef();
  const [isHovered, setHovered] = useState({
    show: false,
    // imgUrl: imageMenu
  });

  // const [obj, setObject] = useState({
  //   count: 0,
  //   name: "alife"
  // });

  // useEffect(() => {
  //   console.log(ref.current.offsetLeft);
  // },[ref.current]);

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);
  //   return () => {
  //     document.title = "componentWillUnmount";
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <header className="common-basic-bar">
      <div className="common-topbar-logo">
        <a href="/">
          <img src={require("./assets/favicon.png")} alt="logo" />
        </a>
        <span>中国石油工业互联网平台</span>
      </div>
      <div
        ref={ref}
        className="common-all-nav"
        onMouseEnter={() => {
          // console.log(setHovered({ show: true, imgUrl: imageClose }));
        }}
      >
        <i className="menu-icon" />
        <div className="common-all-menu">
          <ul
            className="common-navs-collected"
            onMouseLeave={() => {
              // console.log(setHovered({ show: false, imgUrl: imageMenu }));
            }}
          >
            {menuTree.map((e, i) => (
              <li
                key={e.id}
                // onMouseEnter={() => {
                //   setHovered(true);
                //   setObject({ ...obj, count: i });
                // }}
              >
                <span>{e.value}</span>
                <div
                  className="common-nav-wrap"
                  // style={{ display: isHovered ? "block" : "none" }}
                  // onMouseLeave={() => {
                  // setHovered(false);
                  // setObject({ ...obj, count: i });
                  // }}
                >
                  {menuTree[i].children.map(a => {
                    if (a.children.length) {
                      return (
                        <div className="common-nav-item" key={a.id}>
                          <div>
                            <h5> {a.value}</h5>
                          </div>
                          <ul className="common-menu-nav">
                            {a.children.map(item => {
                              return (
                                <li key={item.id}>
                                  <a
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.value}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="common-nav-item common-nav-item-null"
                          key={a.id}
                        >
                          <div>
                            <h5>
                              <a
                                href={a.path}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {a.value}
                              </a>
                            </h5>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="common-topbar-right">
        <a
          href="http://11.11.78.160:9090/api/fs/download?group=group1&amp;path=M00/00/00/CwtOoF1eNDuABbW3ACgGbtxc0-M16.docx&amp;fileName=%E9%97%A8%E6%88%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.docx"
          download="test"
        >
          <img src={require("./assets/question.png")} alt="logo" />
          {/* <Icon type="question-circle" /> */}
        </a>
        <div className="common-topbar-notice">
          {/* <Icon type="sound" /> */}
          <img
            src={require("./assets/notice.png")}
            alt="sound-icon"
            className="sound-icon"
          />
          <div className="common-topbar-dot" />
          <div className="common-notice-content">
            <div className="common-notice-head">
              <span>站内消息通知</span>
              <a href="https://notifications.console.aliyun.com/#/subscribeMsg">
                消息接收管理
              </a>
            </div>
            <div className="common-notice-body">
              <ul className="common-notice-list">
                <li>
                  <a
                    target="_blank"
                    className="clearfix"
                    rel="noopener noreferrer"
                    href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712"
                  >
                    <p>
                      【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿
                    </p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="clearfix"
                    rel="noopener noreferrer"
                    data-spm-anchor-id="5176.12818093.aliyun_topbar.34"
                    href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712"
                  >
                    <p
                      className="topbar-notice-item-name"
                      title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿"
                    >
                      【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿
                    </p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="clearfix"
                    rel="noopener noreferrer"
                    data-spm-anchor-id="5176.12818093.aliyun_topbar.34"
                    href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712"
                  >
                    <p
                      className="topbar-notice-item-name"
                      title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿"
                    >
                      【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿
                    </p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="clearfix"
                    rel="noopener noreferrer"
                    data-spm-anchor-id="5176.12818093.aliyun_topbar.34"
                    href="https://notifications.console.aliyun.com/#/innerMsg/allDetail/7907359712"
                  >
                    <p
                      className="topbar-notice-item-name"
                      title="【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿"
                    >
                      【邀您报名】第五届中间件性能挑战赛正式开战！20万现金大奖等你拿
                    </p>
                    <p className="topbar-notice-item-time">2019-07-01 09:47</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="common-notice-foot">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="common-notice-more"
                href="https://msc.console.aliyun.com/#/innerMsg/unread/0"
              >
                查看更多
              </a>
            </div>
          </div>
        </div>
        <div className="common-topbar-official">
          <a href="/" target="_self">
            <img src={require("./assets/home.png")} alt="logo" />
            {/* <Icon type="home" /> */}
          </a>
        </div>
        <div className="common-topbar-user">
          <img src={require("./assets/user.png")} alt="user-profile" />
          <ul className="common-user-list">
            <div className="nav-trangle"></div>
            <li>
              <Icon
                type="user"
                style={{ fontSize: "16px", marginRight: "8px" }}
              />
              <span>个人中心</span>
            </li>
            <li>
              <Icon
                type="setting"
                style={{ fontSize: "16px", marginRight: "8px" }}
              />
              <span>个人设置</span>
            </li>
            <li className="common-divider"></li>
            <li>
              <Icon
                type="logout"
                style={{ fontSize: "16px", marginRight: "8px" }}
              />
              <span>退出登录</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
