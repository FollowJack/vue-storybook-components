export default {
  title: 'Molecules/Breadcrumbs',
  parameters: {
    docs: {
      description: {
        component: `
A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## Use cases
- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
`
      }
    }
  },
  argTypes: {
    divider: {
      description: "The slot for the divider",
      control: {
        type: 'text',
      },
      defaultValue: null,
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
  breadcrumbs: [{
    text: 'Home',
    link: '#',
  }, {
    text: 'Users',
    link: '#',
  }, {
    text: 'Jack',
    link: '#',
  }],
  current: {
    text: 'Jack',
    link: '#',
  },
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <BreadcrumbsElement v-bind="args">
        <template #divider v-if="args.divider">
          {{args.divider}}
        </template>
      </BreadcrumbsElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
