import { ConfigClient } from '../utils'
import { jsTemplate } from './template'

export const mergeDefaultConfig = (
  config: ConfigClient
): Required<ConfigClient> => ({
  lang: 'js',
  templateFunction: eval(jsTemplate),
  ...config,
})
