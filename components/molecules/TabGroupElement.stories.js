import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/TabGroup',
  parameters: {
    docs: {
      description: {
        component: `
Tabs are used to organize and navigate between related content on the same page. Tabs ensure that large amounts of content can be organized in a manner that is easier to digest for the user. Tabs are arranged in bars of tabs called tab groups, with the tab label providing the user with an indication of what content will be revealed when the tab is selected.

# Best practices
- Use tabs to organize and group related content in a manner that does not require the user to navigate away from a page.
- Tabs should be positioned in a single, scrollable (if needed) row above the content it relates to.
- Use the tab label to provide a clear and concise description of the content contained in that tab and to help differentiate between the different sections.
- Only one tab should be active at a given time.
- Do not use tabs to create a sequence or progression of content that the user is expected to read in a given order.
- Do not use tabs for comparing content (e.g. different model specifications).
- Do not use tabs to navigate users to a different page.
- Consider the number of tabs you are including within the tab group. If it feels like the number is becoming overwhelming, consider further splitting the content or using a different navigation pattern/component.


# Use cases
- Use tabs to organize related product information on a model landing page.
- Use tabs to organize product offerings or benefits into different categories (e.g. Audi connect services).
- Use tabs to organize user profiles into different sections (e.g. personal information, vehicle information, financial services information).
- Use tabs to separate FAQs into different categories.
`
      }
    }
  },
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
