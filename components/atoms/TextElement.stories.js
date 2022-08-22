const variants = [
  'headline1',
  'headline2',
  'headline3',
  'copy-large',
  'copy-medium',
  'copy-small',
]

const colors = [
  'primary',
  'black',
  'white',
  'gray',
  'light-gray',
  'disabled',
  'warning',
  'error',
  'success',
]

export default {
  title: 'Atoms/Text',
  parameters: {
    docs: {
      description: {
        component: `
The Text component can be used anywhere text needs to be displayed. The use of the different type weights enables content to be clearly structured and pages to be showcased in an effective, diversified manner. It separates styling from semantics and enables flexibility.
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
      defaultValue: "The quick brown fox jumps over the lazy dog.",
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
    color: {
      options: colors,
      control: { type: 'radio' },
    },
    weight: {
      options: [
        'normal',
        'bold',
      ],
      control: { type: 'radio' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'strong', 'i'],
      control: { type: 'radio' },
    },
  },
}

const defaultArgs = {
  color: 'black',
  variant: "copy-medium",
  weight: "normal",
  as: "p",
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <TextElement v-bind="args">{{args.default}}</TextElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const variantArgs = {
  color: 'black',
  variant: "copy-medium",
  weight: "normal",
  as: "p",
}


const TemplateTypography = (args) => ({
  data() {
    return {
      colors,
      variants,
    }
  },
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100 space-y-4">
      <div v-for="variant in variants" :key="variant">
        {{variant}}:
        <TextElement :variant="variant" v-bind="args">{{args.default}}</TextElement>
      </div>
      <div v-for="color in colors" :key="color">
        {{color}}:
        <TextElement :color="color" v-bind="args">{{args.default}}</TextElement>
      </div>
    </div>
    `,
})
export const Typography = TemplateTypography.bind({})
Typography.args = { ...variantArgs }

