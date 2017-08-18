(function () {
  angular
  .module('musingsApp')
  .controller('musingsController', [
    'musings',
    MusingsController
  ])

  function MusingsController (Musing) {
    this.musings = Musing.all()

    this.newMusing = {
      title: '',
      content: '',
      author: ''
    }

    this.createMusing = function () {
      Musing.create(this.newMusing)
    }

    this.removeMusing = function (index) {
      Musing.remove(index)
    }
  }
})()
