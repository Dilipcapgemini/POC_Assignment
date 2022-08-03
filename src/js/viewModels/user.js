/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your registration ViewModel code goes here
 */

define (['../accUtils','knockout','ojs/ojformlayout','ojs/ojradioset','ojs/ojselectcombobox','ojs/ojcheckboxset' ,'ojs/ojinputtext','ojs/ojinputnumber','ojs/ojdatetimepicker', 'ojs/ojbutton'],
function(accUtils,ko){
  function UserViewModel() {
    var self = this
    self.inputdateValue = ko.observable(null)
    self.subjectValue = ko.observable(null)
    self.subjectweightValue = ko.observable(null)
    self.datetimeValue = ko.observable(null)
    self.visatypecombobox = ko.observable('Visa-Type')
    self.dateValue =  ko.observable(null)
    self.inputnumberValue=  ko.observable(null)
   
   }
 
   return UserViewModel;
  }
);