import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ToggleElement',
  argTypes: {
    size: {
      options: [
        'sm', 'md', 'lg',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  isInitialOn: false,
  value: '',
  id: '',
  name: '',
  disabled: false,
  size: 'sm',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <ToggleElement v-bind="args" @update:value="onClick">
        <TextElement variant="span">Toggle me</TextElement>
      </ToggleElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
