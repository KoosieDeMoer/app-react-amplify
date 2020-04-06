import Placeholder from 'components/Views/Placeholder';



const appRoutes = [

    { path: "/home", name: "Home", topLevel: true, icon: "fa fa-home", component: Placeholder },
    { path: "/discovery", name: "Discovery", topLevel: true, childItems: ['featureSearch', 'modelSearch', 'dataSearch'], icon: "lni-stats-up", component: Placeholder },
    { id: 'featureSearch', path: "/featureSearch", name: "Feature Search", icon: "fa fa-search", component: Placeholder, constructorArgs: null },
    { id: 'modelSearch', path: "/modelSearch", name: "Model search", icon: "fa fa-object-group", component: Placeholder },
    { id: 'dataSearch', path: "/dataSearch", name: "Data search", icon: "fa fa-database", component: Placeholder },
    { path: "/catalogues", name: "Catalogue", topLevel: true, childItems: ['apiCatalogue', 'modelsCatalogue'], icon: "fa fa-book", component: Placeholder },
    { id: 'apiCatalogue', path: "/apiCatalogue", name: "API Catalogue", icon: "fa fa-book", component: Placeholder },
    { id: 'modelsCatalogue', path: "/modelsCatalogue", name: "Models Catalogue", icon: "fa fa-book", component: Placeholder },
    { path: "/featureManagement", name: "Feature management", topLevel: true, childItems: ['addFeature', 'modifyFeature', 'deactivateFeature', 'referenceData'], icon: "fa fa-cogs", component: Placeholder },
    { id: 'addFeature', path: "/addFeature", name: "Add Feature", icon: "fa fa-plus", component: Placeholder },
    { id: 'modifyFeature', path: "/modifyFeature", name: "Modify Feature", icon: "fa fa-pencil", component: Placeholder },
    { id: 'deactivateFeature', path: "/deactivateFeature", name: "Deactivate Feature", icon: "fa fa-minus", component: Placeholder },
    { id: 'referenceData', path: "/referenceData", name: "Reference Data", icon: "pe-7s-config", component: Placeholder, constructorArgs: null },
    { path: "/monitoring", name: "Monitoring", topLevel: true, childItems: ['apiMonitoring', 'modelMetrics'], icon: "fa fa-tachometer", component: Placeholder },
    { id: 'apiMonitoring', path: "/apiMonitoring", name: "API monitoring", icon: "fa fa-tachometer", component: Placeholder },
    { id: 'modelMetrics', path: "/modelMetrics", name: "Models metrics", icon: "fa fa-tachometer", component: Placeholder },
    { path: "/reporting", name: "Reporting", topLevel: true, childItems: ['apiUsage'], icon: "fa fa-area-chart", component: Placeholder },
    { id: 'apiUsage', path: "/apiUsage", name: "API Usage", icon: "fa fa-area-chart", component: Placeholder },
    { path: "/faq", name: "FAQ", topLevel: true, icon: "fa fa-info", component: Placeholder },
    { path: "/contactUs", name: "Contact us", topLevel: true, icon: "fa fa-envelope", component: Placeholder },
    { redirect: true, path: "/", to: "/home", name: "Home" }

];

export default appRoutes;
