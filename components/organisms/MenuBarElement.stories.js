export default {
  title: 'Organisms/MenuBar',
  parameters: {
    docs: {
      description: {
        component: `
A menu bar is a group of related actions, or “navigation items,” which indicate the action that will be taken or content that will be revealed when the item is clicked.
Menu bars are commonly used for a couple of purposes.
First, to navigate users directly to specific content within the current page or to an external page.
Second, and similar to tabs, as a control to allow the user to switch between content, displaying the selected content and hiding other content, often making use of animated transitions to hide and reveal content.

# Best practices
- Use menu bars to present navigation or navigation-like actions (e.g. internal or external links, logging out, controlling what is visible on the page).
- Use the label to provide a clear and concise description of the content related to that specific menu item.
- If being used as in-page navigation, ensure the active navigation label correlates to the specific page section currently in focus.
- Do not use menu bars for actions that would better be presented as buttons (e.g. “save”, “delete”, “add item to cart”).
- Do not use menu bars as the main site navigation.
- Do not stack multiple menu bars directly adjacent to each other.
- Do not use menu bars for comparing content (e.g. different model specifications).
- Consider the number of menu items you are including within the menu bar. If it feels like the number is becoming overwhelming, consider alternative approaches to presenting the content or using a different navigation pattern/component.


# Use cases
- Use menu bars as in-page navigation on a model landing page.
- Use menu bars to organize related product information on a model landing page.
- Use menu bars to organize product offerings or benefits into different categories (e.g. services).
- Use menu bars to organize user profiles into different sections (e.g. personal information, product information, financial services information).
- Use menu bars to separate FAQs into different categories.
`
      }
    },
  },
}

const actionsData = {
}

const defaultArgs = {
  isStatic: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="h-screen">
      <MenuBarElement v-bind="args" class="bg-white">
        <template #left><div>Left slot</div></template>
        <template #middle><div>Middle slot</div></template>
        <template #right><div>Right slot</div></template>
      </MenuBarElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateApplicationMenu = (args) => ({
  data() {
    return {
      urlImage: 'https://www.devparadise.io/_vercel/image?url=/team/team-1.webp&w=1536&q=100'
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="h-screen">
      <MenuBarElement v-bind="args" class="flex-col md:flex-row justify-between bg-white space-y-4 md:space-y-0">
        <template #left>
          <div class="flex">
            <div class="flex items-center mr-2">
              <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/></svg>
            </div>
            <div class="flex flex-col">
              <TextElement weight="bold" variant="copy-large">Document</TextElement>
              <div class="flex space-x-2">
                <Button variant="ghost">File</Button>
                <Button variant="ghost">Edit</Button>
                <Button variant="ghost">View</Button>
                <Button variant="ghost">History</Button>
                <Button variant="ghost">Help</Button>
              </div>
            </div>
          </div>
        </template>
        <template #right>
          <AvatarGroupElement class="justify-end">
            <AvatarElement size="small" :urlImage="urlImage" />
            <AvatarElement size="small"> SE </AvatarElement>
            <AvatarElement size="small" :urlImage="urlImage" />
            <AvatarElement size="small" :urlImage="urlImage" />
            <AvatarElement size="small"> XY </AvatarElement>
          </AvatarGroupElement>
        </template>
      </MenuBarElement>
    </div>
    `,
})
export const ApplicationMenu = TemplateApplicationMenu.bind({})
ApplicationMenu.args = { ...defaultArgs }
