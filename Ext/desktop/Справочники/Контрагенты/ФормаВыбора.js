Ext.define('Справочники.Контрагенты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:684px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:668px;height:280px;',
			height: 280,width: 668,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'СписокВыбора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:24px;width:502px;height:256px;',
			height: 256,width: 502,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'149',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ИНН',
					width:'100',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'280',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Основной менеджер покупателя',
					width:'178',
					dataIndex:'ОсновнойМенеджерПокупателя',
					flex:1,
				},
				{
					text:'Головной контрагент',
					width:'120',
					dataIndex:'ГоловнойКонтрагент',
					flex:1,
				},
				{
					text:'Документ, удостоверяющий личность',
					width:'120',
					dataIndex:'ДокументУдостоверяющийЛичность',
					flex:1,
				},
				{
					text:'Дополнительное описание',
					width:'120',
					dataIndex:'ДополнительноеОписание',
					flex:1,
				},
				{
					text:'Источник информации при обращении',
					width:'120',
					dataIndex:'ИсточникИнформацииПриОбращении',
					flex:1,
				},
				{
					text:'Код по ОКПО',
					width:'80',
					dataIndex:'КодПоОКПО',
					flex:1,
				},
				{
					text:'КПП',
					width:'80',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Не является резидентом',
					width:'80',
					dataIndex:'НеЯвляетсяРезидентом',
					flex:1,
				},
				{
					text:'ОКОПФ',
					width:'80',
					dataIndex:'ОКОПФ',
					flex:1,
				},
				{
					text:'Основное контактное лицо',
					width:'120',
					dataIndex:'ОсновноеКонтактноеЛицо',
					flex:1,
				},
				{
					text:'Основной банковский счет',
					width:'120',
					dataIndex:'ОсновнойБанковскийСчет',
					flex:1,
				},
				{
					text:'Основной вид деятельности',
					width:'120',
					dataIndex:'ОсновнойВидДеятельности',
					flex:1,
				},
				{
					text:'Основной договор контрагента',
					width:'120',
					dataIndex:'ОсновнойДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'80',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'80',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Расписание работы строкой',
					width:'120',
					dataIndex:'РасписаниеРаботыСтрокой',
					flex:1,
				},
				{
					text:'Регион',
					width:'120',
					dataIndex:'Регион',
					flex:1,
				},
				{
					text:'Срок выполнения заказа поставщиком (в днях)',
					width:'80',
					dataIndex:'СрокВыполненияЗаказаПоставщиком',
					flex:1,
				},
				{
					text:'Юр. / физ. лицо',
					width:'120',
					dataIndex:'ЮрФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ИНН',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ОсновнойМенеджерПокупателя',
					},
					{
						name:'ГоловнойКонтрагент',
					},
					{
						name:'ДокументУдостоверяющийЛичность',
					},
					{
						name:'ДополнительноеОписание',
					},
					{
						name:'ИсточникИнформацииПриОбращении',
					},
					{
						name:'КодПоОКПО',
					},
					{
						name:'КПП',
					},
					{
						name:'НеЯвляетсяРезидентом',
					},
					{
						name:'ОКОПФ',
					},
					{
						name:'ОсновноеКонтактноеЛицо',
					},
					{
						name:'ОсновнойБанковскийСчет',
					},
					{
						name:'ОсновнойВидДеятельности',
					},
					{
						name:'ОсновнойДоговорКонтрагента',
					},
					{
						name:'Покупатель',
					},
					{
						name:'Поставщик',
					},
					{
						name:'РасписаниеРаботыСтрокой',
					},
					{
						name:'Регион',
					},
					{
						name:'СрокВыполненияЗаказаПоставщиком',
					},
					{
						name:'ЮрФизЛицо',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:160px;height:256px;',
			height: 256,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'153',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораСпискаКонтрагентов',
			width: 442,
			height: 19,
			style: 'position:absolute;left:226px;top:0px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеОтбораСпискаНоменклатуры',
			text: 'содержит:',
			style: 'position:absolute;left:166px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
					]
				},
				{
					title:'СписокВыбораПоПользователю',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:280px;',
			height: 280,width: 668,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'220',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Контрагенты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:684px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Отбор по менеджеру',
				},
					]
				},
			]
		},
	]
});