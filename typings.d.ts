interface Base {
  _id: string
  _rev: string
  _type: string
  _createdAt: string
  _updatedAt: string
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface Image {
  _type: "image"
  alt: string
  asset: Reference
}

interface PageInfo extends Base {
  name: string
  role: string
  heroImage: Image
  backgroundInformation: string
  profilePic: Image
  resumeUrl: string
  phoneNumber: string
  email: string
  address: string
  addressUrl: string
}

interface Experience extends Base {
  jobTitle: string
  companyImage: Image
  company: string
  dateStarted: date
  dateEnded: date
  isCurrentlyWorkingHere: boolean
  technologies: Skill[]
  points: string[]
}

interface Skill extends Base {
  title: string
  image: Image
  progress: number
  imageUrl: string
}

interface Project extends Base {
  title: string
  image: Image
  summary: string
  technologies: Skill[]
  link: string
}

interface Social extends Base {
  title: string
  url: string
}

interface ContactInputs {
  name: string
  email: string
  subject: string
  message: string
}
