export default {
  title: 'Atoms/TextElement',
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Lorem Ipsum dolor sit amet",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },

    variant: {
      options: [
        'copy-large',
        'copy-medium',
        'copy-small',
        'headline1',
        'headline2',
        'headline3',
      ],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'primary',
        'black',
        'white',
        'gray',
        'light-gray',
        'disabled',
        'warning',
        'error',
        'success',
      ],
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
