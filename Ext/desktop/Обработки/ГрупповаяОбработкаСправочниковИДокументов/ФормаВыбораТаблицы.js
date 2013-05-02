Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораТаблицы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:344px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Внешняя обработка2',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:344px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:9px;width:328px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:328px;height:397px;',
			height: 397,width: 328,
			columns:
			[
				{
					text:'Представление таблицы',
					width:'106',
					dataIndex:'ПредставлениеТаблицы',
					flex:1,
				},
				{
					text:'Имя таблицы',
					width:'87',
					dataIndex:'ИмяТаблицы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПредставлениеТаблицы',
					},
					{
						name:'ИмяТаблицы',
					},
				]
			},
		},
	]
});