Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 608,width: 499,
	iconCls: 'bogus',
	title: 'Доверенность налогоплательщика',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовер',
			style: 'position:absolute;left:107px;top:58px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачи',
			style: 'position:absolute;left:220px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:407px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПризнакДоверителя',
			style: 'position:absolute;left:137px;top:85px;width:195px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:499px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:583px;width:499px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:483px;height:348px;',
			height: 348,width: 483,
			items:
			[
				{
					title:'Представитель',
				},
				{
					title:'Доверитель',
				},
				{
					title:'Нотариус',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:504px;width:483px;height:71px;',
			height: 71,width: 483,
			columns:
			[
				{
					text:'ОбластьПолномочий',
				},
				{
					text:'ОКАТО',
				},
				{
					text:'КПП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:480px;width:483px;height:24px;',
			items:
			[
			]
		},
	]
});