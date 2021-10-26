const Nav = { template: '#webnet__nav' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

var app = new Vue({
    el: '#app',
    components: {
        'Nav': Nav,
        'Foo': Foo
    },
    data: {
      message: 'Hello Vue!'
    }
})