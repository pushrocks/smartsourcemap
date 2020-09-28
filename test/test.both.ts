import { expect, tap } from '@pushrocks/tapbundle';
delete process.env.CLI_CALL_TSRUN;
import '../ts/index';

tap.test('first test', async () => {
  console.log('should create a sourcemap');
});

tap.start();
