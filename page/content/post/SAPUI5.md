---
draft: true
title: Codenvy
author: iocast
date: 2017-03-20
description: hmmm
categories:
- DevOps
tags:
- codenvy
---

# SAPUI5 - CHEATSHEET
## Content
[Initialize Project (WebIDE)](#initialize)  
[Router](#router)  
[JSONModel](#jsonmodel)  
[JS-Fragment](#jsfragment)  
[XML-Fragment](#xmlfragment)  
[XML-View](#xmlview)  
[View-Controller](#viewcontroller)  
[Chart's](#vizchart)  
[HTML in XML View](#html)  
[CSS](#css)  
[i18n](#i18n)  
[External JS Library use](#externallibrary)  
[Useful Links](#usefullinks)

### <a name="initialize"></a> Initialize Project (WebIDE)
To make a project in SAP WebIDE follow this steps:
1. Rightclick on folder __Workspace__
2. New > Project from Template
3. Select __SAPUI5 Application__
4. Give a project name and go to next page (do not finish!)
5. Select yout view type and give a view name (like __Main__)
6. Finish setup

An folder with your project name is generated and you can start coding!

### <a name="router"></a> Router
Setup the router in your first called View-Controller in onInit() function.
For setting up the router, use following code:

XML:
```xml
<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" controllerName="Test.controller.Main"
			xmlns:html="http://www.w3.org/1999/xhtml">
	<Page showHeader="false">
		<content>
			<!-- Create nav container for all the views -->
			<NavContainer id="navContainer" />
		</content>
	</Page>
</mvc:View>
```

JavaScript:
```javascript
var oRouter = new sap.ui.core.routing.Router({
    main: {
        pattern : "main",
        view    : "Main"
    },
    product: {
        pattern : "product/{id}",
        view    : "Product"
    }
}, {
    targetControl       : "navContainer", // container id of element, where the pages will be showed
    targetAggregation   : "pages", // type of used aggregation
    targetParent        : "idApp", // id of App (See index.html and give id)
    viewType            : "XML", // type of view
    viewPath            : "Test.view" // Place, where the views are
});

new sap.m.routing.RouteMatchedHandler(oRouter, false); // set the route handler
oRouter.register("router"); // register the router with name
oRouter.initialize(); // initialize the router
this._oRouter = oRouter; // set the content of attribute _oRouter
```

After this, your Router is functional!

Notice: In the other views, if you want the parameters (here by product, the parameter __id__), you have to get the router in Controllers onInit function, as following:
```javascript
this._oRouter = sap.ui.core.routing.Router.getRouter("router"); // get router by registered router name
this._oRouter.attachRouteMatched(function(oEvent) { // annonymous function by match
    if(oEvent.getParameter("name") === "product") { // check for correct route
        var parameters = oEvent.getParameter("arguments"); // give you an json of the parameters, so you can easy access by name
        var id = parameters.id; // return id as string

        // do something with the id
    }
});
```

Now we can access, but how do we navigate?  
Navigate to view without parameter:
```javascript
this._oRouter = sap.ui.core.routing.Router.getRouter("router"); // get router by registered router name
this._oRouter.navTo("main"); // Navigate to "Main"
```
Navigate to view with parameter:
```javascript
this._oRouter = sap.ui.core.routing.Router.getRouter("router"); // get router by registered router name
this._oRouter.navTo("product", {id: 12}); // navigate to "Product" with parameter as JSON! Key see in routing initialization
```

### <a name="jsonmodel"></a> JSONModel
To initialize a JSONModel, you use the following code:
```javascript
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({"entry":[]}); // set data by direct input
// oModel.loadData("resources/content.json", {}, false); // Load data from external json
oModel.setDefaultBindingMode("OneWay");

// bind model to view
this.getView().setModel(oModel, "ModelOnView");

// bind model to core (not recommend)
sap.ui.getCore().setModel(oModel, "ModelOnCore")
```

### <a name="jsfragment"></a> JS-Fragment (Basic)

### <a name="xmlfragment"></a> XML-Fragment (Basic)

### <a name="xmlview"></a> XML View
The inital page will be look like this:
```xml
<mvc:View controllerName="Test.controller.Main" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m">
	<App>
		<pages>
			<Page title="{i18n>title}">
				<content></content>
			</Page>
		</pages>
	</App>
</mvc:View>
```

This will show an empty page with the title __Title__ that will be show the title from i18n.
An important point is the mvc:View tag __controllerName__ that say, where your controller is.

In the __content__-tag you can put your content. For a list of all UI-Components see [here](https://sapui5.hana.ondemand.com/sdk/explored.html).

### <a name="viewcontroller"></a> View-Controller
When you create an View, you also will get a empty View-Controller named __<View-Name>.controller.js__.  
This controller have functions, that will be called automatically. These functions are:

|function|Call time|
|:-|:-|
|onInit()			| called once by initializing the view by system 	|
|onAfterRendering()	| called when view is fully rendered 				|
|onBeforeRendering()| called before view will be rendered				|
|onExit()			| called before exit the view						|

### <a name="vizchart"></a> Chart's (VizFrame)
For using a Viz-Frame, generate an Content holder in the XML-View:
```xml
<mvc:View controllerName="Test.controller.Main" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:viz="sap.viz.ui5.controls">
	<App>
		<pages>
			<Page id="main" title="{i18n>title}">
				<content>
				    <viz:VizFrame id="chart" width="100%"/>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>
```

Now in your onBeforeRendering function you can create the chart. Code sample for pie-chart:
```javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Test.controller.Main", {
        onBeforeRendering: function() {
            var data = {"entry":[ // PIE Chart data
                {"year":2016, "revenue":12000.43},
                {"year":2015, "revenue":9800.55},
                {"year":2014, "revenue":24231.33},
                {"year":2013, "revenue":13337.67},
                {"year":2012, "revenue":5299.00},
                {"year":2011, "revenue":4100.10},
                {"year":2010, "revenue":2154.34}
            ]};

            var oModel = new sap.ui.model.json.JSONModel(data); // Create JSONModel

            var chart = this.getView().byId("chart"); // Get chart
            chart.removeAllFeeds(); // remove the feeds

            chart.setModel(oModel); // add the JSONModel to chart
            chart.setVizProperties({"title":{"text":"My awesome pie chart!"}}); // Set the properties

            var pieSettings = { // Settings of cahrt
                path: "/entry",
                dimensions: [{
					name: "Year",
					value: "{year}"
				}],
				measures: [{
					name: "Revenue",
					value: "{revenue}"
				}],
				color: {
					uid: "color",
					type: "Dimension",
					values: ["Year"]
				},
				size: {
					uid: "size",
					type: "Measure",
					values: ["Revenue"]
				}
            };
            var pieDataset = new sap.viz.ui5.data.FlattenedDataset({ // Dataset of PIE Chart
				dimensions: pieSettings.dimensions,
				measures: pieSettings.measures,
				data: {
					path: pieSettings.path
				}
			});
			chart.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem(pieSettings.size));
        	chart.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem(pieSettings.color));

            chart.setVizType("pie");
            chart.setDataset(pieDataset);
        }
	});

});
```

NOTICE: The feeds are different by different vizTypes. See [here](https://sapui5.hana.ondemand.com/docs/vizdocs/index.html#reference/chartProperty/Charts), click on VizType, go on tab __Bindings__ and fill Feeds with min 1!

### <a name="html"></a> HTML in XML View
To use native HTML, SAPUI5 is giving you an simple way. Example:
```xml
<mvc:View controllerName="Test.controller.Main" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m">
	<App>
		<pages>
			<Page id="main" title="{i18n>title}">
				<content>
				    <html:Input type="checkbox" id="check" name="check"></html:Input>
				    <html:Label for="check">I'm a HTML Checkbox</html:Label>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>
```

### <a name="css"></a> CSS
To use CSS, the WebIDE will generate you a folder named __css__ with a file __style.css__. You can simply put your css in here.

If you are using an older version of a project, you can create the folder and file yourself and make a css reference in __index.html__ of the project. See here:
```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

Now you have two ways to access your css.

First way: Set class like in HTML
```xml
<Panel headerText="{i18n>title}" id="title" class="your_style_class">
	<content/>
</Panel>
```

Second way: Add style class with JavaScript
```javascript
// Access your element and set style class
this.getView().byId("element_id").addStyleClass("your_style_class");

// Remove class from element
this.getView().byId("element_id").removeStyleClass("your_style_class");
```

### <a name="i18n"></a> i18n
If you don't know what i18n is, see [here](https://en.wikipedia.org/wiki/Internationalization_and_localization).  
By basic generation, WebIDE will give you the possibility to easy access to i18n!

The settings are in the file __.project.json__. In section __translation__ you find the information. Set here your supported languages iso-code and the default language.
```json
"translation": {
    "translationDomain": "",
    "supportedLanguages": "en,fr,de",
    "defaultLanguage": "en",
    "defaultI18NPropertyFile": "i18n.properties",
    "resourceModelName": "i18n"
}
```

WebIDE is generating you a file __i18n.properties__ in folder __i18n__. This file is used for language, when no other file is found for local language of current user.

SAPUI5 is giving you a naming syntax for file.  
So if you want to make a file for english, generate file __i18n_en.properties__ in the folder. For german use __i18n_de.properties__ and so on.  
Fill the files with content, and only change the content after __'='__. The key has to be the same on all files!

Now if you change your browser language, you will see the website i18n content with the text in file.

### <a name="externallibrary"></a> External JS Library use (Example: Google Maps API)

### <a name="usefullinks"></a> Useful Links
[API SAPUI5](https://sapui5.netweaver.ondemand.com/#docs/api/symbols/sap.ui.html)  
[SAPUI5 Explored (XML UI Elements)](https://sapui5.hana.ondemand.com/sdk/explored.html)  
[SAPUI5 Icon Explorer](https://openui5.hana.ondemand.com/iconExplorer.html)  
[VizFrame Chart Settings](https://sapui5.hana.ondemand.com/docs/vizdocs/index.html#reference/chartProperty/Charts)  
