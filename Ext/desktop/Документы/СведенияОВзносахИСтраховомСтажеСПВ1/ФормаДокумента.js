Ext.define('Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:846px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о взносах и страховом стаже для установления трудовой пенсии (СПВ-1)',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:846px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:846px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Программой CheckXML',
				},
				{
					text:'Программой CheckUFA',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:732px;top:428px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:830px;height:41px;',
			height: 41,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:830px;height:35px;',
			height: 35,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:830px;height:130px;',
			height: 130,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:439px;top:0px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:525px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:625px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:439px;top:24px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:525px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:218px;top:48px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:286px;top:48px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория застрахованных лиц:',
			style: 'position:absolute;left:0px;top:103px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:182px;top:103px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Отчетный период:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:94px;top:24px;width:318px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:97px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:182px;top:79px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипСведений1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:79px;width:93px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:299px;top:79px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:439px;top:48px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:525px;top:48px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:830px;height:217px;',
			height: 217,width: 830,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:830px;height:24px;',
			items:
			[
				{
					text:'Суммы взносов',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:830px;height:177px;',
			height: 177,width: 830,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'220',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Страховой номер',
					width:'120',
					dataIndex:'СтраховойНомерПФР',
					flex:1,
				},
				{
					text:'Дата составления',
					width:'100',
					dataIndex:'ДатаСоставления',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'80',
					dataIndex:'Фамилия',
					flex:1,
				},
				{
					text:'Имя',
					width:'80',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Отчество',
					width:'80',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'160',
					dataIndex:'КолонкаСтраховая',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоСтраховая',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоСтраховая',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'160',
					dataIndex:'КолонкаНакопительная',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'НачисленоНакопительная',
					flex:1,
				},
				{
					text:'Уплачено',
					width:'80',
					dataIndex:'УплаченоНакопительная',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СведенияОВзносахИСтраховомСтажеСПВ1/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'СтраховойНомерПФР',
					},
					{
						name:'ДатаСоставления',
					},
					{
						name:'Фамилия',
					},
					{
						name:'Имя',
					},
					{
						name:'Отчество',
					},
					{
						name:'КолонкаСтраховая',
					},
					{
						name:'НачисленоСтраховая',
					},
					{
						name:'УплаченоСтраховая',
					},
					{
						name:'КолонкаНакопительная',
					},
					{
						name:'НачисленоНакопительная',
					},
					{
						name:'УплаченоНакопительная',
					},
				]
			},
		},
					]
				},
			]
		},
	]
});