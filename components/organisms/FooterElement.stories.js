export default {
  title: 'Organisms/FooterElement',
  argTypes: {
    "left": {
      description: "The left slot",
      control: {
        type: 'text',
      },
      defaultValue: "Left",
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
      defaultValue: "right",
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
      defaultValue: "bottom",
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
    <div class="bg-blue-100">
      <FooterElement v-bind="args" class="bg-red-100">
        <template #left>{{args.left}}</template>
        <template #right>{{args.right}}</template>
        <template #bottom>{{args.bottom}}</template>
      </FooterElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
