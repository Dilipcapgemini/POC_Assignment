/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */

define (['../accUtils','knockout','ojs/ojformlayout','ojs/ojradioset','ojs/ojinputsearch','ojs/ojselectcombobox','ojs/ojcheckboxset' ,'ojs/ojinputtext','ojs/ojinputnumber','ojs/ojdatetimepicker', 'ojs/ojbutton'],
function(accUtils,ko){
  function DashboardViewModel() {
    var self = this
    self.inputsearchValue = ko.observable('Search by Name, Pl or Address')
    self.inputtextValue = ko.observable(null)
    self.inputfirstnameValue = ko.observable(null)
    self.inputlastnameValue = ko.observable(null)
    self.inputsitenameValue = ko.observable(null)
    self.inputsiteidValue = ko.observable(null)
    self.visatypecombobox = ko.observable('Visa-Type')
    self.inputdeanumberValue = ko.observable(null)
    self.inputdateValue = ko.observable(null)
    self.inputnumberValue =  ko.observable(null)
    self.selectManyValue =  ko.observable(null)
   
   }
 
   return DashboardViewModel;
  }
);


