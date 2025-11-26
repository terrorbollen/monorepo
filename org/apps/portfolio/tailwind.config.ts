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
  theme: {
    extend: {
      // Portfolio theme colors
      colors: {
        portfolio: {
          background: '#0a192f', // Dark navy
          lightNavy: '#112240',
          lightestNavy: '#233554',
          slate: '#8892b0',
          lightSlate: '#a8b2d1',
          lightestSlate: '#ccd6f6',
          white: '#e6f1ff',
          accent: '#64ffda', // Teal accent color
          orange: '#F97316', // Added orange color
        },
      },
    },
  },
} satisfies Config;
