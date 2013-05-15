Ext.define('Обработки.ФормированиеЗаказовНаОбслуживаниеОС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:391px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование заказов на обслуживание ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:227px;top:57px;width:501px;height:301px;',
			height: 301,width: 501,
			columns:
			[
				{
					text:'',
					width:'18',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'179',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата обслуживания',
					width:'111',
					dataIndex:'НоваяДатаРемонта',
					flex:1,
				},
				{
					text:'Расч. дата обслуживания',
					width:'114',
					dataIndex:'НоваяРасчетнаяДатаРемонта',
					flex:1,
				},
				{
					text:'Количество',
					width:'83',
					dataIndex:'КоличествоУслугиПоНормативу',
					flex:1,
				},
				{
					text:'Последнее обслуживание',
					width:'92',
					dataIndex:'ПоследняяДатаРемонта',
					flex:1,
				},
				{
					text:'Норматив',
					width:'57',
					dataIndex:'Норматив',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'85',
					dataIndex:'ПериодичностьОбслуживанияПоНормативуПредставление',
					flex:1,
				},
				{
					text:'Параметр',
					width:'65',
					dataIndex:'ПараметрНаработкиОСПоНормативу',
					flex:1,
				},
				{
					text:'Значение',
					width:'56',
					dataIndex:'ЗначениеПараметраНаработкиОСПоНормативуПредставление',
					flex:1,
				},
				{
					text:'Выработка',
					width:'70',
					dataIndex:'ЗначениеПараметраНаработкиОСПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'НоваяДатаРемонта',
					},
					{
						name:'НоваяРасчетнаяДатаРемонта',
					},
					{
						name:'КоличествоУслугиПоНормативу',
					},
					{
						name:'ПоследняяДатаРемонта',
					},
					{
						name:'Норматив',
					},
					{
						name:'ПериодичностьОбслуживанияПоНормативуПредставление',
					},
					{
						name:'ПараметрНаработкиОСПоНормативу',
					},
					{
						name:'ЗначениеПараметраНаработкиОСПоНормативуПредставление',
					},
					{
						name:'ЗначениеПараметраНаработкиОСПредставление',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:215px;height:301px;',
			height: 301,width: 215,
			columns:
			[
				{
					text:'Услуга/Дата ремонта',
					width:'208',
					dataIndex:'УслугаДата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЗаказовНаОбслуживаниеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'УслугаДата',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Открыть список заказов на обслуживание ОС',
				},
					]
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:366px;width:736px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:227px;top:33px;width:501px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:215px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Новая дата',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
	]
});