/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */

define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojknockout-keyset', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojcheckboxset', 'ojs/ojlabel', 'ojs/ojbutton'],
function (ko,  Bootstrap, ArrayDataProvider, keySet) {
  function AboutViewModel() {
    this.deptArray = [{ StudyRole: 'Template-CRA', Type: 'Sponsor'},
        { StudyRole: 'Template-clinical Supply Manager' , Type: 'Sponsor' },
        { StudyRole: 'Template-Data Manager' , Type: 'Sponsor' },
        { StudyRole: 'Template-Medical Monitor', Type: 'Sponsor' },
        { StudyRole: 'Template-Pharmacy User', Type: 'Site' },
        { StudyRole:'Template-Production Admin', Type: 'Sponsor'},
        { StudyRole: 'Template-Rules Designer', Type: 'Sponsor'},
        { StudyRole: 'Template-Site Administrator', Type:'Sponsor' },
        { StudyRole: 'Template-Site User', Type: 'Site'},
        { StudyRole:'Template-Statistician', Type: 'Sponsor'},
        { StudyRole: 'Template-Rules Designer', Type: 'Design'}];
        
    this.dataprovider = new ArrayDataProvider(this.deptArray, { keyAttributes: 'StudyRole' });
    this.columnArray = [{ headerTemplate: 'headerCheckTemplate',
      headerText:'Select All',
      template: 'checkTemplate',
      sortable: 'disabled'
    },
    { headerText: 'Study Role',
      field: 'StudyRole',
      id: 'StudyRole' },
    { headerText: 'Type',
      field: 'Type' }];

    this.selectedItems = new keySet.ObservableKeySet();
    this.headerCheckStatus = ko.observable();

    // get checkbox selected value based on selectedItems and selectAll state
    this.handleCheckbox = function (id) {
      var isChecked = this.selectedItems().has(id);
      return isChecked ? ['checked'] : [];
    }.bind(this);

    this.checkboxListener = function (event) {
      if (event.detail != null) {
        var value = event.detail.value;

            // need to convert to Number to match the DepartmentId key type
        var key = Number(event.target.dataset.rowKey);
        if (value.length > 0 && !this.selectedItems().has(key)) {
          this.selectedItems.add([key]);
        } else if (value.length === 0 && this.selectedItems().has(key)) {
          this.selectedItems.delete([key]);
        }
      }
    }.bind(this);

    this.headerCheckboxListener = function (event) {
      if (event.detail != null) {
        var value = event.detail.value;
        if (value.length > 0) {
          this.selectedItems.addAll();
        } else if (value.length === 0 && event.detail.updatedFrom == 'internal') {
          this.selectedItems.clear();
        }
      }
    }.bind(this);

    this.selectionListener = function (event) {
      var selected = event.detail.value.row;
      if (selected.isAddAll()) {
        selected.deletedValues().size > 0 ? this.headerCheckStatus([]) : this.headerCheckStatus(['checked']);
      } else {
        this.headerCheckStatus([]);
      }
      // show current selection in textarea
      this.printCurrentSelection(selected);
    }.bind(this);

    this.printCurrentSelection = function (selected) {
      var selectionTxt = '';

      if (selected.isAddAll()) {
        var iterator = selected.deletedValues();
        iterator.forEach(function (key) {
          selectionTxt = selectionTxt.length === 0 ? key : selectionTxt + ', ' + key;
        });

        if (iterator.size > 0) {
          selectionTxt = ' except ' + selectionTxt;
        }
        selectionTxt = 'Everything selected' + selectionTxt;
      } else {
        selected.values().forEach(function (key) {
          selectionTxt = selectionTxt.length === 0 ? key : selectionTxt + ', ' + key;
        });
      }

      document.getElementById('selectionCurrent').value = selectionTxt;
    };
  }
  var vm = new AboutViewModel();

  Bootstrap.whenDocumentReady().then(
    function () {
      var table = document.getElementById('table');
      ko.applyBindings(vm, table);

        // Need to block event propagation on checkbox click
        // to prevent default table row selection
      table.addEventListener('click', function (event) {
        if (event.target.className.indexOf('oj-checkbox') !== -1) {
          event.stopPropagation();
        }
      }, true);
    }
  );
});