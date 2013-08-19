Ext.require(['Данные.Документы.ЭлектронноеПисьмо'], function () 
{
	Ext.define('Документы.ЭлектронноеПисьмо.ФормаПечати',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:724px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
	]
	});
});