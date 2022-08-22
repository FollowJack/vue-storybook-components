import { action } from '@storybook/addon-actions'

const variants = [
  'primary', 'secondary', 'ghost', 'danger', null,
]
const sizes = [
  'small', 'medium', 'large', null,
]

export default {
  title: 'Atoms/Button',
  parameters: {
    docs: {
      description: {
        component: `
Buttons can be used to show the user’s choice of options for actions and assign these to a clear hierarchy.
`
      }
    }
  },
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Click me",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    variant: {
      options: variants,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    type: {
      options: [
        'button', 'submit', 'reset',
      ],
      control: { type: 'radio' },
    },
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      description: "Aria label for cases where a text label is not visible on the screen",
      control: {
        type: 'text',
      },
    },
    name: {
      description: "The name of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    },
    value: {
      description: "The value of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    }

  },
}

const actionsData = {
  onClick: action('click:button'),
}

const defaultArgs = {
  variant: 'primary',
  size: 'small',
  rounded: true,
  ariaLabel: null,
  type: 'button',
  id: null,
  disabled: false,
  name: null,
  value: null,
}


const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="flex">
      <ButtonElement v-bind="args" @click:button="onClick">{{args.default}}</ButtonElement>
    </div>
    `,
})

export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateVariants = (args) => ({
  data() {
    return {
      sizes,
      variants,
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between">
        <TextElement class="w-20">Sizes</TextElement>
        <TextElement v-for="size in sizes" :key="size">{{size}}</TextElement>
      </div>
      <div class="flex justify-between" v-for="variant in variants" :key="variant">
        <TextElement class="w-20">{{variant}}</TextElement>
        <ButtonElement v-for="size in sizes" :key="size" :variant="variant" :size="size" v-bind="args" @click:button="onClick">{{args.default}}</ButtonElement>
      </div>
    </div>
    `,
})

const variantArgs = {
  rounded: true,
  ariaLabel: null,
  type: 'button',
  id: '',
  disabled: false,
  name: '',
  value: '',
}
export const Variants = TemplateVariants.bind({})
Variants.args = { ...variantArgs }

