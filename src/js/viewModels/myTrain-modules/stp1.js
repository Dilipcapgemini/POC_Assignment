/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your branch tab ViewModel code goes here
 */

/**
 * step1 module
 */
 define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
  
  function step1ContentViewModel() {
    var self = this;
    self.message = ko.observable("this is the modular step one panel");
  }
    
  return step1ContentViewModel;
});