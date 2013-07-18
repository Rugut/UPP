Ext.require(['Данные.Обработки.РасчетЛимитовОтпускаМатериалов'], function () 
{
	Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:89px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка результата',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:362px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:89px;top:6px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Действие:',
			style: 'position:absolute;left:8px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:346px;height:28px;',
			height: 28,width: 346,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Периодичность',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Периодичность:',
			style: 'position:absolute;left:0px;top:4px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Периодичность',
			width: 265,
			height: 19,
			style: 'position:absolute;left:81px;top:4px;width:265px;height:19px;',
		},
					]
				},
				{
					title:'Контролировать лимит',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать лимит',
			style: 'position:absolute;left:81px;top:4px;width:265px;height:15px;',
		},
					]
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