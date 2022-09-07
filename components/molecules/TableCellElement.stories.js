export default {
  title: 'Atoms/TableCell',
  parameters: {
    docs: {
      description: {
        component: `
TableCell is the visible representation which is used in conjunction with TableElement.
`
      }
    }
  },
  argTypes: {
    as: {
      options: [
        'td', 'th',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
}

const defaultArgs = {
  as: 'td',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <TableCellElement v-bind="args">Person 1</TableCellElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
