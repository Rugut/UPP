Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 238,width: 409,
	iconCls: 'bogus',
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:361px;top:61px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:61px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:98px;top:33px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦеныНоменклатуры',
			style: 'position:absolute;left:98px;top:89px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеТипаЦеныНоменклатурыКонтрагента',
			style: 'position:absolute;left:98px;top:141px;width:303px;height:40px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:186px;width:303px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:409px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:409px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:98px;top:117px;width:80px;height:19px;',
		},
	]
});