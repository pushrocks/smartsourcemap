import * as plugins from './smartsourcemap.plugins';

if (!process.env.CLI_CALL_TSRUN) {
  plugins.sourceMapSupport.install();
}
