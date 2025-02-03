import { type Meta, type StoryObj } from '@storybook/angular';
import { FormInputComponent } from './form-input.component';
import { FormControl } from '@angular/forms';

const meta: Meta<FormInputComponent> = {
    component: FormInputComponent,
    title: 'FormInputComponent',
    render: (args) => ({
        props: {
            ...args,
            control: new FormControl(''),
        },
    }),
};
export default meta;

type Story = StoryObj<FormInputComponent>;

export const Primary: Story = {
    args: {
        label: 'Hello',
        helperText: 'Help me!',
        type: 'text',
        placeholder: 'Enter text',
        errorMessage: 'Oh no!',
        hasError: true,
    },
};
