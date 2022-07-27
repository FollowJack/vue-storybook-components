export default {
  title: 'Atoms/CheckboxElement',
}

const defaultArgs = {
  id: "form-checkbox-element",
  isChecked: true,
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <CheckboxElement v-bind="args"/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
