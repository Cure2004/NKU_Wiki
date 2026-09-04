---
aside: false
author: [Cure2004]
---

<script setup>
import memberData from "@/data/members.json"
import MemberList from "@/components/unique/MemberList.vue"
</script>

# 关于我们

南开 Wiki 项目组成立于 2026-09-01，目前正在撰写内容。

## 项目组成员

<MemberList :members="memberData" />

## 致谢

感谢各方友人的支持与帮助。本项目的整体架构衍生自开源项目 [西邮Wiki](https://wiki.cooo.site/)，我们严格遵守其开源许可协议，并在此对原项目的贡献者表示由衷的感谢。同时，也感谢校友及兄弟院校同学在开发过程中提供的宝贵建议。
