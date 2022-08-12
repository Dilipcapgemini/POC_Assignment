define(['ojs/ojcore', 'knockout','ojs/ojformlayout','ojs/ojradioset','ojs/ojinputsearch','ojs/ojselectcombobox','ojs/ojcheckboxset' ,'ojs/ojinputtext','ojs/ojinputnumber','ojs/ojdatetimepicker', 'ojs/ojbutton'
], function (oj,ko) {
  
  function step2ContentViewModel() {
    var self = this;
    self.inputaddress1Value = ko.observable("Banglore")
    self.inputaddress2Value = ko.observable(null)
    self.inputcitynameValue  = ko.observable(null)
    self.inputstatenameValue = ko.observable(null)
    self.inputzipValue = ko.observable(null)
    self.inputphonenumberValue = ko.observable(null)
    self.inputfaxValue = ko.observable(null)
    self.inputemailValue = ko.observable(null)
    self.visatypecombobox = ko.observable('Visa-Type')
  }
    
  return step2ContentViewModel;
});