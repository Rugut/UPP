Ext.define('Справочники.РабочиеЦентры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 318,width: 439,
	iconCls: 'bogus',
	title: 'Рабочие центры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:367px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:57px;width:333px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:293px;width:439px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:423px;height:201px;',
			height: 201,width: 423,
			items:
			[
				{
					title:'СтраницаПодчиненныхРабочихЦентров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:409px;height:123px;',
			height: 123,width: 409,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'РабочийЦентр',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:27px;width:409px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'СтраницаОписание',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:6px;top:6px;width:409px;height:169px;',
		},
					]
				},
			]
		},
	]
});