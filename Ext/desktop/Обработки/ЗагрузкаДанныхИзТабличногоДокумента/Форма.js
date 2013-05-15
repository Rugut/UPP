Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:683px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка данных из табличного документа',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:667px;height:466px;',
			height: 466,width: 667,
			items:
			[
				{
					title:'Табличный документ',
					items:
					[
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:653px;height:386px;',
			height: 386,width: 653,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Представление реквизита',
					width:'103',
					dataIndex:'ПредставлениеРеквизита',
					flex:1,
				},
				{
					text:'Имя реквизита',
					width:'93',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
				{
					text:'Может быть полем поиска',
					width:'21',
					dataIndex:'МожетБытьПолемПоиска',
					flex:1,
				},
				{
					text:'Поле поиска',
					width:'21',
					dataIndex:'ПолеПоиска',
					flex:1,
				},
				{
					text:'Доступное описание типов',
					width:'21',
					dataIndex:'ДоступноеОписаниеТипов',
					flex:1,
				},
				{
					text:'Описание типов',
					width:'134',
					dataIndex:'ОписаниеТипов',
					flex:1,
				},
				{
					text:'Режим загрузки',
					width:'55',
					dataIndex:'РежимЗагрузки',
					flex:1,
				},
				{
					text:'№ Колонки табличного документа',
					width:'52',
					dataIndex:'НомерКолонки',
					flex:1,
				},
				{
					text:'Значение по умолчанию',
					width:'78',
					dataIndex:'ЗначениеПоУмолчанию',
					flex:1,
				},
				{
					text:'Выражение',
					width:'106',
					dataIndex:'Выражение',
					flex:1,
				},
				{
					text:'Искать по',
					width:'115',
					dataIndex:'ИскатьПо',
					flex:1,
				},
				{
					text:'Связь по владельцу',
					width:'114',
					dataIndex:'СвязьПоВладельцу',
					flex:1,
				},
				{
					text:'Связь по типу',
					width:'96',
					dataIndex:'СвязьПоТипу',
					flex:1,
				},
				{
					text:'Элемент связи по типу',
					width:'106',
					dataIndex:'ЭлементСвязиПоТипу',
					flex:1,
				},
				{
					text:'ШиринаКолонки',
					width:'87',
					dataIndex:'ШиринаКолонки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхИзТабличногоДокумента/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'ПредставлениеРеквизита',
					},
					{
						name:'ИмяРеквизита',
					},
					{
						name:'МожетБытьПолемПоиска',
					},
					{
						name:'ПолеПоиска',
					},
					{
						name:'ДоступноеОписаниеТипов',
					},
					{
						name:'ОписаниеТипов',
					},
					{
						name:'РежимЗагрузки',
					},
					{
						name:'НомерКолонки',
					},
					{
						name:'ЗначениеПоУмолчанию',
					},
					{
						name:'Выражение',
					},
					{
						name:'ИскатьПо',
					},
					{
						name:'СвязьПоВладельцу',
					},
					{
						name:'СвязьПоТипу',
					},
					{
						name:'ЭлементСвязиПоТипу',
					},
					{
						name:'ШиринаКолонки',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПерваяСтрокаДанныхТабличногоДокумента',
			text: 'Первая строка данных табличного документа:',
			style: 'position:absolute;left:6px;top:6px;width:239px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПерваяСтрокаДанныхТабличногоДокумента',
			style: 'position:absolute;left:249px;top:6px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не создавать новых элементов',
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Замещать существующие записи',
			style: 'position:absolute;left:295px;top:6px;width:191px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:632px;height:19px;',
			height: 19,width: 632,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Загрузка в справочник',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:0px;width:246px;height:19px;',
		},
					]
				},
				{
					title:'Загрузка в табличную часть',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ссылка:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СсылкаИсточника',
			style: 'position:absolute;left:95px;top:0px;width:247px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТабличнаяЧастьИсточника',
			style: 'position:absolute;left:439px;top:0px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид справочника:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Вид регистра:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Загрузка в регистр сведений',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:0px;width:246px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРежимЗагрузки',
			text: 'Режим загрузки:',
			style: 'position:absolute;left:8px;top:8px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:102px;top:8px;width:247px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:683px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});