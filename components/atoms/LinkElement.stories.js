import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/LinkElement',
  argTypes: {
    target: {
      options: [
        '_self', '_blank', '_parent', '_top'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click-button'),
}

const defaultArgs = {
  href: '#',
  id: '',
  target: '_self',
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <LinkElement v-bind="args" @click:link="onClick">
      Link to paradise...
      </LinkElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }