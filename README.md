# free-swagger

根据 swagger 文档自动生成 api 文件，真正解放双手的工具

`目前仅支持 OpenApi2 规范的 swagger 文档，3.0 版本请先转为 2.0`

# 快速上手

free-swagger 提供了两种方式使用，上手非常简单

## 全局安装

### npx

> npx free-swagger free-swagger

### npm 

> npm i free-swagger -g

> free-swagger


在第一次运行时命令行会问你一些傻瓜式问题，真正需要输入的只有 `swagger 路径`，其他不需要额外配置的话回车即可


![image-20200103173040602](https://tva1.sinaimg.cn/large/006tNbRwly1gaji6hphlxj30wk0egah9.jpg)

之后 free-swagger 会记住用户的配置项，下次启动只需无脑回车即可～

## 项目安装

> npm i free-swagger -D

随后新建一个 js 脚本，引入 free-swagger 包，传入 swagger url 即可

```javascript
// api.js
const freeSwagger = require("free-swagger");

freeSwagger("https://petstore.swagger.io/v2/swagger.json").then();
```

之后在 nodejs 中运行当前脚本

```
node api.js
```

如果需要进一步的配置，则需要传入一个对象

```javascript
// api.js
const freeSwagger = require("free-swagger");
const json = require("./swagger.json");

freeSwagger({
  source: json,
  customImportCode: "import axios from './request'", // 假设请求库在 ./request 
  lang: "js"
}).then();
```

# 提醒

free-swagger 在生成 api 文件时会让用户选择需要生成哪些 api，以防止可能覆盖用户自定义的 api 文件（默认全选）

![image-20200103174105519](https://tva1.sinaimg.cn/large/006tNbRwgy1gajihbv47tj30uq0c2k2u.jpg)

当生成一次后，free-swagger 同样会记住用户的选择

# API

| 参数             | 说明                         | 类型                       | 可选值       | 默认值                      |
| ---------------- | ---------------------------- | -------------------------- | ------------ | --------------------------- |
| source           | swagger 路径（url/文件路径/json文件） | string/json                | -            | -                           |
| root             | 生成 api 的根路径            | string                     | -            | 当前路径 + src/api          |
| customImportCode | 自定义头部代码               | string                     | -            | "import axios from 'axios'" |
| lang             | 生成 api 语言                | string                     | "js" / "ts" | "ts"                        |
| template         | 生成 api 的模版              | Function(Config) | -            | 见源文件 src/default/template.ts |
| chooseAll | 选择全部 api | boolean | - | false |

**Config**

template 模版是一个函数，返回字符串，接受以下几个参数，用户可以自定义生成的 api 模版 

| 参数         | 说明                 | 类型    | 可选值 | 默认值 |
| ------------ | -------------------- | ------- | ------ | ------ |
| url          | 路径                 | string  | -      | -      |
| summary      | 注释                 | string  | -      | -      |
| method       | 方法                 | string  | -      | -      |
| name         | 名称                 | string  | -      | -      |
| responseType | 返回值类型，同 axios | string  | -      | "json" |
| deprecated   | 是否废弃             | boolean | -      | false  |
| IResponse    | 返回值接口类型       | string  | -      | -      |
| IParams      | 请求值接口类型       | string  | -      | -      |
| IPathParams  | 路径请求值接口类型   | string  | -      | -      |

默认的 ts 模版在 src/default/template.ts 下

```javascript
({
  url,
  summary,
  method,
  name,
  responseType,
  deprecated,
  IResponse,
  IParams,
  IPathParams
}) => `
  ${deprecated ? `/**deprecated*/` : ""}
  ${summary ? `// ${summary}` : ""}  
  export const ${name} = (params: ${
  IParams ? `${IParams}` : "{[key:string]: never}"
},${
  IPathParams ? `pathParams: ${IPathParams}` : ""
}) => axios.request<${IResponse || "any"}>({
     url: \`${url}\`, 
     method: "${method}",
     params:${method === "get" ? "params" : "{}"},
     data:  ${method === "get" ? "{}" : "params"},
     responseType: "${responseType}", 
 })`
```
