Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:552px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Стандартные вычеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:552px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:536px;height:348px;',
			height: 348,width: 536,
			items:
			[
				{
					title:'Стандартные вычеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:158px;width:522px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:522px;height:90px;',
			height: 90,width: 522,
			columns:
			[
				{
					text:'Дата',
					width:'91',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Код',
					width:'99',
					dataIndex:'ВычетыЛичныеТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'77',
					dataIndex:'ВычетыЛичныеПрименение',
					flex:1,
				},
				{
					text:'Вычет личный',
					width:'48',
					dataIndex:'КодВычетаЛичный',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'ВычетыЛичныеТекст',
					},
					{
						name:'ВычетыЛичныеПрименение',
					},
					{
						name:'КодВычетаЛичный',
					},
					{
						name:'Основание',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:182px;width:522px;height:90px;',
			height: 90,width: 522,
			columns:
			[
				{
					text:'Период (с ... по)',
					width:'160',
					dataIndex:'КолонкаПериод',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'по',
					width:'84',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
				{
					text:'Код и количество детей',
					width:'83',
					dataIndex:'ВычетыНаДетейТекст',
					flex:1,
				},
				{
					text:'Применение',
					width:'90',
					dataIndex:'ВычетыНаДетейПрименение',
					flex:1,
				},
				{
					text:'Вычет на детей',
					width:'56',
					dataIndex:'КодВычетаНаДетей',
					flex:1,
				},
				{
					text:'Количество детей',
					width:'45',
					dataIndex:'КоличествоДетей',
					flex:1,
				},
				{
					text:'Основание',
					width:'100',
					dataIndex:'Основание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КолонкаПериод',
					},
					{
						name:'Период',
					},
					{
						name:'ПериодЗавершения',
					},
					{
						name:'ВычетыНаДетейТекст',
					},
					{
						name:'ВычетыНаДетейПрименение',
					},
					{
						name:'КодВычетаНаДетей',
					},
					{
						name:'КоличествоДетей',
					},
					{
						name:'Основание',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:522px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Стандартные вычеты предоставляются на основании письменного заявления сотрудника',
			style: 'position:absolute;left:32px;top:279px;width:496px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предоставлять стандартные вычеты с:',
			style: 'position:absolute;left:32px;top:303px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредоставленияВычетов',
			style: 'position:absolute;left:256px;top:303px;width:85px;height:19px;',
		},
					]
				},
				{
					title:'Статус налогоплательщика',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНДФЛ',
			text: 'Физическое лицо постоянно находится на территории РФ (за прошедшие 12 месяцев - более 183 дней). При исчислении НДФЛ с оплаты труда будет применяться ставка 13%',
			style: 'position:absolute;left:40px;top:212px;width:488px;height:89px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Применяется с:',
			style: 'position:absolute;left:30px;top:62px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИстория',
			text: 'История изменения ...',
			style: 'position:absolute;left:343px;top:62px;width:114px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Резидент',
			style: 'position:absolute;left:40px;top:87px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Нерезидент',
			style: 'position:absolute;left:40px;top:111px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Высококвалифицированный иностранный специалист',
			style: 'position:absolute;left:40px;top:135px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончаниеДействияСтатусаНДФЛ',
			text: '',
			style: 'position:absolute;left:242px;top:62px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСтатусаНалогоплательщикаПоНДФЛ',
			style: 'position:absolute;left:115px;top:62px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Статус налогоплательщика по НДФЛ задается с точностью до месяца и определяет порядок представления налоговых вычетов и ставку налога.',
			style: 'position:absolute;left:17px;top:6px;width:511px;height:31px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Участник программы по переселению соотечественников',
			style: 'position:absolute;left:40px;top:159px;width:319px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:40px;top:183px;width:488px;height:28px;',
			height: 28,width: 488,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Член экипажа судна, плавающего под Государственным флагом РФ',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Доходы на предыдущих местах работы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:522px;height:276px;',
			height: 276,width: 522,
			columns:
			[
				{
					text:'Месяц',
					width:'148',
					dataIndex:'МесяцНалоговогоПериода',
					flex:1,
				},
				{
					text:'Сумма дохода',
					width:'119',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'МесяцНалоговогоПериода',
					},
					{
						name:'Размер',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:67px;top:24px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Год:',
			style: 'position:absolute;left:6px;top:24px;width:60px;height:19px;',
		},
					]
				},
			]
		},
	]
});