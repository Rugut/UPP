Ext.define('Обработки.КалендарныйПланЗакупок.ФормаПомощника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник заполнения календарного плана закупок',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:8px;width:619px;height:389px;',
			height: 389,width: 619,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:619px;height:349px;',
			height: 349,width: 619,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Заказать',
					width:'120',
					dataIndex:'КоличествоЗаказать',
					flex:1,
				},
				{
					text:'Потребность',
					width:'120',
					dataIndex:'КоличествоПлана',
					flex:1,
				},
				{
					text:'Заказано',
					width:'120',
					dataIndex:'КоличествоЗаказа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'КоличествоЗаказать',
					},
					{
						name:'КоличествоПлана',
					},
					{
						name:'КоличествоЗаказа',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Номенклатура, для подбора поставщиков',
			style: 'position:absolute;left:0px;top:0px;width:619px;height:16px;',
		},
					]
				},
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Настройка отборов по свойствам и категориям контрагентов',
			style: 'position:absolute;left:0px;top:95px;width:619px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:140px;width:619px;height:249px;',
			height: 249,width: 619,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя',
					width:'191',
					dataIndex:'ПредставлениеФильтра',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'150',
					dataIndex:'ВидСравненияФильтра',
					flex:1,
				},
				{
					text:'Значение',
					width:'180',
					dataIndex:'ЗначениеФильтра',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'ПредставлениеФильтра',
					},
					{
						name:'ВидСравненияФильтра',
					},
					{
						name:'ЗначениеФильтра',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Настройка основных отборов',
			style: 'position:absolute;left:0px;top:0px;width:619px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать только основных поставщиков',
			style: 'position:absolute;left:17px;top:21px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Надежность поставщика:',
			style: 'position:absolute;left:17px;top:45px;width:236px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Срок поставщика для выполнения заказа:',
			style: 'position:absolute;left:17px;top:69px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияНадежность',
			style: 'position:absolute;left:258px;top:45px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияСрокВыполненияЗаказа',
			style: 'position:absolute;left:258px;top:69px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеНадежность',
			style: 'position:absolute;left:381px;top:45px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеСрокВыполненияЗаказа',
			style: 'position:absolute;left:381px;top:69px;width:238px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеСрокВыполненияЗаказаНач',
			style: 'position:absolute;left:381px;top:69px;width:117px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеСрокВыполненияЗаказаКон',
			style: 'position:absolute;left:502px;top:69px;width:117px;height:19px;',
		},
					]
				},
				{
					title:'Результат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:619px;height:368px;',
			height: 368,width: 619,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Подбор номенклатуры по ценам и поставщикам',
			style: 'position:absolute;left:0px;top:0px;width:619px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:511px;top:365px;width:108px;height:24px;',
			items:
			[
				{
					text:'Открыть договор',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Открыть условия поставки',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:138px;height:389px;',
			height: 389,width: 138,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:780px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Готово',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});