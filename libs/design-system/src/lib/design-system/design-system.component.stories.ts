import type { Meta, StoryObj } from '@storybook/angular';
import { DesignSystemComponent } from './design-system.component';

const meta: Meta<DesignSystemComponent> = {
    component: DesignSystemComponent,
    title: 'DesignSystemComponent',
};
export default meta;
type Story = StoryObj<DesignSystemComponent>;

export const Primary: Story = {
    args: {},
};
