Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ДоступныеОбновленияРегламентированнойОтчетности',
	{
	extend: 'Ext.window.Window',
	height: 537,width: 439,
	iconCls: 'bogus',
	title: 'Информация об обновлениях',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:512px;width:439px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:423px;height:395px;',
			height: 395,width: 423,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:62px;width:423px;height:333px;',
			height: 333,width: 423,
			items:
			[
				{
					title:'СписокВнешнихОтчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:423px;height:333px;',
			height: 333,width: 423,
			columns:
			[
				{
					text:'Отчет',
				},
				{
					text:'ЭтоГруппа',
				},
				{
					text:'ВнешнийОтчетВерсия',
				},
				{
					text:'ИсточникОтчета',
				},
				{
					text:'URL',
				},
			]
		},
					]
				},
				{
					title:'СписокВнешнихОтчетовПуст',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:38px;width:423px;height:24px;',
			height: 24,width: 423,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиКФормеОбновленияКонфигурации',
			text: 'Перейти к обновлению ...',
			style: 'position:absolute;left:8px;top:83px;width:423px;height:26px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:423px;height:25px;',
			height: 25,width: 423,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:423px;height:18px;',
			height: 18,width: 423,
			items:
			[
				{
					title:'ОбновлениеТребуется',
					items:
					[
					]
				},
				{
					title:'ОбновлениеНеТребуется',
					items:
					[
					]
				},
			]
		},
	]
});