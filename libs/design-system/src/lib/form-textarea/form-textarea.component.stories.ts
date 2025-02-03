import type { Meta, StoryObj } from '@storybook/angular';
import { FormTextareaComponent } from './form-textarea.component';
import { FormControl } from '@angular/forms';

const meta: Meta<FormTextareaComponent> = {
    component: FormTextareaComponent,
    title: 'FormTextareaComponent',
    render: (args) => ({
        props: {
            ...args,
            control: new FormControl(''),
        },
    }),
};
export default meta;
type Story = StoryObj<FormTextareaComponent>;

export const Primary: Story = {
    args: {
        errorMessage: 'Oh no!',
        hasError: false,
        helperText: 'Help me!',
        label: 'Your story',
        placeholder: 'tell me more',
        rows: 2,
    },
};
