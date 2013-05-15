Ext.define('Обработки.ГрафикЗаказов.ФормаОтображениеИзменений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:747px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список изменений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:731px;height:254px;',
			height: 254,width: 731,
			columns:
			[
				{
					text:'Изменять',
					width:'59',
					dataIndex:'Изменять',
					flex:1,
				},
				{
					text:'Заказ',
					width:'21',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Заказ',
					width:'368',
					dataIndex:'ПредставлениеЗаказа',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'65',
					dataIndex:'ДатыЗапуска',
					flex:1,
				},
				{
					text:'Исходная',
					width:'80',
					dataIndex:'ДатаЗапускаИсходная',
					flex:1,
				},
				{
					text:'Новая',
					width:'65',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата исполнения',
					width:'84',
					dataIndex:'ДатыИсполнения',
					flex:1,
				},
				{
					text:'Исходная',
					width:'73',
					dataIndex:'ДатаИсполненияИсходная',
					flex:1,
				},
				{
					text:'Новая',
					width:'76',
					dataIndex:'ДатаИсполнения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Изменять',
					},
					{
						name:'Заказ',
					},
					{
						name:'ПредставлениеЗаказа',
					},
					{
						name:'ДатыЗапуска',
					},
					{
						name:'ДатаЗапускаИсходная',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатыИсполнения',
					},
					{
						name:'ДатаИсполненияИсходная',
					},
					{
						name:'ДатаИсполнения',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: '',
			style: 'position:absolute;left:8px;top:5px;width:731px;height:38px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:747px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить изменения',
				},
				{
					text:'Не сохранять изменения',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});