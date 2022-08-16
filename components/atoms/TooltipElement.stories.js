import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Tooltip',
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
    <div class="bg-blue-100 pt-20">
      <TooltipElement v-bind="args" @toggle="onClick">
        <template #tooltip-anchor>Hover over me</template>
        <template #tooltip-content>I am the tooltip content</template>
      </TooltipElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
