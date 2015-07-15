/* eslint no-underscore-dangle: 0 */

'use strict';

module.exports = function exports (gulp) {
  /*
   * Gulp augmentation
   */
  function getTasks () {
    var isGulp4 = gulp._registry

    return isGulp4 ? gulp._registry._tasks : gulp.tasks
  }

  function getTaskNamesInNamespace (namespace) {
    var tasks     = getTasks(),
        taskNames = Object.keys(tasks)

    return taskNames.filter(function (taskName) {
      // It contains the namespace, but isn't the namespace itself
      return taskName !== namespace && taskName.indexOf(namespace) === 0
    })
  }

  return getTaskNamesInNamespace
}
