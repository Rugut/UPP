Ext.define('Документы.Событие.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 73,
			height: 19,
			style: 'position:absolute;left:99px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 128,
			height: 19,
			style: 'position:absolute;left:192px;top:33px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 511,
			height: 19,
			style: 'position:absolute;left:99px;top:354px;width:511px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:618px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:378px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 511,
			height: 19,
			style: 'position:absolute;left:99px;top:378px;width:511px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидОбъекта',
			width: 188,
			height: 19,
			style: 'position:absolute;left:422px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Вид объекта:',
			style: 'position:absolute;left:332px;top:33px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:602px;height:266px;',
			height: 266,width: 602,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоСобытия',
			width: 180,
			height: 19,
			style: 'position:absolute;left:414px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОкончаниеСобытия',
			width: 180,
			height: 19,
			style: 'position:absolute;left:414px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'СодержаниеСобытия',
			style: 'position:absolute;left:90px;top:126px;width:504px;height:114px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить за:',
			style: 'position:absolute;left:322px;top:54px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеСобытия',
			width: 504,
			height: 19,
			style: 'position:absolute;left:90px;top:102px;width:504px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:304px;height:96px;',
			height: 96,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Контрагент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо1',
			text: 'Контак. лицо:',
			style: 'position:absolute;left:0px;top:48px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактноеЛицо',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактнаяИнформацияКонтактногоЛица',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактнаяИнформацияКонтрагента',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Прочие',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтактноеЛицо1',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактнаяИнформацияКонтактногоЛица1',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо',
			text: 'Контак. лицо:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Кандидаты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактноеЛицо2',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтактнаяИнформацияКонтактногоЛица2',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтактноеЛицо2',
			text: 'Кандидат:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:322px;top:78px;width:272px;height:24px;',
			height: 24,width: 272,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИсточникИнформации',
			text: 'Источник :',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ИсточникИнформацииПриОбращении',
			width: 180,
			height: 19,
			style: 'position:absolute;left:92px;top:0px;width:180px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:414px;top:54px;width:180px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Важность:',
			style: 'position:absolute;left:6px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Важность',
			width: 220,
			height: 19,
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Основание',
			width: 504,
			height: 19,
			style: 'position:absolute;left:90px;top:6px;width:504px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Помещение:',
			style: 'position:absolute;left:330px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Помещение',
			width: 180,
			height: 19,
			style: 'position:absolute;left:414px;top:56px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Территория:',
			style: 'position:absolute;left:6px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Территория',
			width: 220,
			height: 19,
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:330px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Проект',
			width: 180,
			height: 19,
			style: 'position:absolute;left:414px;top:81px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредмет',
			text: 'Предмет:',
			style: 'position:absolute;left:6px;top:31px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Предмет',
			width: 504,
			height: 19,
			style: 'position:absolute;left:90px;top:31px;width:504px;height:19px;',
		},
					]
				},
				{
					title:'Участники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:252px;height:194px;',
			height: 194,width: 252,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Работник',
					width:'222',
					dataIndex:'Сотрудник',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Событие/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:263px;top:46px;width:331px;height:194px;',
			height: 194,width: 331,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'142',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Лицо',
					width:'158',
					dataIndex:'Лицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Событие/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Лицо',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Работники',
			style: 'position:absolute;left:6px;top:6px;width:252px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сторонние лица',
			style: 'position:absolute;left:263px;top:6px;width:331px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеСобытия',
			text: 'Состояние :',
			style: 'position:absolute;left:332px;top:58px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СостояниеСобытия',
			width: 188,
			height: 19,
			style: 'position:absolute;left:422px;top:58px;width:188px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГруппаСобытия',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:58px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГруппаСобытия',
			width: 221,
			height: 19,
			style: 'position:absolute;left:99px;top:58px;width:221px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:618px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});