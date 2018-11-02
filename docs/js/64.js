(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[64],{232:function(t,e){t.exports='<template>\n  <dao-setting-layout>\n    <template slot="layout-title">大标题</template>\n    <template slot="layout-title-helper">大标题一定要有，表单必有头</template>\n    <dao-setting-section>\n      <template slot="section-title">块内容标题</template>\n      <template slot="section-title-helper">一般情况下不需要块内容标题，需要显示表格时才可能要用到</template>\n      <template slot="label">左侧小标题</template>\n      <template slot="content">\n        <div>右侧内容</div>\n        <div>需要换行显示的内容一定要用 &lt;div&gt; 包裹</div>\n      </template>\n      <template slot="content-helper">&lt;dao-setting-section&gt; 之间是有分割线的</template>\n    </dao-setting-section>\n    <dao-setting-section>\n      <dao-setting-item>\n        <template slot="label">dao-setting-item-label</template>\n        <template slot="content">\n          <div>注意这两个 dao-setting-item 中间没有分割线</div>\n        </template>\n        <template slot="content-helper">中间不要有分割线的情况很少见，当遇到该需求时可以使用该 &lt;dao-setting-item&gt; 组件</template>\n      </dao-setting-item>\n      <dao-setting-item>\n        <template slot="label">dao-setting-item-label</template>\n        <template slot="content">\n          <div>注意这两个 dao-setting-item 中间没有分割线</div>\n        </template>\n        <template slot="content-helper">中间不要有分割线的情况很少见，当遇到该需求时可以使用该 &lt;dao-setting-item&gt; 组件</template>\n      </dao-setting-item>\n    </dao-setting-section>\n    <template slot="footer">\n      <div class="dao-btn blue">保存</div>\n    </template>\n  </dao-setting-layout>\n</template>'}}]);