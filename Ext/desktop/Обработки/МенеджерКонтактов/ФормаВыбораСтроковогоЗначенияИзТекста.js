Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаВыбораСтроковогоЗначенияИзТекста',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			xtype: 'fieldset',
			title: 'Исходный текст',
			style: 'position:absolute;left:8px;top:10px;width:428px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Найденные значения',
			style: 'position:absolute;left:442px;top:10px;width:190px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:428px;height:24px;',
			dock: 'top',
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
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
	]
	});
});