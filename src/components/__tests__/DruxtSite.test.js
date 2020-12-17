import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import { DruxtRouter, DruxtRouterStore } from 'druxt-router'
import { DruxtSite } from '../..'

jest.mock('axios')

const baseURL = 'https://demo-api.druxtjs.org'

// Setup local vue instance.
const localVue = createLocalVue()
localVue.use(Vuex)

let store

const mountComponent = () => {
  const mocks = {
    $fetchState: { pending: false }
  }
  const propsData = { theme: 'umami' }
  const stubs = ['DruxtBlockRegion']

  return mount(DruxtSite, { localVue, mocks, propsData, store, stubs })
}

describe('DruxtSite component', () => {
  beforeEach(() => {
    // Setup vuex store.
    store = new Vuex.Store()
    DruxtRouterStore({ store })
    store.$druxtRouter = () => new DruxtRouter(baseURL, {})
  })

  test('defaults', async () => {
    const wrapper = mountComponent()
    await wrapper.vm.$options.fetch.call(wrapper.vm)

    expect(wrapper.vm.theme).toBe('umami')
    expect(wrapper.vm.regions).toStrictEqual([
      'breadcrumbs',
      'highlighted',
      'pre_header',
      'banner_top',
      'header',
      'content',
      'bottom',
      'footer',
      'tabs',
      'page_title',
      'content_bottom'
    ])

    // Druxt Component mixin.
    expect(wrapper.vm.component.is).toBe('DruxtWrapper')
    expect(wrapper.vm.component.options).toStrictEqual(['DruxtSiteUmami', 'DruxtSiteDefault'])
  })
})
