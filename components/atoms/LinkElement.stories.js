import { action } from '@storybook/addon-actions'


const variants = [
  'gray', 'primary', 'white', 'black'
]

const sizes = [
  '', 'small', 'medium', 'large',
]

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
      options: variants,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
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


const variantsArgs = {
  href: '#',
  id: '',
  target: '_self',
  disabled: false,
  border: true,
}

const TemplateVariant = (args) => ({
  data() {
    return {
      variants,
      sizes,
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div>
      <div class="flex flex-1" v-for="size in sizes" :key="size">
        <div class="flex flex-1" v-for="variant in variants" :key="variant">
          <LinkElement :variant="variant" :size="size" v-bind="args" @click:link="onClick" color="text-font-gray">
            Size:{{size}} | Variant:{{variant}}
          </LinkElement>
        </div>
      </div>
    </div>
    `,
})
export const Variants = TemplateVariant.bind({})
Variants.args = { ...variantsArgs }
