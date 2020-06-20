import { genPath } from './gen/path'
import { Method, parsePath } from './parse/path'
import { OpenAPIV2 } from 'openapi-types'
import { ConfigClient } from './utils'
import { genInterface } from './gen/interface'
import {
  parseInterface,
  shouldSkipGenerate,
  recursiveMap,
  buildInInterfaces,
  genericInterfaceMap,
  map,
  findInterface,
  resetInterfaceMap,
} from './parse/interface'
import { formatCode } from './utils'
import { mergeDefaultConfig } from './default'

const freeSwaggerClient = (
  config: ConfigClient,
  url?: string,
  method?: Method
): string => {
  const chooseAll = !url || !method
  if (chooseAll) return ''

  const mergedConfig = mergeDefaultConfig(config)

  // api 名字
  const name: OpenAPIV2.OperationObject['operationId'] =
    config.source.paths[url!][method!].operationId
  if (!name) return ''

  const api = parsePath(
    name,
    `${config.source.basePath}${url}`,
    method!,
    config.source.paths[url!][method!]
  )

  const code = genPath(api, mergedConfig.templateFunction)
  return formatCode(mergedConfig.lang)(code)
}

// 生成单个 interface 代码
const compileInterface = (
  source: OpenAPIV2.Document,
  interfaceName: string,
  noContext = false
): string => {
  if (!source.definitions || shouldSkipGenerate(interfaceName, noContext))
    return ''
  parseInterface(source.definitions, interfaceName)
  return formatCode('ts')(genInterface(findInterface(interfaceName)))
}

// 生成全量 interface 代码
const compileInterfaces = (
  source: OpenAPIV2.Document,
  interfaceName?: string
): string => {
  if (!source.definitions) return ''
  resetInterfaceMap()

  if (interfaceName) {
    return compileInterface(source, interfaceName, true)
  } else {
    const headerCode = `// @ts-nocheck\n/* eslint-disable */\n// generated by free-swagger-client\n\n`
    const buildInInterfaceCode = Object.keys(buildInInterfaces).reduce(
      (acc, cur) => acc + buildInInterfaces[cur].code,
      ''
    )

    Object.keys(source.definitions).forEach((key) => {
      parseInterface(source.definitions!, key)
    })

    const interfaceCode = Object.keys(map).reduce(
      (acc, cur) => acc + compileInterface(source, cur),
      ''
    )

    const recursiveInterfaceCode = Object.keys(recursiveMap).reduce(
      (acc, cur) => acc + formatCode('ts')(genInterface(recursiveMap[cur])),
      ''
    )

    const interfaceWithGenericCode = Object.keys(genericInterfaceMap).reduce(
      (acc, cur) =>
        acc + formatCode('ts')(genInterface(genericInterfaceMap[cur])),
      ''
    )

    return formatCode('ts')(
      headerCode +
        buildInInterfaceCode +
        interfaceWithGenericCode +
        interfaceCode +
        recursiveInterfaceCode
    )
  }
}

export default freeSwaggerClient
export { compileInterfaces }
export * from './default/template'
export * from './utils'
export * from './gen/path'
export * from './parse/path'