import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Tooltip',
  parameters: {
    docs: {
      description: {
        component: `
Tooltips are containers for transient options such as menus, date pickers and supplementary actions.
They are an overlay component, sitting on top of the page content with appropriate shadow, and triggered by a source element. Use them when you have only a few additional details, choices, or interactions that aren't necessary to the main flow but will still be of value to users, such as adjusting a search range.
<br/>

# Use cases
- Additional information
- Media attribution
- Filters
<br/>

# Best practices
- Content within popovers should be directly relevant to the source element, and contain a focussed task for the user. It shouldn't be used to contain large amounts of additional content that could be placed directly onto the page instead.
- Content within a popover should be kept to a minimum. Particular care should be taken to minimize the chance that the popover will be cut off vertically when rendering on mobile.
- If it could be confusing which element is the source element, then a tip should be used.
- Avoid hiding actions that are critical for the user inside a popover.
`
      }
    }
  },
}

const actionsData = {
  onClick: action('toggle'),
}

const defaultArgs = {}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="pt-20">
      <TooltipElement v-bind="args" @toggle="onClick">
        <template #tooltip-anchor>
          <TextElement color="white">Hover over me</TextElement>
        </template>
        <template #tooltip-content>I am the tooltip content</template>
      </TooltipElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
