import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/NuxtLink',
  argTypes: {
    variant: {
      options: [
        'gray', 'primary'
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        '', 'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
    target: {
      options: [
        '_self', '_blank', '_parent', '_top'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:button'),
}

const defaultArgs = {
  href: '#',
  variant: 'primary',
  id: '',
  target: '_self',
  disabled: false,
  border: true,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <NuxtLinkElement v-bind="args" @click:link="onClick" color="text-font-gray">
      Link to paradise...
      </NuxtLinkElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
