'use strict';

var Assert = require('assert'),
    gulp = require('gulp'),
    gulpSpace = require('./')

var getTaskNamesInNamespace = gulpSpace(gulp)

function noop () { }

function addTask (name) {
  gulp.task(name, noop)
}

function joinWithColon (to, append) {
  return [ to, append ].join(':')
}

describe('getTaskNamesInNamespace', function testGetTaskNamesInNamespace () {
  var NAMESPACE_1 = 'build',
      SUBTASKS    = [ 'css', 'less', 'stylus' ],
      NAMESPACE_2 = 'compile:styles'

  it('handles single-level namespaces', function single () {
    SUBTASKS
      .map(joinWithColon.bind(joinWithColon, NAMESPACE_1))
      .map(addTask)

    var taskNames = getTaskNamesInNamespace(NAMESPACE_1)

    return Assert.deepEqual(taskNames, [ 'build:css', 'build:less', 'build:stylus' ])
  })

  it('handles multi-level namespaces', function multi () {
    SUBTASKS
      .map(joinWithColon.bind(joinWithColon, NAMESPACE_2))
      .map(addTask)

    // Random trickery
    addTask('build:compile:stylez', noop)

    var taskNames = getTaskNamesInNamespace(NAMESPACE_2)

    return Assert.deepEqual(taskNames, [ 'compile:styles:css', 'compile:styles:less', 'compile:styles:stylus' ])
  })
})
