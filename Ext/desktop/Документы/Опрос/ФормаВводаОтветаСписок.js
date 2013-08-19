Ext.require(['Данные.Документы.Опрос'], function () 
{
	Ext.define('Документы.Опрос.ФормаВводаОтветаСписок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:392px;height:626px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ответ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:32px;width:376px;height:19px;',
			width: 376,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРазвернутыйОтвет',
			text: 'Развернутый ответ:',
			style: 'position:absolute;left:8px;top:56px;width:376px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Переключатель',
			style: 'position:absolute;left:8px;top:8px;width:376px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:601px;width:392px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});