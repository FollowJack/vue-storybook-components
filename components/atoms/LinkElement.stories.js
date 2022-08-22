import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Link',
  parameters: {
    docs: {
      description: {
        component: `
The anchor HTML element, with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.`
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
    <LinkElement v-bind="args" @click:link="onClick" color="text-font-gray">
    Link to paradise...
    </LinkElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
