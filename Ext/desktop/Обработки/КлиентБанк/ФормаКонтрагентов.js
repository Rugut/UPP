Ext.define('Обработки.КлиентБанк.ФормаКонтрагентов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:301px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Клиент банка: Создание ненайденных объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:26px;width:368px;height:221px;',
			height: 221,width: 368,
			columns:
			[
				{
					text:'Контрагент: р/счет, договор',
					width:'196',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'',
					width:'180',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлиентБанк/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Открывать форму контрагента после записи',
			style: 'position:absolute;left:8px;top:247px;width:327px;height:21px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:384px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Создать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:1px;width:97px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все пометки',
				},
			]
		},
	]
});