import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ProgressBar',
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'warning',
        'error',
        'success',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('toggle'),
}

const defaultArgs = {
  value: 46,
  max: 100,
  color: 'primary',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="w-1/2">
      <ProgressBarElement v-bind="args" @toggle="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const colorArgs = {
  value: 46,
  max: 100,
}

const TemplateColors = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="w-1/2 space-y-4">
      <ProgressBarElement v-bind="args" color="primary" @toggle="onClick" />
      <ProgressBarElement v-bind="args" color="secondary" @toggle="onClick" />
      <ProgressBarElement v-bind="args" color="warning" @toggle="onClick" />
      <ProgressBarElement v-bind="args" color="error" @toggle="onClick" />
      <ProgressBarElement v-bind="args" color="success" @toggle="onClick" />
    </div>
    `,
})
export const Colors = TemplateColors.bind({})
Colors.args = { ...colorArgs }
