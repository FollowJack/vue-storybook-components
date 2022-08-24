import { action } from '@storybook/addon-actions'

const variants = [
  'gray', 'primary', 'white', 'black'
]

export default {
  title: 'Molecules/SidebarItem',
  parameters: {
    docs: {
      description: {
        component: `
SidebarItem is part of the SidebarMenu component.
`
      }
    }
  },
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'radio' },
    },
    icon: {
      description: "The icon Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: null,
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    text: {
      description: "The text Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Accounts",
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
  onClick: action('click:nav'),
}

const defaultArgs = {
  href: "#",
  isActive: false,
  variant: 'primary',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <SidebarItemElement v-bind="args" @click:nav="onClick">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </template>
      <template #text>{{args.text}}</template>
    </SidebarItemElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const variantArgs = {
  href: "#",
  isActive: false,
}

const TemplateVariants = (args) => ({
  data() {
    return {
      variants,
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 lg:w-1/2">
      <div v-for="variant in variants" :key="variant" class="flex">
        <SidebarItemElement v-bind="args" :variant="variant" @click:nav="onClick">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </template>
          <template #text>Variant: {{variant}} isActive</template>
        </SidebarItemElement>
        <SidebarItemElement v-bind="args" :variant="variant" isActive @click:nav="onClick">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </template>
        <template #text>Variant: {{variant}} isActive</template>
      </SidebarItemElement>
      </div>
    </div>
    `,
})
export const Variants = TemplateVariants.bind({})
Variants.args = { ...variantArgs }

