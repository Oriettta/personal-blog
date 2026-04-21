export interface Article {
    id: number;
    title: string;
    date: string;
    author: string;
    summary?: string;
    contentSections: { title: string; text: string; code?: string }[];
    tags: string[];
  }
  
const articlesData: Article[] = [
  {
    id: 1,
    title: "React Hooks 完全指南：从入门到精通",
    date: "2030-09-05",
    author: "momo",
    summary: "Hooks 彻底改变了 React 函数组件的写法，本文系统讲解 useState、useEffect、useMemo 等核心 Hook 原理与实战技巧。",
    contentSections: [
      { title: "什么是 React Hooks？", text: "Hooks 是 React 16.8 推出的特性，允许你在不编写 class 的情况下使用 state 与生命周期等功能，让函数组件更强大、更简洁。" },
      { title: "useState 状态管理", text: "useState 是最基础的 Hook，用于在函数组件中声明响应式状态，支持基本数据类型与复杂对象。", code: `const [count, setCount] = useState(0);
const increment = () => setCount(prev => prev + 1);` },
      { title: "useEffect 副作用处理", text: "useEffect 用于处理数据请求、DOM 操作、定时器等副作用，支持依赖项控制执行时机，是 Hooks 最核心的 API 之一。" }
    ],
    tags: ["React", "Hooks", "前端框架"]
  },
  {
    id: 2,
    title: "TypeScript 类型系统实战精讲",
    date: "2030-09-12",
    author: "momo",
    summary: "TypeScript 已成为前端必备技能，本文从基础类型到高级泛型，帮你快速构建类型安全的项目。",
    contentSections: [
      { title: "为什么要使用 TypeScript？", text: "TS 为 JavaScript 增加了静态类型检查，能在开发阶段提前发现错误，提升代码可读性与可维护性，特别适合中大型项目。" },
      { title: "常用基础类型", text: "包括 string、number、boolean、数组、对象、联合类型、任意类型等，是编写 TS 代码的基础。", code: `interface User {
  id: number;
  name: string;
  age?: number; // 可选属性
}
const user: User = { id: 1, name: "小明" };` },
      { title: "泛型与高级类型", text: "泛型让组件支持多种数据类型，同时保持类型约束，是封装工具函数、通用组件的必备能力。" }
    ],
    tags: ["TypeScript", "前端开发", "类型编程"]
  },
  {
    id: 3,
    title: "前端性能优化：从原理到实战",
    date: "2030-09-20",
    author: "momo",
    summary: "页面加载慢、交互卡顿？本文覆盖网络、渲染、代码、资源四大维度优化方案，让你的网站飞起来。",
    contentSections: [
      { title: "网络层面优化", text: "包括资源压缩、图片懒加载、HTTP 缓存、CDN 加速、代码分割、Tree Shaking 等，大幅减少请求体积与耗时。" },
      { title: "渲染性能优化", text: "减少重排重绘、使用 CSS transform 开启硬件加速、虚拟列表、避免强制同步布局，让页面滚动与交互更流畅。" },
      { title: "实战优化清单", text: "1. 图片使用 WebP 格式\n2. 开启 Gzip 压缩\n3. 第三方脚本异步加载\n4. 使用 React.memo / useMemo 避免无效渲染" }
    ],
    tags: ["性能优化", "前端工程化", "Web 性能"]
  }
];
  
  export function getArticles(): Article[] {
    return articlesData;
  }
  
  export function getArticleById(id: number): Article | undefined {
    return articlesData.find(article => article.id === id);
  }