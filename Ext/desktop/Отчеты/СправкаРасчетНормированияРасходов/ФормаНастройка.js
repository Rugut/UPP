Ext.define('Отчеты.СправкаРасчетНормированияРасходов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:259px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:234px;width:413px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:221px;',
			height: 221,width: 399,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:30px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выводить данные',
			style: 'position:absolute;left:6px;top:54px;width:384px;height:16px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:75px;width:384px;height:126px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период:',
			style: 'position:absolute;left:17px;top:36px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:93px;top:36px;width:126px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});