Ext.define('Отчеты.ОтчетПоДаннымКонтрагента.Форма',
	{
	extend: 'Ext.window.Window',
	height: 486,width: 810,
	iconCls: 'bogus',
	title: 'Отчет по данным контрагента',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:810px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:62px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентОтчета',
			style: 'position:absolute;left:234px;top:7px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:35px;width:794px;height:418px;',
			height: 418,width: 794,
			items:
			[
				{
					title:'Отчет',
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:780px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Вниз',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Вверх',
				},
			]
		},
					]
				},
			]
		},
	]
});