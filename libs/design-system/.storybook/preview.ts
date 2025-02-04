import { provideHttpClient } from '@angular/common/http';
import { Preview, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

const preview: Preview = {
    decorators: [
        applicationConfig({
            providers: [provideAnimations(), provideHttpClient()],
        }),
    ],
};

export default preview;
