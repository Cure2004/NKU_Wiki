---
author: [Cure2004]
---

# 参与编写

本指南介绍如何向南开 Wiki（NKU_WiKi）贡献内容。

## 准备环境

- [Node.js](https://nodejs.org/zh-cn/download) 24，推荐 pnpm。
- [Git](https://git-scm.com/)，配置用户名和邮箱
- 推荐编辑器：[VS Code](https://code.visualstudio.com/)

具体可参考[ VitePress 官方文档](https://vitepress.dev/zh/guide/getting-started#installation)

---

## 获取代码

```bash
# 先 Fork 源仓库，再在 GitHub 上复制你的 Fork 仓库地址
git clone https://github.com/YOUR_USERNAME/NKU_WiKi.git
cd NKU_WiKi

# 添加源仓库为 upstream，后续用于同步官方分支
git remote add upstream https://github.com/Cure2004/NKU_Wiki.git
git fetch upstream
```

::: warning 分支说明
本站 `main` 是受保护的主分支，不直接接收普通贡献 PR。日常文档贡献请提交到源仓库的 `contribute` 分支，维护者审核后再择机合并到 `main`。

如果你的 Fork 仓库里没有 `contribute` 分支，这是正常情况。你需要先从源仓库拉取 `upstream/contribute`，在本地创建自己的 `contribute` 分支，然后推送到自己的 Fork 仓库。
:::

创建并推送自己的 `contribute` 分支：

```bash
git fetch upstream
git checkout -b contribute upstream/contribute
git push origin contribute
```

---

## 安装并预览

```bash
pnpm i
pnpm run dev
```

浏览器访问 `localhost:5173`，修改 `.md` 后自动热更新。

普通文档贡献请优先使用 `pnpm i` 安装依赖，避免不同 pnpm 版本执行 `pnpm install` 时改动 `package-lock.json`。

---

## 编写文档

### 文件位置

`docs` 下按目录分类存放：

| 目录 | 内容 |
|------|------|
| `campus/` | 校园 |
| `life/` | 生活 |
| `study/` | 学习学业 |
| `coder/` | 实验室、频道和校友博客 |

### 命名与格式

- 小写英文 + 下划线：`military_training.md`
- 必含一个 `# 标题`
- 更多自定义功能正在开发中
- AppCards 和友情链接只填写 `http`、`https` 或站内相对链接，禁止 `javascript:`、`data:` 等协议

---

## 提交 PR

### 1. 确认 GitHub 身份

提交前请先确认本地 Git 的用户名和邮箱与 GitHub 账号匹配，否则贡献记录可能显示为空头像或无法关联到你的 GitHub 账号。

```bash
git config user.name
git config user.email
```

如果不匹配，请在当前仓库内设置为你的 GitHub 用户名和已验证邮箱。也可以使用 GitHub 提供的 noreply 邮箱：

```bash
git config user.name "YOUR_GITHUB_USERNAME"
git config user.email "YOUR_ID+YOUR_GITHUB_USERNAME@users.noreply.github.com"
```

如果已经提交但还没有 push，可以修正身份后重新写入提交作者信息：

```bash
git commit --amend --reset-author
```

### 2. 在自己的 `contribute` 分支提交

如果你已经按前文创建过 `contribute` 分支，后续贡献时执行：

```bash
# 同步源仓库的 contribute 分支
git fetch upstream

# 切换到自己的 contribute 分支
git checkout contribute

# 正常修改、提交并推送到自己的 Fork 仓库 contribute 分支
git add .
git commit -m "新增: 文档说明"
git push origin contribute
```

如果本地还没有 `contribute` 分支，请先执行：

```bash
git fetch upstream
git checkout -b contribute upstream/contribute
git push origin contribute
```

在 GitHub 上发起 Pull Request：

- base repository：源仓库 `Cure2004/NKU_Wiki`
- base 分支：`contribute`
- compare repository：你的 Fork 仓库 `YOUR_USERNAME/NKU_WiKi`
- compare 分支：你的 `contribute` 分支

请不要把 PR 直接提交到 `main`。`main` 受保护，且 `contribute` 的最新改动不会立即并入 `main`。

---

## 注意事项

- 每次贡献前先 `git fetch upstream`，确认自己的 `contribute` 分支基于最新的 `upstream/contribute`
- 一 PR 一事，不混入无关修改
- 引用资料注明出处，个人信息须经本人同意
- 不要在图片说明、链接或表格中嵌入脚本、事件属性或不受信任的远程资源
- 如果没有修改依赖，请不要提交 `package.json` 或 `package-lock.json` 的变化
- 收到 review 后在同一分支继续修改并 push 即可

## 开发群

加入南开 Wiki 项目组（QQ 群：1108024910）

## 贡献要求

- 文字排版符合 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md)
- 文本内容真实、适宜传播
- 主题围绕南开大学相关内容
- 协议为 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)
