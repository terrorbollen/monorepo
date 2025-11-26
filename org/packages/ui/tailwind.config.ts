import type { Config } from 'tailwindcss';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import baseConfig from '../../tailwind.base';

export default {
  presets: [baseConfig],
  content: [
    // ...(baseConfig?.content || []),
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
} satisfies Config;
