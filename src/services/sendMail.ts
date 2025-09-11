import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_zgz8yxk'
const EMAILJS_TEMPLATE_ID = 'template_5pox2yi'
const EMAILJS_PUBLIC_KEY = 'It5AZUzGJMVz622IT'

export const sendContactMail = async (name: string, email: string, message: string) => {
  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Kirtankumar'
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    return response
  } catch (error) {
    throw error
  }
}
