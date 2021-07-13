import TheHeader from "@/components/TheHeader"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some condition to test:
1. TheHeader render ok -> display text "The Header"
*/

describe("TheHeader", () => {
  test('TheHeader render ok -> display text "The Header"', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.html()).toContain('<header class="header">The Header</header>')
  })
})