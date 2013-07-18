Ext.require(['Данные.Документы.Опрос'], function () 
{
	Ext.define('Документы.Опрос.ФормаВводаОтветаТекст',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:341px;height:153px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:128px;width:341px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Текст',
			style: 'position:absolute;left:8px;top:8px;width:325px;height:16px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаТекст',
			style: 'position:absolute;left:8px;top:29px;width:325px;height:91px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});