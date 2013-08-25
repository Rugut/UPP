Ext.require(['Данные.Обработки.ГрафикОтпусков'], function () 
{
	Ext.define('Обработки.ГрафикОтпусков.РасшифровкаОтпусковСотрудника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:641px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '<ФИО>, <номер года> год',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТабличноеПолеОтпуска',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:84px;width:625px;height:163px;',
			height: 163,width: 625,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Текст',
					width:'179',
					dataIndex:'Текст',
					flex:1,
				},
				{
					text:'Описание',
					width:'150',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Строка оформления',
					width:'100',
					dataIndex:'СтрокаОформления',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикОтпусков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Текст',
					},
					{
						name:'Описание',
					},
					{
						name:'СтрокаОформления',
					},
					{
						name:'Документ',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ТабличноеПолеОтпуска');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрафикОтпусков.РасшифровкаОтпусковСотрудникаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрафикОтпусков.РасшифровкаОтпусковСотрудникаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			width: 641,
			height: 25,
			items:
			[
				{
					text:'Запланировать отпуск',
				},
				{
					text:'Открыть документ',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Остатки отпусков сотрудника',
				},
				'-',
				{
					text:'Дополнительные дни отпуска',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ФИО',
			text: 'Иванов Иван Иванович',
			style: 'position:absolute;left:8px;top:25px;width:350px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриемаНаРаботу',
			text: 'Дата приема на работу',
			style: 'position:absolute;left:8px;top:52px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДатаПриемаНаРаботу',
			text: 'ДатаПриемаНаРаботу',
			style: 'position:absolute;left:207px;top:52px;width:151px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Сегодня',
			text: 'Сегодня',
			style: 'position:absolute;left:8px;top:264px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеиспользованныйОтпуск',
			text: 'Неиспользованный отпуск',
			style: 'position:absolute;left:8px;top:284px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НеиспользованныйОтпуск',
			text: 'НеиспользованныйОтпуск',
			style: 'position:absolute;left:207px;top:284px;width:151px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйОтпуск',
			text: 'Из них дополнительного отпуска',
			style: 'position:absolute;left:8px;top:304px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительныйОтпуск',
			text: 'ДополнительныйОтпуск',
			style: 'position:absolute;left:207px;top:304px;width:151px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'СправкаПоОтпуску',
			text: 'Справка по отпуску',
			style: 'position:absolute;left:495px;top:297px;width:138px;height:22px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});