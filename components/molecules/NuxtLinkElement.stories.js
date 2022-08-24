import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/NuxtLink',
  parameters: {
    docs: {
      description: {
        component: `
A wrapper around the nuxtlink component. See the documentation: https://v3.nuxtjs.org/api/components/nuxt-link/ `
      }
    }
  },
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
    <NuxtLinkElement v-bind="args" @click:link="onClick" color="text-font-gray">
    Link to paradise...
    </NuxtLinkElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
