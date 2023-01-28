import { render } from '@redwoodjs/testing/web'

import SiteNavLayout from './SiteNavLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SiteNavLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteNavLayout />)
    }).not.toThrow()
  })
})
