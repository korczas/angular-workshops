import type { Meta, StoryObj } from '@storybook/angular';
import { FormSelectComponent } from './form-select.component';
import { FormControl } from '@angular/forms';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
];

const meta: Meta<FormSelectComponent> = {
    component: FormSelectComponent,
    title: 'FormSelectComponent',
    render: (args) => ({
        props: {
            ...args,
            control: new FormControl(''),
        },
    }),
};
export default meta;
type Story = StoryObj<FormSelectComponent>;

export const Primary: Story = {
    args: {
        errorMessage: 'Źle',
        hasError: false,
        helperText: 'Help me',
        labelKey: 'name',
        label: 'Select city',
        options: cities,
        placeholder: 'select',
        valueKey: 'code',
    },
};
