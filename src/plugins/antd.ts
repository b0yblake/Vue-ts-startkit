  
import {
  Button,
  Card,
  Row,
  Col,
  Tag,
  Form,
  Input,
  ConfigProvider,
  Select,
  DatePicker,
  Dropdown,
  Menu,
  Divider,
  Badge,
  BackTop,
  Carousel
} from 'ant-design-vue'

/**
  * @description manually register the antd-vue component to achieve the purpose of on-demand loading
  * @description Automatically register components under Button, such as Button.Group
  * @param { ReturnType<typeof createApp> } app An instance of the entire application
  * @returns void
*/
export default function loadComponent(app: any) {
  app.use(Button)
  app.use(Card)
  app.use(Row)
  app.use(Col)
  app.use(Tag)
  app.use(Form)
  app.use(Input)
  app.use(Dropdown)
  app.use(Menu)
  app.use(Divider)
  app.use(ConfigProvider)
  app.use(Select)
  app.use(DatePicker)
  app.use(BackTop)
  app.use(Badge)
  app.use(Carousel)
}