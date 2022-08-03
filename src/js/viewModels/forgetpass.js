/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
* Your Forgetpass ViewModel code goes here
 */
define (['../accUtils','knockout','ojs/ojformlayout','ojs/ojselectcombobox', 'ojs/ojinputtext','ojs/ojinputnumber','ojs/ojdatetimepicker', 'ojs/ojbutton'],
function(accUtils,ko){
  function ForgetpassViewModel() {
    var self = this
    self.inputPasswordValue = ko.observable(null)
    self.inputPasswordValue = ko.observable(null)
    self.signinValue = "Sign In"
    
   }
 
   return ForgetpassViewModel;
  }
);
 