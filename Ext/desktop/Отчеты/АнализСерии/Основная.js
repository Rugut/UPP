Ext.define('Отчеты.АнализСерии.Основная',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 735,
	iconCls: 'bogus',
	title: 'Анализ серии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:735px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Сформировать',
				},
				{
					text:'НовоеОкно',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтч',
			style: 'position:absolute;left:60px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:260px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Серия',
			style: 'position:absolute;left:522px;top:33px;width:205px;height:19px;',
		},
	]
});