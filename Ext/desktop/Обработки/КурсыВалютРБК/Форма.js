Ext.define('Обработки.КурсыВалютРБК.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:492px;height:344px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка курсов валют с РБК',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период загрузки с:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'НачДата',
			style: 'position:absolute;left:114px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:196px;top:33px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'КонДата',
			style: 'position:absolute;left:214px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:476px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Загрузить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:476px;height:220px;',
			height: 220,width: 476,
			columns:
			[
				{
					text:'Валюта',
					width:'120',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Код валюты',
					width:'80',
					dataIndex:'КодВалюты',
					flex:1,
				},
				{
					text:'Дата курса',
					width:'80',
					dataIndex:'ДатаКурса',
					flex:1,
				},
				{
					text:'Курс',
					width:'80',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'Кратность',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КурсыВалютРБК/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Валюта',
					},
					{
						name:'КодВалюты',
					},
					{
						name:'ДатаКурса',
					},
					{
						name:'Курс',
					},
					{
						name:'Кратность',
					},
				]
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:296px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстЗавершения',
			text: 'Загрузка курсов валют завершена',
			style: 'position:absolute;left:8px;top:321px;width:476px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:492px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Валюты',
			style: 'position:absolute;left:8px;top:57px;width:476px;height:16px;',
		},
	],
	dockedItems:
	[
	]
});