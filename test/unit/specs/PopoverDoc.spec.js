import Vue from 'vue'
import PopoverDoc from '@/docs/pages/PopoverDoc.vue'

describe('PopoverDoc', () => {
  it('should be able to destroy', (done) => {
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount()
    vm.$nextTick(() => {
      vm.$destroy()
      done()
    })
  })

  it('should be able to show popover', (done) => {
    const Constructor = Vue.extend(PopoverDoc)
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        expect(document.querySelectorAll('.popover').length).to.equal(1)
        vm.$el.querySelectorAll('button')[0].blur()
        setTimeout(() => {
          expect(document.querySelectorAll('.popover').length).to.equal(0)
          app.remove()
          done()
        }, 200)
      }, 200)
    })
  })

  it('should be able to change trigger to click', (done) => {
    const Constructor = Vue.extend(PopoverDoc)
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'click'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].click()
      setTimeout(() => {
        expect(document.querySelectorAll('.popover').length).to.equal(1)
        vm.$el.querySelectorAll('button')[0].click()
        setTimeout(() => {
          expect(document.querySelectorAll('.popover').length).to.equal(0)
          app.remove()
          done()
        }, 200)
      }, 200)
    })
  })

  it('should be able to disable', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.enable = false
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        expect(document.querySelectorAll('.popover').length).to.equal(0)
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to change title', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.title = 'test test test'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        expect(document.querySelectorAll('.popover').length).to.equal(1)
        expect(document.querySelector('.popover .popover-title').textContent).to.equal('test test test')
        document.querySelector('.popover').remove()
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to change placement to top', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.placement = 'top'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        let popover = document.querySelector('.popover')
        expect(popover).to.exist
        expect(popover.className).to.contain('top')
        popover.remove()
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to change placement to bottom', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.placement = 'bottom'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        let popover = document.querySelector('.popover')
        expect(popover).to.exist
        expect(popover.className).to.contain('bottom')
        popover.remove()
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to change placement to left', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.placement = 'left'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        let popover = document.querySelector('.popover')
        expect(popover).to.exist
        expect(popover.className).to.contain('left')
        popover.remove()
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to change placement to right', (done) => {
    let app = document.createElement('div')
    app.id = 'app'
    document.body.appendChild(app)
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount('#app')
    vm.trigger = 'focus'
    vm.placement = 'right'
    vm.$nextTick(() => {
      expect(document.querySelectorAll('.popover').length).to.equal(0)
      vm.$el.querySelectorAll('button')[0].focus()
      setTimeout(() => {
        let popover = document.querySelector('.popover')
        expect(popover).to.exist
        expect(popover.className).to.contain('right')
        popover.remove()
        app.remove()
        done()
      }, 200)
    })
  })

  it('should be able to render with hover trigger', (done) => {
    const Constructor = Vue.extend(PopoverDoc)
    const vm = new Constructor().$mount()
    vm.trigger = 'hover'
    vm.$nextTick(() => {
      done()
    })
  })
})
