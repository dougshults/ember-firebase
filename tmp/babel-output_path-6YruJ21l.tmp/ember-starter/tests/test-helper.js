define('ember-starter/tests/test-helper', ['exports', 'ember-starter/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberStarterTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberStarterTestsHelpersResolver['default']);
});