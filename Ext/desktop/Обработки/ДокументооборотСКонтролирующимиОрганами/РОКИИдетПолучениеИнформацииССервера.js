Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИИдетПолучениеИнформацииССервера',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:52px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подождите, пожалуйста...',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: 'НадписьИнформация',
			style: 'position:absolute;left:8px;top:8px;width:416px;height:36px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});