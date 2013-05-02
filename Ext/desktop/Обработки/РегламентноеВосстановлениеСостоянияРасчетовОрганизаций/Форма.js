Ext.define('Обработки.РегламентноеВосстановлениеСостоянияРасчетовОрганизаций.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:625px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Восстановление состояния расчетов с контрагентами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:625px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:355px;width:625px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктуализации',
			style: 'position:absolute;left:306px;top:33px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'Установить актуальное состояние расчетов на дату:',
			style: 'position:absolute;left:8px;top:33px;width:289px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Восстановление последовательности расчетов по приобретению',
			style: 'position:absolute;left:8px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Восстановление последовательности расчетов по реализации',
			style: 'position:absolute;left:8px;top:79px;width:397px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Переоценка валютных остатков',
			style: 'position:absolute;left:8px;top:101px;width:397px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:609px;height:177px;',
			height: 177,width: 609,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Организация',
					width:'226',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Граница 
по приобретению',
					width:'131',
					dataIndex:'ГраницаПриобретений',
					flex:1,
				},
				{
					text:'Граница 
по реализации',
					width:'124',
					dataIndex:'ГраницаРеализаций',
					flex:1,
				},
				{
					text:'Дата начала переоценки',
					width:'86',
					dataIndex:'ДатаНачалаПереоценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентноеВосстановлениеСостоянияРасчетовОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Организация',
					},
					{
						name:'ГраницаПриобретений',
					},
					{
						name:'ГраницаРеализаций',
					},
					{
						name:'ДатаНачалаПереоценки',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьХодПроцесса',
			text: '',
			style: 'position:absolute;left:8px;top:328px;width:609px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:609px;height:24px;',
			items:
			[
				{
					text:'Обновить границы',
				},
				'-',
				{
					text:'Отметить все',
				},
				{
					text:'Снять отметку',
				},
			]
		},
	]
});