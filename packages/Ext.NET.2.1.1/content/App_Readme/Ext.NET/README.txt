Product      : Ext.NET.Pro
Version      : 2.1.1
Last Updated : 2012-12-10


--------------------------------------------------------------------------
   CONTENTS
--------------------------------------------------------------------------

I.   SYSTEM REQUIREMENTS
II.  ADD TO VISUAL STUDIO TOOLBOX INSTRUCTIONS
III. Version 2.1.1 REVISIONS + BREAKING CHANGES
IV.  SAMPLE WEB.CONFIG
V.   <extnet> WEB.CONFIG GLOBAL CONFIGURATION PROPERTIES
VI.  CREDITS


--------------------------------------------------------------------------
   I. SYSTEM REQUIREMENTS
--------------------------------------------------------------------------

1. Visual Studio 2008, 2010 or 2012, or
2. Visual Studio Express 2008, 2010 or 2012
3. .NET Framework 3.5, 4.0* or 4.5

*minimum required for Ext.NET MVC

	
--------------------------------------------------------------------------
   II. ADD TO VISUAL STUDIO TOOLBOX INSTRUCTIONS
--------------------------------------------------------------------------

Getting Started (NuGet)

The easiest and quickest way to install Ext.NET is using NuGet. 
Run the following command in Visual Studio Command panel, or seach for "Ext.NET" in NuGet Package Manager.

    Install-Package Ext.NET


Getting Started (Manual)

The following steps are required to manually install the controls into 
your Visual Studio or Visual Web Developer Express Toolbox. 
		
	1.  Open Visual Studio 2010 or Visual Web Developer Express 2010.

	2.  Open an existing web site or create a new web site project.
	
	3.  Open or create a new .aspx page.

	4.  Open the ToolBox panel, typically located on the left side in a 
	    fly-out panel (Ctrl + Alt + x).

	5.  Create a new "Ext.NET" Tab, by...
		  a. Right-Click in the ToolBox area.
		  b. Select "Add Tab".
		  c. Enter "Ext.NET".

	6.  Inside the "Ext.NET" tab, Right-Click and select 
	    "Choose Items...".

	7.  Under the ".NET Framework Components" Tab select the "Browse" 
	    button.

	8.  Navigate to and select the Ext.Net.dll file, choose open, then 
	    select the "Ext.NET.dll" from the extracted download .zip package.
		
		Ext.NET can always be downloaded from the following location, see
		
		http://www.ext.net/download/ 
			
	9.  The component items should now be added to the list and 
	    pre-checked. You can confirm by sorting the list by "Namespace" 
	    and scrolling to "Ext.Net"

	10. Click "OK". The icons should be added to your ToolBox. You should 
	    now be able to drag/drop a Ext.NET component onto your WebForm.
	
	11. Enjoy.


--------------------------------------------------------------------------
   III. Version 2.1.1 REVISIONS + BREAKING CHANGES
--------------------------------------------------------------------------

See CHANGELOG.txt and BREAKING_CHANGES.txt


--------------------------------------------------------------------------
   IV. SAMPLE WEB.CONFIG
--------------------------------------------------------------------------

<?xml version="1.0"?>
<configuration>
	<configSections>
		<section name="extnet" type="Ext.Net.GlobalConfig" requirePermission="false" />
	</configSections>
  
	<extnet scriptMode="Release" theme="Gray" /> <!-- See Property Options below in Sec IV. -->
  
	<!-- 
		The following system.web section is only requited for running ASP.NET AJAX under Internet
		Information Services 6.0 (or earlier).  
		
		This section is not necessary for IIS 7.0 or later, although does not have to be removed.
	-->
	<system.web>
		<httpHandlers>
			<add path="*/ext.axd" verb="*" type="Ext.Net.ResourceHandler" validate="false" />
		</httpHandlers>
		<httpModules>
			<add name="DirectRequestModule" type="Ext.Net.DirectRequestModule, Ext.Net" />
		</httpModules>
		<pages>
			<controls>
				<add assembly="Ext.Net" namespace="Ext.Net" tagPrefix="ext" />
			</controls>
		</pages>
	</system.web>
  
	<!-- 
		The system.webServer section is required for running ASP.NET AJAX under Internet Information Services 7.0.
		
		It is not necessary for previous version of IIS, although does not have to be removed. 
	-->
	<system.webServer>
		<validation validateIntegratedModeConfiguration="false"/>
		<modules>
			<add 
				name="DirectRequestModule" 
				preCondition="managedHandler" 
				type="Ext.Net.DirectRequestModule, Ext.Net" 
				/>
		</modules>
		<handlers>
			<add 
				name="DirectRequestHandler" 
				verb="*" 
				path="*/ext.axd" 
				preCondition="integratedMode" 
				type="Ext.Net.ResourceHandler"
				/>
		</handlers>
	</system.webServer>
	<runtime>
		<assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
			<dependentAssembly>
				<assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" />
				<bindingRedirect oldVersion="1.0.0.0-4.5.9" newVersion="4.5.10" />
			</dependentAssembly>
			<dependentAssembly>
				<assemblyIdentity name="Ext.Net.Utilities" publicKeyToken="2c34ac34702a3c23" />
				<bindingRedirect oldVersion="0.0.0.0-2.0.1" newVersion="2.1.0" />
			</dependentAssembly>
			<dependentAssembly>
				<assemblyIdentity name="Transformer.NET" publicKeyToken="e274d618e7c603a7" />
				<bindingRedirect oldVersion="0.0.0.0-2.0.0" newVersion="2.1.0" />
			</dependentAssembly>
		</assemblyBinding>
	</runtime>
</configuration>


