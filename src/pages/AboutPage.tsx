import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="全栈工程师张三，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是一名正在学习与实践中的个人开发者。</p>
          <p>目前对前后端开发都有浓厚兴趣，同时在学习 React 生态、前端工程化与项目性能优化。</p>
          <p>这个博客用来记录我的学习笔记、实战经验与成长过程。</p>
          <p>希望能和同样热爱编程的你一起交流进步！</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;