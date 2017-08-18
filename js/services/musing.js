(function () {
  angular
  .module('musingsApp')
  .factory('musings', [
    musingsService
  ])

  function musingsService () {
    const musings = [
      {
        title: 'title',
        content: 'This is content',
        author: 'Me'
      },
      {
        title: 'An Awesome Title',
        content: 'This is awesome content',
        author: 'Anon'
      },
      {
        title: 'The Best Title',
        content: 'This is the best content',
        author: 'The one and only...'
      }
    ]

    return {
      all: all,
      create: create,
      remove: remove
    }

    function all () {
      return musings
    }

    function create (musing) {
      musings.push(musing)
    }

    function remove (index) {
      musings.splice(index, 1)
    }
  }
})()
