// Create and set the attr to html tag
// Not good because get-set use same method
export function setAttrDom(attributes: string) {
  const attr = document.createAttribute(`data-theme`)
  attr.value = attributes
  document.documentElement.setAttributeNode(attr)
}
