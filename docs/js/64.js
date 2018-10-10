(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[64],{232:function(n,a){n.exports='<template>\n  <div class="demo1">\n    <dao-tab>\n      <dao-tab-item heading="介绍">\n        <h1>功能介绍</h1>\n        <p>\n          通过监控和分析客户的点击流、交易数据、信息安全事件和网络活动，帮助您获得机器生成数据中富有价值的运维智能。通过强有力的全面搜索，可视化和预打包的用户案例内容，任何用户都可以快速发现并且分享见解。\n        </p>\n        <p>\n          仅需点击您的原始数据，即可开始分析您想分析的内容。 收集来自任何来源日志以及机器数据并为其建立索引 强有力的搜索、分析和可视化能力可以为各种类型的用户提供支持 应用为信息安全、IT 运营、业务分析等方面提供解决方案 可以查看本地、云和混合环境 提供适合任意组织的扩展、信息安全以及可用性。\n        </p>\n      </dao-tab-item>\n      <dao-tab-item heading="配置">\n        <dao-info-card\n          class="info-card"\n          size="lg"\n          :keyValue="keyvalue">\n          <div slot="title">\n            配置1\n          </div>\n        </dao-info-card>\n        <dao-info-card\n          size="lg"\n          :keyValue="keyvalue1">\n          <div slot="title">\n            配置2\n          </div>\n        </dao-info-card>\n      </dao-tab-item>\n    </dao-tab>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      keyvalue: [{\n        DNS服务器: \'8.8.8.8\',\n        DNS选项: \'timeout:3\',\n        DNS搜索: \'tdc1.company.com\',\n      }],\n      keyvalue1: [{\n        cpu限制: \'5核5核5核5核5核5核5核5核5核5核5核\',\n        内存限制: \'1000MB\',\n      }, {\n        cpu预留: \'1核\',\n        内存预留: \'不预留\',\n      }],\n    };\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n.demo1 {\n  h1 {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n  .info-card {\n    margin-bottom: 20px;\n  }\n}\n</style>\n'}}]);