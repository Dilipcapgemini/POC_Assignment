/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your sites tab ViewModel code goes here
 */

define(['../accUtils', 'knockout',, 'ojs/ojknockout', 'ojs/ojtrain', 'ojs/ojbutton', 'ojs/ojmodule'],
function(accUtils,ko){
  
    function TrainViewModel() {
      var self = this;
      this.currentStepValue = ko.observable('stp1');
      this.stepArray =
          ko.observableArray(
             [{label: 'Setting', id: 'stp1'},
              {label: 'Site Address', id: 'stp2'},
              {label: 'Shipping', id: 'stp3'},
              {label: 'Finish', id: 'stp4'},
             ]);

      this.modulePath = ko.pureComputed(
        function () {
          return ('myTrain-modules/' + self.currentStepValue());
        }
      );
    };

    return new TrainViewModel();

  });