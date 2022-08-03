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

define (['../accUtils','knockout','ojs/ojformlayout','ojs/ojradioset','ojs/ojselectcombobox','ojs/ojcheckboxset' ,'ojs/ojinputtext','ojs/ojinputnumber','ojs/ojdatetimepicker', 'ojs/ojbutton'],
function(accUtils,ko){
  function BranchViewModel() {
    var self = this
    self.inputtextValue = ko.observable(null)
    self.inputidValue = ko.observable(null)
    self.visatypecombobox = ko.observable('Visa-Type')
    self.inputnumberValue=  ko.observable(null)
   
   }
 
   return BranchViewModel;
  }
);