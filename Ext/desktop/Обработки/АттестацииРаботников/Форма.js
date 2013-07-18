Ext.require(['Данные.Обработки.АттестацииРаботников'], function () 
{
	Ext.define('Обработки.АттестацииРаботников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:627px;height:393px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Аттестации сотрудников',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:611px;height:352px;',
			height: 352,width: 611,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			id: 'Работники',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:184px;height:270px;',
			height: 270,width: 184,
			columns:
			[
				{
					text:'Сотрудник',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АттестацииРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Сотрудник',
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
						var грид = Ext.getCmp('Работники');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АттестацииРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АттестацииРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:597px;height:24px;',
			items:
			[
				{
					text:'Назначить аттестацию',
				},
				{
					text:'Подробно',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:597px;height:25px;',
			height: 25,width: 597,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 501,
			height: 19,
			style: 'position:absolute;left:90px;top:6px;width:501px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Аттестации',
					items:
					[
		{
			id: 'Аттестации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:597px;height:296px;',
			height: 296,width: 597,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Физлицо',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АттестацииРаботников/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Физлицо',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('Аттестации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АттестацииРаботников.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АттестацииРаботников.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Анализ оценок',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Должность',
			width: 203,
			height: 19,
			style: 'position:absolute;left:400px;top:36px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Должность',
			style: 'position:absolute;left:309px;top:36px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Компетенция:',
			style: 'position:absolute;left:6px;top:36px;width:87px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Компетенция',
			width: 203,
			height: 19,
			style: 'position:absolute;left:97px;top:36px;width:203px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Распределение полученных оценок',
			style: 'position:absolute;left:6px;top:69px;width:597px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:8px;width:259px;height:19px;',
			height: 19,width: 259,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Произвольный период',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:0px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:139px;top:0px;width:16px;height:19px;text-align:center;',
		},
					]
				},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:368px;width:627px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
});