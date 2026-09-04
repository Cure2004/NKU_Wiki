---
author: [Cure2004]
aside: false

campusLinks:
  - text: 南开大学
    link: https://www.nankai.edu.cn
    icon: https://www.nankai.edu.cn/_upload/article/images/77/1f/a7852bfa49c3bdea0f4564630e66/c658ec37-5315-4c7c-b5d5-aee3e3e570d3.jpg
    desc: 南开大学官网
  - text: 标题
    link: 链接
    icon: 图标链接
    desc: 描述

wikiLinks:
  - text: 西邮 Wiki
    link: https://wiki.cooo.site/
    icon: https://avatars.githubusercontent.com/u/176135942?s=60&v=4
    desc: 西安邮电大学非官方校园生活指南
  - text: NCEPUwiki
    link: https://wiki.ncepuinfo.cc/
    icon: https://wiki.ncepuinfo.cc/img/logo.svg
    desc: 华北电力大学wiki
  - text: QUTwiki
    link: https://wiki.ncepuinfo.cc/
    icon: https://pic1.imgdb.cn/i/0349E4NqLje1oLHNowvJ4R.png
    desc: 青岛理工大学生活指南
  - text: Ac-Wiki
    link: https://ac-wiki.org/
    icon: https://avatars.githubusercontent.com/u/185591372?s=200&v=4
    desc: 大学生的百科全书
  - text: 你缺失的那门计算机课
    link: https://www.criwits.top/missing/
    icon: https://www.criwits.top/missing/favicon.png
    desc: 电脑小白入门指南
---

<script setup lang="ts">
import LinkList from "@/components/unique/LinkList.vue";
</script>

# 友情链接

## 校内组织

<LinkList :links="$frontmatter.campusLinks" />

## 姊妹 Wiki

<LinkList :links="$frontmatter.wikiLinks" />
