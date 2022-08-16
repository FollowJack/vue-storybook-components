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
  value: 10,
  max: 100,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 pt-20">
      <ProgressBarElement v-bind="args" @toggle="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
