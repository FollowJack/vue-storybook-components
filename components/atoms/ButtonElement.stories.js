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
Buttons are used to show the user’s choice of options for actions and assign these to a clear hierarchy. A button helps the user to find the most important actions of a page or within a viewport and enables them to perform these actions. The label is used to clearly indicate to the user what action will be triggered. Buttons allow users to commit a change, complete steps in a task, or make choices.

# Best practices
- Use a primary button for the next best action. Remaining calls-to-action should be represented as secondary or text buttons.
- Use buttons in consistent locations in the user interface to improve user experience.
- Only use one primary button per viewport, no limits per page.
- Button labels must describe the action the button will perform and should include a verb. Use concise, specific, self-explanatory labels.
- Button labels should always include a noun if there is any room for interpretation about what the verb operates on.
- Do not use generic labels like "Ok," especially in the case of an error; errors are never "Ok".
- Use the button group component when there is a need to combine or lay out multiple buttons, and express different emphasis levels (e.g. one primary button and one secondary button).
- Do not use a primary button with a text button in a button group.
- Do not use a button for a text link or navigation item.

# Use cases
- Key calls to action, such as "Request a quote" or "Schedule a call."
- Supporting calls to action, such as "Learn more" or "Explore."
- Legal calls to action, such as "View key offer details."
- Alongside an input field, when there is an action to be taken after the user has inputted their information (e.g. searching for options).
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
        <TextElement class="w-20"></TextElement>
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

