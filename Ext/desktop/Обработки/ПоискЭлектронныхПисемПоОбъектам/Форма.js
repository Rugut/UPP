Ext.define('Обработки.ПоискЭлектронныхПисемПоОбъектам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск электронных писем по объектам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
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
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить интервал дат...',
				},
				{
					text:'Поиск по номеру...',
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
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
					]
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:680px;height:320px;',
			height: 320,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СостояниеПотомкаПисьма',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ЕстьВложения',
					flex:1,
				},
				{
					text:'Создано',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Отправлено/получено',
					width:'80',
					dataIndex:'ДатаОтправленияПолучения',
					flex:1,
				},
				{
					text:'От кого',
					width:'120',
					dataIndex:'ОтправительИмя',
					flex:1,
				},
				{
					text:'Кому',
					width:'120',
					dataIndex:'КомуПредставление',
					flex:1,
				},
				{
					text:'Тема',
					width:'220',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'Номер',
					width:'21',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'27',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'80',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Основание',
					width:'86',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискЭлектронныхПисемПоОбъектам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НеРассмотрено',
					},
					{
						name:'СостояниеПотомкаПисьма',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'ЕстьВложения',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаОтправленияПолучения',
					},
					{
						name:'ОтправительИмя',
					},
					{
						name:'КомуПредставление',
					},
					{
						name:'Тема',
					},
					{
						name:'Номер',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Основание',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:50px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОбъектПоиска',
			style: 'position:absolute;left:236px;top:33px;width:452px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отбор:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:0px;width:38px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
			]
		},
	]
});