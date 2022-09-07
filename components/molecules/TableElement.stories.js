export default {
  title: 'Molecules/Table',
  parameters: {
    docs: {
      description: {
        component: `
The TableElement represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
`
      }
    }
  },
}

const actionsData = {
}

const defaultArgs = {
  bordered: false,
  responsive: false,
  striped: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
<TableElement class="bg-blue-100" v-bind="args">
  <template #header>
    <TableCellElement as="th">Person 1</TableCellElement>
    <TableCellElement as="th">Person 2</TableCellElement>
    <TableCellElement as="th">Person 3</TableCellElement>
    <TableCellElement as="th">Person 4</TableCellElement>
    <TableCellElement as="th">Person 5</TableCellElement>
  </template>
  <template #body>
    <tr>
      <TableCellElement>Person 1</TableCellElement>
      <TableCellElement>Person 2</TableCellElement>
      <TableCellElement>Person 3</TableCellElement>
      <TableCellElement>Person 4</TableCellElement>
      <TableCellElement>Person 5</TableCellElement>
    </tr>
    <tr>
      <TableCellElement>Person 1</TableCellElement>
      <TableCellElement>Person 2</TableCellElement>
      <TableCellElement>Person 3</TableCellElement>
      <TableCellElement>Person 4</TableCellElement>
      <TableCellElement>Person 5</TableCellElement>
    </tr>
  </template>
</TableElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
