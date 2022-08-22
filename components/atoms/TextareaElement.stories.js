export default {
  title: 'Atoms/TextArea',
  parameters: {
    docs: {
      description: {
        component: `
Text areas are used when the user may be required to input longer form content, typically spanning across multiple lines. Text areas can hold any amount of text and in doing so grow in height as the user is entering their information. Unlike text fields, the label and entry text appear in a finely drawn frame.
<br/>

# Best practices
- Use a text area when the user is required to input longer form content.
- Use when the expected input may be more than one line. The field will automatically grow to accommodate additional text.
- Use a text area for collecting information such as feedback or comments from customers.
- Use the label to provide clear and concise direction on the information to be inputted in the field.
- Use a hint to provide the user with additional, contextual guidance.
- Label the form as (optional) when the input is not required.
- Do not use a text area when the input being requested is short form. Instead, use the TextInput component.
- Do not use a text area when the field is being used for search purposes. Instead, use the Search component.
<br/>

# Use cases
- As part of a form, for collecting feedback or comments from customers.
- As part of a customer dashboard, for providing comments based on an interaction a dealer has had with a customer
        `
      }
    }
  },
  argTypes: {
    variant: {
      options: [
        'copy-large',
        'copy-medium',
        'copy-small',
      ],
      control: { type: 'radio' },
    },
    weight: {
      options: [
        'normal',
        'bold',
      ],
      control: { type: 'radio' },
    },
    maxLength: {
      control: { type: 'number' }
    },
    minLength: {
      control: { type: 'number' }
    },
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    },
    name: {
      description: "The name of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    },
    value: {
      description: "The value of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    },
    placeholder: {
      description: "The placeholder attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format).",
      control: {
        type: 'text',
      },
    }
  }
}

const defaultArgs = {
  value: "Dolor sit amet",
  placeholder: null,
  variant: "copy-medium",
  weight: 'normal',
  minLength: null,
  maxLength: null,
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <TextAreaElement v-bind="args"/>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
