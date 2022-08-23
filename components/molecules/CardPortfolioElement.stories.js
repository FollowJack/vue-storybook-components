import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/CardPortfolio',
  parameters: {
    docs: {
      description: {
        component: `
Simple rectangular container. The content can consist of multiple elements of varying types and sizes.

# Use cases
- A card can be used to display content related to a single subject.
`
      }
    }
  },
  argTypes: {
    title: {
      description: "The title slot",
      control: {
        type: 'text',
      },
      defaultValue: "E-Commerce",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    content: {
      description: "The content slot",
      control: {
        type: 'text',
      },
      defaultValue: "Amazing webshop",
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
  onClick: action('click:card'),
}

const defaultArgs = {
  urlImage: 'https://www.devparadise.io/_vercel/image?url=/team/team-1.webp&w=1536&q=100',
  alt: '',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <CardPortfolioElement v-bind="args" @click:card="onClick" class="w-full md:w-1/3 lg:w-1/4">
      <template #title>{{args.title}}</template>
      <template #content>{{args.content}}</template>
    </CardPortfolioElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
