Ext.define('Обработки.ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:646px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Индексация и перерасчет государственных пособий гражданам, имеющим детей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:646px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:630px;height:377px;',
			height: 377,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница индексирование',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:124px;width:213px;height:135px;',
			height: 135,width: 213,
			columns:
			[
				{
					text:'Индексировать с ...',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Процент',
					width:'100',
					dataIndex:'Процент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'Процент',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:220px;top:124px;width:410px;height:135px;',
			height: 135,width: 410,
			columns:
			[
				{
					text:'Вид пособия',
					width:'312',
					dataIndex:'ВидПособия',
					flex:1,
				},
				{
					text:'Размер',
					width:'75',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидПособия',
					},
					{
						name:'Размер',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОЗаконах',
			text: 'Индексация государственных пособий гражданам, имеющим детей, производится на основании статьи 4.2 Федерального закона от 19 мая 1995 года № 81-ФЗ. Размеры и сроки индексации определяются законами о федеральном бюджете на соответствующий финансовый год.',
			style: 'position:absolute;left:31px;top:35px;width:599px;height:40px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:99px;width:213px;height:25px;',
			items:
			[
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокПерерасчетов',
			text: 'Перерасчет начисленных пособий на детей',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:165px;width:213px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
					]
				},
				{
					title:'Страница перерасчет пособий',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодПерерасчета',
			text: 'Перерасчет пособий за период с:',
			style: 'position:absolute;left:0px;top:35px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:185px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:312px;top:35px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОкончаниеПериода',
			style: 'position:absolute;left:333px;top:35px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:89px;width:630px;height:160px;',
			height: 160,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:43px;width:630px;height:117px;',
			height: 117,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Колонка',
					flex:1,
				},
				{
					text:'',
					width:'6',
					dataIndex:'Отметка',
					flex:1,
				},
				{
					text:'Организация',
					width:'179',
					dataIndex:'Группа',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Пособие',
					width:'100',
					dataIndex:'ВидПособия',
					flex:1,
				},
				{
					text:'Дата события, период выплаты',
					width:'160',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Начислено',
					width:'80',
					dataIndex:'СуммаНачисленная',
					flex:1,
				},
				{
					text:'Сумма к доначислению',
					width:'120',
					dataIndex:'СуммаКДоначислению',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Колонка',
					},
					{
						name:'Отметка',
					},
					{
						name:'Группа',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидПособия',
					},
					{
						name:'Период',
					},
					{
						name:'СуммаНачисленная',
					},
					{
						name:'СуммаКДоначислению',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:483px;top:19px;width:147px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:519px;top:19px;width:111px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:0px;top:0px;width:116px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПериод',
			text: 'Месяц регистрации исправлений:',
			style: 'position:absolute;left:0px;top:61px;width:182px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:277px;width:630px;height:76px;',
			height: 76,width: 630,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:76px;',
			height: 76,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Документ-исправление',
					width:'220',
					dataIndex:'ДокументИсправление',
					flex:1,
				},
				{
					text:'Организация',
					width:'220',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндексацияИПерерасчетПособийНаДетейЗаСчетФСС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ДокументИсправление',
					},
					{
						name:'Организация',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:322px;top:0px;width:202px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСсылкаОтрытиеСписка',
			text: 'Показать список документов-исправлений',
			style: 'position:absolute;left:0px;top:255px;width:630px;height:16px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:185px;top:61px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});