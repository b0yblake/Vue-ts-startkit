/* All colors are statically configured, consistent with styles/antd.less*/
const Color = {
  antd : {
    primary : '#00a971' ,  // global primary color
    link : '#00a971' ,  // link color
    success : '#52c41a' ,  // Success color
    warning : '#faad14' ,  // warning color
    error : '#f5222d' ,  // error color
    fontSizeBase : '14px' ,  // main font size
    headingColor : 'rgba(0, 0, 0, 0.85)' ,  // heading color
    textColor : 'rgba(0, 0, 0, 0.65)' ,  // main text color
    textColorSecondary : 'rgba(0, 0, 0, 0.45)' ,  // secondary text color
    disabledColor : 'rgba(0, 0, 0, 0.25)' ,  // disabled color
    borderRadiusBase : '2px' ,  // component/floating layer rounded corners
    borderColorBase : '#d9d9d9' ,  // border color
    boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15);' //
  }
}

type ColorType = typeof Color

export { Color, ColorType }