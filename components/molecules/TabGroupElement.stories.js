import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/TabGroup',
}

const actionsData = {
  onClick: action('select:tab'),
}

const defaultArgs = {
  initialSelected: "",
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <TabGroupElement v-slot="{ selected, handleSelect }" v-bind="args" @select:tab="onClick">
        <TabElement id="0" :selected="selected" @update:selected="handleSelect"
          >Profile</TabElement
        >
        <TabElement id="1" :selected="selected" @update:selected="handleSelect"
          >Dashboard</TabElement
        >
        <TabElement
          id="2"
          :selected="selected"
          disabled
          @update:selected="handleSelect"
          >Disabled</TabElement
        >
      </TabGroupElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
