Ext.define('Обработки.УдалениеПисемЭлектроннойПочты.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Удаление писем электронной почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:682px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:666px;height:236px;',
			height: 236,width: 666,
			columns:
			[
				{
					text:'N',
					width:'34',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'НеРассмотрено',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'СтатусПисьма',
					flex:1,
				},
				{
					text:'Электронное письмо',
					width:'142',
					dataIndex:'ЭлектронноеПисьмо',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'89',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Получатели',
					width:'96',
					dataIndex:'Получатели',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'98',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата отправления',
					width:'100',
					dataIndex:'ДатаОтправления',
					flex:1,
				},
				{
					text:'Дата транспорта',
					width:'139',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалениеПисемЭлектроннойПочты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Использование',
					},
					{
						name:'НеРассмотрено',
					},
					{
						name:'СтатусПисьма',
					},
					{
						name:'ЭлектронноеПисьмо',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Получатели',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаОтправления',
					},
					{
						name:'ДатаТранспорта',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:274px;width:666px;height:151px;',
			height: 151,width: 666,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Данные',
					width:'374',
					dataIndex:'Данные',
					flex:1,
				},
				{
					text:'Метаданные',
					width:'266',
					dataIndex:'Метаданные',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УдалениеПисемЭлектроннойПочты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Данные',
					},
					{
						name:'Метаданные',
					},
				]
			},
		},
	]
});