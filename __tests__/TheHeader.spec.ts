import TheHeader from "../src/components/global/TheHeader.vue"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some conditions to test:
1. TheHeader render success -> display text "The Header"
*/

describe("TheHeader", () => {
  test('TheHeader render success -> display text "The Header"', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.html()).toContain('<header class="header">The Header</header>')
  })
})
