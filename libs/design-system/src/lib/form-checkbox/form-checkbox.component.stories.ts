import type { Meta, StoryObj } from '@storybook/angular';
import { FormCheckboxComponent } from './form-checkbox.component';
import { FormControl } from '@angular/forms';

const meta: Meta<FormCheckboxComponent> = {
    component: FormCheckboxComponent,
    title: 'FormCheckboxComponent',
    render: (args) => ({
        props: {
            ...args,
            control: new FormControl(''),
        },
    }),
};
export default meta;
type Story = StoryObj<FormCheckboxComponent>;

export const Primary: Story = {
    args: {
        hasError: false,
        label: 'Accept privacy policy',
        errorMessage: 'No musisz!',
    },
};
