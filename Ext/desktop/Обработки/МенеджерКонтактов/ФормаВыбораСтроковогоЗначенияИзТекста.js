Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаВыбораСтроковогоЗначенияИзТекста',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма выбора строковых значений из текста',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:442px;top:54px;width:190px;height:259px;',
		},
		{
			xtype: 'label',
			text: 'Исходный текст',
			style: 'position:absolute;left:8px;top:10px;width:428px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Найденные значения',
			style: 'position:absolute;left:442px;top:10px;width:190px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:428px;height:24px;',
			width: 428,
			height: 24,
			items:
			[
				{
					text:'Выбрать выделенный текст',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:442px;top:30px;width:190px;height:24px;',
			width: 190,
			height: 24,
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});