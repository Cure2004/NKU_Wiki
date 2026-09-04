<template>
<svg
class="logo"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 88 88"
>
<defs>
<mask id="flower-mono-mask">
  <!-- 外圈：保留 -->
  <g fill="#fff">
  <rect x="13" y="13" width="62" height="62" />
  <rect x="13" y="13" width="62" height="62" transform="rotate(45 44 44)" />
  </g>
  <!-- 第二层：挖空 -->
  <g fill="#000">
  <rect x="19" y="19" width="50" height="50" />
  <rect x="19" y="19" width="50" height="50" transform="rotate(45 44 44)" />
  </g>
  <!-- 内圈：保留 -->
  <g fill="#fff">
  <rect x="25" y="25" width="38" height="38" />
  <rect x="25" y="25" width="38" height="38" transform="rotate(45 44 44)" />
  </g>
  <!-- 中心：挖空 -->
  <g fill="#000">
  <rect x="29" y="29" width="30" height="30" />
  <rect x="29" y="29" width="30" height="30" transform="rotate(45 44 44)" />
  </g>
</mask>
</defs>

<g mask="url(#flower-mono-mask)" fill="currentColor">
<rect x="13" y="13" width="62" height="62" />
<rect x="13" y="13" width="62" height="62" transform="rotate(45 44 44)" />
</g>
</svg>

</template>