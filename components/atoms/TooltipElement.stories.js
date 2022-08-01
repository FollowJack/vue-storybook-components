import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/TooltipElement',
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <TooltipElement v-bind="args" @update:value="onClick">
        <template #tooltip-anchor>test-a</template>
        <template #tooltip-content>test-c</template>
      </TooltipElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
