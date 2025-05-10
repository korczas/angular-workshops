import type { Meta, StoryObj } from '@storybook/angular';
import { FormDatepickerComponent } from './form-datepicker.component';
import { FormControl } from '@angular/forms';

const meta: Meta<FormDatepickerComponent> = {
    component: FormDatepickerComponent,
    title: 'FormDatepickerComponent',
    render: (args) => ({
        props: {
            ...args,
            control: new FormControl(''),
        },
    }),
};
export default meta;
type Story = StoryObj<FormDatepickerComponent>;

export const Primary: Story = {
    args: {
        hasError: false,
        helperText: 'Help me',
        label: 'Select date',
        errorMessage: 'Źle',
        placeholder: 'select',
        maxDate: null,
        minDate: new Date(),
        selectionMode: 'single',
        showClear: false,
    },
};
