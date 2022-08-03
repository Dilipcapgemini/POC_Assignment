/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your Admin ViewModel code goes here
 */
define(["../accUtils",  "ojs/ojcorerouter", "ojs/ojknockoutrouteradapter", "ojs/ojmodulerouter-adapter", "ojs/ojarraydataprovider", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojnavigationlist"], 
function (accUtils, CoreRouter, KnockoutRouterAdapter, ModuleRouterAdapter, ArrayDataProvider, ko, ojbootstrap_1) {

    
    class AdminViewModel {
        constructor(args) {
           var self = this;
           this.args = args; 
           
           self.childRoutes = [
                    { path: '', redirect: 'kits' },
                    { path: 'kits', detail: { label: 'Kits' } },
                    { path: 'branches', detail: { label: 'Branches' } },
                    { path: 'trainings', detail: { label: 'Tranings' } },
                    { path: 'roles', detail: { label: 'Roles' } },
                    { path: 'sites', detail: { label: 'Sites' } },
                    { path: 'enrolment', detail: { label: 'Enrolment' } }
                   
                  ];
            
               // Create ADP with partial array, excluding first redirect route
               this.dataProvider = new ArrayDataProvider(this.childRoutes.slice(1), {
                keyAttributes: "path",
            });
            
            self.childRouter = this.args.parentRouter.createChildRouter(self.childRoutes);
               
            self.childModule = new ModuleRouterAdapter (self.childRouter, {
                viewPath: "views/adminrouter",
                ViewModelPath: "viewModels/adminrouter/",
            });
            console.log (self.childModule);
             // Create an observable to react to the current router state path
             this.selection = new KnockoutRouterAdapter(self.childRouter);
             // Synchronize the router, causing it to go to its default route
             self.childRouter.sync();
         
        } 
        
    }
    return AdminViewModel;
   }

  );


    
    
 
            