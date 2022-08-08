export default {
  title: 'Molecules/BreadcrumbsElement',
  argTypes: {
    divider: {
      description: "The slot for the divider",
      control: {
        type: 'text',
      },
      defaultValue: "",
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
        {{args.default}}
      </BreadcrumbsElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
