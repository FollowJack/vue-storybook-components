import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/DropdownElement',
  argTypes: {
    variant: {
      options: [
        '', 'primary', 'secondary', 'outline', 'ghost', 'danger',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('toggle'),
}

const defaultArgs = {
  isDefaultOpen: false,
  id: ''
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <DropdownElement v-bind="args" @toggle="onClick">
        <template #content>
          <ul
            class="py-1 text-gray-200"
          >
            <li class="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</li>
            <li class="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</li>
            <li class="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</li>
            <li class="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sign out</li>
          </ul>
        </template>
      </DropdownElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
