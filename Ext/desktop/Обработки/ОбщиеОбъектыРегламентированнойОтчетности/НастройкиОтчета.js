Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиОтчета',
	{
	extend: 'Ext.window.Window',
	height: 476,width: 497,
	iconCls: 'bogus',
	title: 'Настройки отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:451px;width:497px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'КнопкаВыбратьНажатие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:483px;height:435px;',
			height: 435,width: 483,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:468px;height:403px;',
			height: 403,width: 468,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
				{
					title:'СвойстваРазделов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:469px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'СнятьВсе',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:469px;height:378px;',
			height: 378,width: 469,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ПоказатьСтраницу',
				},
				{
					text:'ВыводНаПечать',
				},
				{
					text:'ВыгрузитьСтраницу',
				},
			]
		},
					]
				},
			]
		},
	]
});