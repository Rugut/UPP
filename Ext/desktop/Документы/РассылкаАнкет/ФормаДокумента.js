Ext.define('Документы.РассылкаАнкет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:449px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рассылка анкет',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкета',
			text: 'Анкета:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Анкета',
			style: 'position:absolute;left:96px;top:57px;width:345px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:433px;height:44px;',
			height: 44,width: 433,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Внешний почтовый клиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветов',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектронныйАдресОтветов',
			style: 'position:absolute;left:88px;top:0px;width:345px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомлять о получении',
			style: 'position:absolute;left:88px;top:24px;width:288px;height:15px;',
		},
					]
				},
				{
					title:'Встроенный почтовый клиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьУчетнаяЗаписьДляОтправки',
			text: 'E-mail отправки:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УчетнаяЗаписьДляОтправки',
			style: 'position:absolute;left:88px;top:0px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:25px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			style: 'position:absolute;left:88px;top:25px;width:345px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:433px;height:196px;',
			height: 196,width: 433,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:6px;top:6px;width:419px;height:164px;',
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:419px;height:139px;',
			height: 139,width: 419,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Получатель',
					width:'100',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Электронный адрес',
					width:'100',
					dataIndex:'Получатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РассылкаАнкет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Объект',
					},
					{
						name:'Получатель',
					},
				]
			},
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:419px;height:139px;',
			height: 139,width: 419,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РассылкаАнкет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ИмяФайла',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Прочее',
			style: 'position:absolute;left:8px;top:334px;width:433px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПервичнаяРассылка',
			text: 'Рассылка:',
			style: 'position:absolute;left:8px;top:356px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПервичнаяРассылка',
			style: 'position:absolute;left:96px;top:356px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:381px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:381px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:406px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:406px;width:345px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
				'-',
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:449px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Повторная рассылка',
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
	]
});