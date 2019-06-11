

## URL Parameters and Application Parameters

source: http://help.sap.com/saphelp_nw70ehp1/helpdata/en/7b/fb57412df8091de10000000a155106/content.htm

```curl
<schema>://<host>.<domain>.<extension>:<port>/sap/bc/webdynpro/<namespace>/<application name>?<parameter name>=<parameter value>
```

eg

```curl
http://us7211.wdf.sap.corp:50021/sap/bc/webdynpro/sap/demo_table?sap-language=EN
```

The parameter names are not case sensitive, nor are the parameter values (exception: sap-exiturl, if it is pointed to a case-sensitive server). You can combine several parameters in one URL.


## Using Parameters to Call a Web Dynpro Application

The URL parameters of a Web Dynpro application are defined by the main component.

The window of a component has one or more inbound plugs, and these may have parameters. If a parameter is defined for an inbound plug, it must be assigned a value at runtime. Usually the URL call will transfer the parameter value to the inbound plug. Alternatively, you can set a default value for this parameter in the `Web Dynpro Explorer: Display Application`. This will be overwritten at runtime by the value of the URL parameter. If a default parameter is defined in the application, the value is optional.


### Procedure

1. In the component, switch to the window editor. Here you can change the predefined inbound plug, or create a new inbound plug.

	1. Specify the plug as a startup plug (Startup).
	2. The data type should be string since as yet the data cannot be converted or checked.
	3. Activate the component.

2. In the application specify the component to be called, the window, and the startup plug. You can now specify the parameters.
Apart from the default parameters, the startup plug parameters are also available and can be assigned a default value. If no default value is assigned, the parameters have to be specified as URL parameters when the application is called.

3. Start the application.
The URL parameter overwrites the application parameter.


http://sappo2.ktag.ch:50000/webdynpro/resources/ag.ch/ui~eep~test/TestApp?SAPtestId=0#

http://sappo2.ktag.ch:50000/webdynpro/resources/ag.ch/ui~eep~gesuch/EEPDirectApp?gesuchID=EEPO-7687-3297&tab=tCommune+tPrecheck



# debugging

http://www.hcc.in.tum.de/saphelp/nw731/PLAINHTM/DE/47/e0e79f372301cee10000000a421937/frameset.htm

http://www.hcc.in.tum.de/saphelp/nw731/PLAINHTM/DE/4a/38f6c292a81c62e10000000a42189c/frameset.htm
