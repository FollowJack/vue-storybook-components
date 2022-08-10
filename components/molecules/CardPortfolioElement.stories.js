import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/CardPortfolioElement',
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
    <div class="bg-blue-100">
      <CardPortfolioElement v-bind="args" @click:card="onClick">
        <template #title>{{args.title}}</template>
        <template #content>{{args.content}}</template>
      </CardPortfolioElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
