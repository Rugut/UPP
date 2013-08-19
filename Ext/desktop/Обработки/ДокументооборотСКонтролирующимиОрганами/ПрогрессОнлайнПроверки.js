Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПрогрессОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:418px;height:54px;',
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
			name: 'НадписьСостояние',
			text: 'НадписьСостояние',
			style: 'position:absolute;left:56px;top:8px;width:354px;height:38px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});