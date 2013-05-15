Ext.define('Обработки.НастройкаСтратегииРедактированияНомеровОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка стратегии редактирования номеров (кодов) объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:538px;height:311px;',
			height: 311,width: 538,
			columns:
			[
				{
					text:'Объект нумерации',
					width:'350',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Редактирования номера',
					width:'133',
					dataIndex:'СтратегияРедактирования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаСтратегииРедактированияНомеровОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Объект',
					},
					{
						name:'СтратегияРедактирования',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:554px;height:25px;',
			dock: 'bottom',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:538px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить по умолчанию',
				},
				'-',
			]
		},
	]
});