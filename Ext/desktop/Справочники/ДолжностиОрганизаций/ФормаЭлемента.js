Ext.define('Справочники.ДолжностиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:565px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Должности организаций',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:443px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Административно-управленческий персонал',
			style: 'position:absolute;left:184px;top:59px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код по ОКПДТР:',
			style: 'position:absolute;left:8px;top:59px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКПДТР',
			style: 'position:absolute;left:98px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:100px;width:549px;height:340px;',
			height: 340,width: 549,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПозицииСписка',
			text: 'Код позиции списка:',
			style: 'position:absolute;left:12px;top:124px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПозицииСписка',
			style: 'position:absolute;left:140px;top:124px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснованиеВыслугиЛет',
			text: 'Основание выслуги лет:',
			style: 'position:absolute;left:12px;top:148px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОснованиеВыслугиЛет',
			style: 'position:absolute;left:140px;top:148px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияВоинскогоУчета',
			text: 'Воинский учет (до 2011 года):',
			style: 'position:absolute;left:12px;top:51px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КатегорияВоинскогоУчета',
			style: 'position:absolute;left:167px;top:51px;width:374px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Персонифицированный учет ПФР',
			style: 'position:absolute;left:6px;top:102px;width:535px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Категории регламентированного учета',
			style: 'position:absolute;left:6px;top:6px;width:535px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание должности, используемое при наборе персонала',
			style: 'position:absolute;left:6px;top:274px;width:535px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Описание:',
			style: 'position:absolute;left:12px;top:295px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Должность',
			style: 'position:absolute;left:140px;top:295px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияСтатистическогоУчета',
			text: 'Статистический учет:',
			style: 'position:absolute;left:12px;top:27px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КатегорияСтатистическогоУчета',
			style: 'position:absolute;left:167px;top:27px;width:374px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияВоинскогоУчета1',
			text: 'Воинский учет (с 2011 года):',
			style: 'position:absolute;left:12px;top:75px;width:150px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КатегорияУчетаЗабронированных',
			style: 'position:absolute;left:167px;top:75px;width:374px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:171px;width:535px;height:98px;',
			height: 98,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:535px;height:21px;',
			height: 21,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в список должностей летных экипажей, работа в которых дает право на доплату к пенсии',
			style: 'position:absolute;left:6px;top:6px;width:517px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:48px;width:535px;height:21px;',
			height: 21,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Дает право на доплату к пенсии в угольной промышленности',
			style: 'position:absolute;left:6px;top:6px;width:468px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Страховые взносы во внебюджетные фонды',
			style: 'position:absolute;left:0px;top:6px;width:535px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:71px;width:535px;height:21px;',
			height: 21,width: 535,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является фармацевтической должностью',
			style: 'position:absolute;left:6px;top:6px;width:265px;height:15px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:25px;width:266px;height:289px;',
			height: 289,width: 266,
			columns:
			[
				{
					text:'Принадлежность',
					width:'23',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'100',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДолжностиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:263px;height:289px;',
			height: 289,width: 263,
			columns:
			[
				{
					text:'Свойство',
					width:'100',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДолжностиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
					]
				},
				{
					title:'Ежегодные отпуска',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:535px;height:284px;',
			height: 284,width: 535,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'321',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Количество дней отпуска в год',
					width:'213',
					dataIndex:'КоличествоДнейОтпускаВГод',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДолжностиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
					},
					{
						name:'КоличествоДнейОтпускаВГод',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:549px;height:16px;',
			height: 16,width: 549,
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
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:565px;height:25px;',
			dock: 'bottom',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});