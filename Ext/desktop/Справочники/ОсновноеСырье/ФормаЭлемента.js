Ext.define('Справочники.ОсновноеСырье.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 406,
	iconCls: 'bogus',
	title: 'Основное сырье',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:334px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:196px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:390px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:390px;height:220px;',
			height: 220,width: 390,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:328px;width:406px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
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
	]
});