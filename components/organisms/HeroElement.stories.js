export default {
  title: 'Organisms/Hero',
  parameters: {
    docs: {
      description: {
        component: `
The hero component is a flexible but advanced component that can combine images, colours, text, links and calls to action.
Hero is taking the full screen height.

# Use cases
- Splashy home page banners.
- Can be used to separate sections on landing pages, or for temporary or promotional content.
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
      defaultValue: "Left content (main content) with e.g. CTA button.",
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
      defaultValue: "Right. Additional information or visual representations which is hidden on smaller devices.",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    "bottom": {
      description: "The bottom slot.",
      control: {
        type: 'text',
      },
      defaultValue: "Bottom. For further information.",
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
    <HeroElement v-bind="args" class="h-screen bg-blue-100">
      <template #left>{{args.left}}</template>
      <template #right>{{args.right}}</template>
      <template #bottom>{{args.bottom}}</template>
    </HeroElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