--------------------------------------------------------------------------
   V. <extnet> WEB.CONFIG GLOBAL CONFIGURATION PROPERTIES
--------------------------------------------------------------------------
  
directEventUrl : string
	The url to request for all DirectEvents.
    Default is "".
                  
directMethodNamespace : string
	Specifies a custom namespace prefix to use for the DirectMethods. Example "CompanyX".
	
	Example with default value:
	
		Ext.net.DirectMethods.doSomething();
	
	Example with a custom value:
	
		CompanyX.doSomething();

directMethodProxy : ClientProxy
	Specifies whether server-side Methods marked with the [DirectMethod] attribute will output configuration script to the client. 
	If false, the DirectMethods can still be called, but the Method proxies are not automatically generated. 
	Specifies ajax method proxies creation. The Default value is to Create the proxy for each ajax method.
	Default is 'Default'. Options include [Default|Include|Ignore]

ajaxViewStateMode : ViewStateMode
	Specifies whether the ViewState should be returned and updated on the client during an DirectEvent. 
	The Default value is to Exclude the ViewState from the Response.
	Default is 'Default'. Options include [Default|Exclude|Include]

cleanResourceUrl : boolean
	The Ext.NET controls can clean up the autogenerate WebResource Url so they look presentable.        
	Default is 'true'. Options include [true|false]

clientInitDirectMethods : boolean
	Specifies whether server-side Methods marked with the [DirectMethod] attribute will output configuration script to the client. 
	If false, the DirectMethods can still be called, but the Method proxies are not automatically generated. 
	Default is 'false'. Options include [true|false]

idMode : IDMode
	Specifies how the Client ID for the control should be sent to the client. Similar in functionality to ASP.NET 4.0 ClientIDMode property. 
	The Default value is Legacy.
	Default is 'Legacy'. Options include [Legacy|Inherit|Static|Ignore|Explicit]

initScriptMode : InitScriptMode
	Specifies how the initialization JavaScript code will be rendered in the client. 
	Inline will place the Ext.onReady block within the Page <head>.
	Linked will create a link to the init block and download in a separate request. 
	The Default value is Inline.
	Default is 'Inline'. Options include [Inline|Linked]          

locale : string
	Specifies language of the ExtJS resources to use.    
	Default is to return the System.Threading.Thread.CurrentThread.CurrentUICulture if available. 
                  
gzip : boolean
	Whether to automatically render scripts with gzip compression.        
	Only works when renderScripts="Embedded" and/or renderStyles="Embedded".       
	Default is true. Options include [true|false]

scriptAdapter : ScriptAdapter
	Gets or Sets the current script Adapter.     
	Default is "Ext". Options include [Ext|jQuery|Prototype|YUI]

removeViewState : boolean
	True to completely remove the __VIEWSTATE field from the client. 
	If true, the VIEWSTATE is not sent to, nor returned from the client. 
	Default is "false". Options include [true|false]

renderScripts : ResourceLocationType
	Whether to have the Ext.NET controls output the required JavaScript includes or not.       
	Gives developer option of manually including required <script> files.        
	Default is Embedded. Options include [Embedded|File|None] 

renderStyles : ResourceLocationType
	Whether to have the Ext.NET controls output the required StyleSheet includes or not.       
	Gives developer option of manually including required <link> or <style> files.       
	Default is Embedded. Options include [Embedded|File|None]

resourcePath : string
	Gets the prefix of the Url path to the base ~/extnet/ folder containing the resources files for this project. 
	The path can be Absolute or Relative.

scriptMode : ScriptMode
	Whether to include the Release (condensed) or Debug (with inline documentation) Ext JavaScript files.       
	Default is "Release". Options include [Release|Debug]

sourceFormatting : boolean
	Specifies whether the scripts rendered to the page should be formatted. 'True' = formatting, 'False' = minified/compressed. 
	Default is 'false'. Options include [true|false]

stateProvider : StateProvider
	Gets or Sets the current script Adapter.
	Default is 'PostBack'. Options include [PostBack|Cookie|None]

theme : Theme
	Which embedded theme to use.       
	Default is "Default". Options include [Default|Gray|Slate]

quickTips : boolean
	Specifies whether to render the QuickTips. Provides attractive and customizable tooltips for any element.
	Default is 'true'. Options include [true|false]

	
--------------------------------------------------------------------------
                             VI. CREDITS
--------------------------------------------------------------------------
	
1.  FamFamFam Icons provided by Mark James 
    http://www.famfamfam.com/lab/icons/silk/
	
    See \Build\Resources\Ext\Licenses\FamFamFam.txt for more information.

2.  Flag icons provided by Mark James 
	http://www.famfamfam.com/lab/icons/flags/

	These icons are public domain, and as such are free for any use 
	(attribution appreciated but not required).
	
    See \Build\Resources\Ext\Licenses\FlagIcons.txt for more information.

2.  Silk companion icon set #1 - "More Silk!" provided by Damien Guard
	http://www.damieng.com/icons/silkcompanion

	See \Build\Ext.Net\Licenses\SilkCompanionIcon.txt for more information.

3.  Json.NET provided by James Newton-King
    http://www.codeplex.com/json/
    
    See \Build\Ext.Net\Licenses\Newtonsoft.Json.txt
    
4.  Ext JS JavaScript Library provided by Sencha, Inc.
    http://www.sencha.com/products/js/   
    
    See \Build\Ext.Net\Licenses\ExtJS.txt


--------------------------------------------------------------------------
                               
--------------------------------------------------------------------------
	
        Copyright (c) 2007-2012 Ext.NET, Inc., All rights reserved.

                           Ext.NET, Inc.
                         support@ext.net
                           www.ext.net