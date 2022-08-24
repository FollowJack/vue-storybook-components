export default {
  title: 'Organisms/Footer',
  parameters: {
    docs: {
      description: {
        component: `
Footer can be used to layout the content. On purpose kept simple to adapt it to your needs.
`
      }
    }
  },
  argTypes: {
    "left": {
      description: "The left slot",
      control: {
        type: 'text',
      },
      defaultValue: "Left content",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    "right": {
      description: "The right slot",
      control: {
        type: 'text',
      },
      defaultValue: "Right content",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    "bottom": {
      description: "The bottom slot",
      control: {
        type: 'text',
      },
      defaultValue: "Bottom content",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
  }
}

const actionsData = {
}

const defaultArgs = {
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
      <FooterElement v-bind="args" class="bg-blue-100">
        <template #left>{{args.left}}</template>
        <template #right>{{args.right}}</template>
        <template #bottom>{{args.bottom}}</template>
      </FooterElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
