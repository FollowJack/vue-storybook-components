import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Pagination',
  parameters: {
    docs: {
      description: {
        component: `
Pagination communicates the number of elements (images, articles, commentaries, pages etc.) that can be loaded within a given context.
It shows the user where they are and enables direct access to previous and subsequent content items. It is possible to number pages and views or simply symbolize them by means of graphic elements.

The size of the pagination component depends on the selected variant, which can adapt to the use case or viewport width. As such, the component is flexible and has been designed to support a wide range of scenarios.

# Best practices
- Pagination should be used to make information easier to digest for the user (e.g. if a search returns thousands of results).
- Pagination should be used if the content on the page or interface would benefit from being split between different pages.
- Pagination should be used if the application's load times are negatively impacted as a result of trying to display too much content.
- Pagination should be used if screen space suffers as a result of having too much content to display.
- Pagination should be positioned at the bottom of the page or interface that it is controlling.


# Use cases
- Use pagination for table listings/data tables.
- Use pagination for search results.
- Use pagination for directories.
- Use pagination for image slideshows.
`
      }
    }
  },
  argTypes: {
  }
}

const actionsData = {
  onClick: action('click:pagination'),
}

const defaultArgs = {
  totalPages: 10,
  currentPage: 4,
  maxVisibleButtons: 3,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
      <PaginationElement v-bind="args" @click:pagination="onClick" />
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
