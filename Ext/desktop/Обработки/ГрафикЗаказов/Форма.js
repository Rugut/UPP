Ext.require(['Данные.Обработки.ГрафикЗаказов'], function () 
{
	Ext.define('Обработки.ГрафикЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:539px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'График заказов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			width: 769,
			height: 25,
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Видимость отборы',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Восстановить настройку',
				},
				'-',
				{
					text:'Сохранить график',
				},
				{
					text:'Отменить не сохраненные изменения',
				},
				'-',
				{
					text:'Диагностика',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 64,
			height: 19,
			style: 'position:absolute;left:821px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 64,
			height: 19,
			style: 'position:absolute;left:908px;top:2px;width:64px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:978px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с',
			style: 'position:absolute;left:769px;top:2px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:889px;top:2px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:761px;top:0px;width:239px;height:25px;',
			width: 239,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:27px;width:1000px;height:124px;',
			height: 124,width: 1000,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеОтборы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:986px;height:88px;',
			height: 88,width: 986,
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
					width:'317',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'101',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'161',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'161',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'161',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ТабличноеПолеОтборы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрафикЗаказов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрафикЗаказов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:953px;height:24px;',
			width: 953,
			height: 24,
			items:
			[
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});