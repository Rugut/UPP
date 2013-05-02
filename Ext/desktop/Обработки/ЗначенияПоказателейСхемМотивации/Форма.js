Ext.define('Обработки.ЗначенияПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели расчета заработной платы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Справочник показателей',
				},
				'-',
				{
					text:'Плановые начисления',
				},
				{
					text:'Плановые удержания',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Справочник показателей',
				},
				'-',
				{
					text:'Плановые начисления',
				},
				'-',
				{
					text:'Плановые удержания',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:676px;height:324px;',
			height: 324,width: 676,
			items:
			[
				{
					title:'Ежемесячные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:111px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
					width:'100',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Табельный №',
					width:'80',
					dataIndex:'ТабельныйНомер',
					flex:1,
				},
				{
					text:'Значение',
					width:'80',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Показатель',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Организация',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ТабельныйНомер',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Данные по сотрудникам',
			style: 'position:absolute;left:6px;top:27px;width:242px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Данные по организациям и подразделениям',
			style: 'position:absolute;left:6px;top:51px;width:259px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По показателям',
			style: 'position:absolute;left:320px;top:27px;width:126px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:320px;top:51px;width:126px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодДействия',
			style: 'position:absolute;left:504px;top:27px;width:133px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:87px;width:234px;height:209px;',
			height: 209,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:234px;height:185px;',
			height: 185,width: 234,
			columns:
			[
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'65',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'50',
					dataIndex:'ТекущееПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'50',
					dataIndex:'ТекущееПодразделениеКомпании',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'ТекущееПодразделениеОрганизации',
					},
					{
						name:'ТекущееПодразделениеКомпании',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:19px;',
			height: 19,width: 234,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияСотрудников',
			style: 'position:absolute;left:75px;top:0px;width:159px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:208px;',
			height: 208,width: 234,
			columns:
			[
				{
					text:'Организация',
					width:'350',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'ЦФО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:234px;height:209px;',
			height: 209,width: 234,
			columns:
			[
				{
					text:'Подразделение',
					width:'353',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:87px;width:422px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:401px;top:192px;width:267px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Заполнить по плановым начислениям (удержаниям)',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
					]
				},
				{
					title:'Постоянные',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:662px;height:73px;',
			height: 73,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Общие данные',
			style: 'position:absolute;left:6px;top:51px;width:148px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Данные по организации:',
			style: 'position:absolute;left:6px;top:27px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияПериодические',
			style: 'position:absolute;left:164px;top:26px;width:226px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:85px;width:662px;height:211px;',
			height: 211,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:26px;width:422px;height:185px;',
			height: 185,width: 422,
			columns:
			[
				{
					text:'Показатель',
					width:'90',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Значение',
					width:'90',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Действует с:',
					width:'93',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Показатель',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
					},
					{
						name:'Период',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:240px;top:1px;width:422px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подразделения организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Подразделения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:211px;',
			height: 211,width: 233,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Общие данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:662px;height:187px;',
			height: 187,width: 662,
			columns:
			[
				{
					text:'Показатель',
					width:'336',
					dataIndex:'Показатель',
					flex:1,
				},
				{
					text:'Значение',
					width:'94',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Действует с:',
					width:'91',
					dataIndex:'Период',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияПоказателейСхемМотивации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Показатель',
					},
					{
						name:'Значение',
					},
					{
						name:'Валюта',
					},
					{
						name:'Период',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Вывести список...',
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
	]
});