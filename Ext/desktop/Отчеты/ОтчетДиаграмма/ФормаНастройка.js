Ext.define('Отчеты.ОтчетДиаграмма.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:314px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:146px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:78px;width:210px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:96px;top:54px;width:370px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 1',
			style: 'position:absolute;left:12px;top:127px;width:220px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 2',
			style: 'position:absolute;left:12px;top:147px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 3',
			style: 'position:absolute;left:12px;top:167px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 4',
			style: 'position:absolute;left:12px;top:187px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 5',
			style: 'position:absolute;left:12px;top:207px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 6',
			style: 'position:absolute;left:12px;top:227px;width:220px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:460px;height:19px;',
			height: 19,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:0px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 7',
			style: 'position:absolute;left:237px;top:127px;width:220px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 8',
			style: 'position:absolute;left:237px;top:147px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 9',
			style: 'position:absolute;left:237px;top:167px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 10',
			style: 'position:absolute;left:237px;top:187px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 11',
			style: 'position:absolute;left:237px;top:207px;width:220px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Показатель 12',
			style: 'position:absolute;left:237px;top:229px;width:220px;height:15px;',
		},
					]
				},
				{
					title:'Параметры диаграммы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:46px;width:460px;height:127px;',
			height: 127,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Круговая',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписей',
			text: 'Вид подписей:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздвижениеСерий',
			text: 'Раздвижение серий:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
					]
				},
				{
					title:'КруговаяОбъемная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидПодписей1',
			text: 'Вид подписей:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздвижениеСерий1',
			text: 'Раздвижение серий:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:69px;width:48px;height:15px;',
		},
					]
				},
				{
					title:'Гистограмма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Градиент',
			style: 'position:absolute;left:0px;top:88px;width:72px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение',
			style: 'position:absolute;left:130px;top:24px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:68px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'ГистограммаОбъемная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:48px;width:80px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:88px;width:48px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение1',
			style: 'position:absolute;left:130px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:68px;width:132px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
					]
				},
				{
					title:'График',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:24px;width:132px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение5',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ГрафикСОбластями',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение3',
			style: 'position:absolute;left:130px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:24px;width:132px;height:15px;',
		},
					]
				},
				{
					title:'Изометрическая',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОриентацияИзометрическая',
			text: 'Ориентация:',
			style: 'position:absolute;left:0px;top:24px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:24px;width:330px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Окантовка',
			style: 'position:absolute;left:0px;top:72px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Режим пробелов:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:130px;top:0px;width:330px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Базовое значение:',
			style: 'position:absolute;left:0px;top:48px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовоеЗначение4',
			style: 'position:absolute;left:130px;top:48px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Свет',
			style: 'position:absolute;left:0px;top:92px;width:48px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вертикальные метки',
			style: 'position:absolute;left:0px;top:112px;width:132px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать легенду',
			style: 'position:absolute;left:6px;top:6px;width:135px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:6px;top:26px;width:135px;height:15px;',
		},
					]
				},
				{
					title:'Серии и точки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
			columns:
			[
				{
					text:'Серии',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'35',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Тип',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:254px;top:24px;width:212px;height:195px;',
			height: 195,width: 212,
			columns:
			[
				{
					text:'Точки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'40',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Тип',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:254px;top:0px;width:212px;height:24px;',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимумСерийКоличество',
			style: 'position:absolute;left:398px;top:225px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:224px;top:24px;width:24px;height:195px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:176px;top:225px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Ограничение количества серий:',
			style: 'position:absolute;left:6px;top:225px;width:168px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'120',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетДиаграмма/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:289px;width:490px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});