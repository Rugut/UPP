Ext.require(['Данные.Обработки.МСФОКонсолидация'], function () 
{
	Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Консолидация по информационной базе',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:640px;height:326px;',
			height: 326,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период составления отчета:',
			style: 'position:absolute;left:0px;top:0px;width:155px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 96,
			height: 19,
			style: 'position:absolute;left:164px;top:0px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Консолидируемая группа:',
			style: 'position:absolute;left:0px;top:24px;width:155px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НазваниеКонсолидируемойГруппы',
			width: 476,
			height: 19,
			style: 'position:absolute;left:164px;top:24px;width:476px;height:19px;',
		},
		{
			id: 'ТабличноеПолеОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:91px;width:640px;height:213px;',
			height: 213,width: 640,
			columns:
			[
				{
					text:'Организация',
					width:'220',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Головная орг.',
					width:'80',
					dataIndex:'Головная',
					flex:1,
				},
				{
					text:'Товары (на начало)',
					width:'100',
					dataIndex:'ТоварыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Товары (оборот)',
					width:'100',
					dataIndex:'ТоварыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Материалы (на начало)',
					width:'100',
					dataIndex:'СырьеИМатериалыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Материалы (оборот)',
					width:'100',
					dataIndex:'СырьеИМатериалыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'НЗП (на начало)',
					width:'100',
					dataIndex:'НезавершенноеПроизводствоПрибыльНаНачало',
					flex:1,
				},
				{
					text:'НЗП (оборот)',
					width:'100',
					dataIndex:'НезавершенноеПроизводствоПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Полуфабрикаты (на начало)',
					width:'100',
					dataIndex:'КомплектующиеИПолуфабрикатыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Полуфабрикаты (оборот)',
					width:'100',
					dataIndex:'КомплектующиеИПолуфабрикатыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'ГП (на начало)',
					width:'100',
					dataIndex:'ГотоваяПродукцияПрибыльНаНачало',
					flex:1,
				},
				{
					text:'ГП (оборот)',
					width:'100',
					dataIndex:'ГотоваяПродукцияПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Товары отгр. (на начало)',
					width:'100',
					dataIndex:'ТоварыОтгруженныеПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Товары отгр. (оборот)',
					width:'100',
					dataIndex:'ТоварыОтгруженныеПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'ОС (на начало)',
					width:'100',
					dataIndex:'ОСПрибыльНаНачало',
					flex:1,
				},
				{
					text:'ОС (оборот)',
					width:'100',
					dataIndex:'ОСПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'НМА (на начало)',
					width:'100',
					dataIndex:'НМАПрибыльНаНачало',
					flex:1,
				},
				{
					text:'НМА (оборот)',
					width:'100',
					dataIndex:'НМАПрибыльВТеченииГода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'Головная',
					},
					{
						name:'ТоварыПрибыльНаНачало',
					},
					{
						name:'ТоварыПрибыльВТеченииГода',
					},
					{
						name:'СырьеИМатериалыПрибыльНаНачало',
					},
					{
						name:'СырьеИМатериалыПрибыльВТеченииГода',
					},
					{
						name:'НезавершенноеПроизводствоПрибыльНаНачало',
					},
					{
						name:'НезавершенноеПроизводствоПрибыльВТеченииГода',
					},
					{
						name:'КомплектующиеИПолуфабрикатыПрибыльНаНачало',
					},
					{
						name:'КомплектующиеИПолуфабрикатыПрибыльВТеченииГода',
					},
					{
						name:'ГотоваяПродукцияПрибыльНаНачало',
					},
					{
						name:'ГотоваяПродукцияПрибыльВТеченииГода',
					},
					{
						name:'ТоварыОтгруженныеПрибыльНаНачало',
					},
					{
						name:'ТоварыОтгруженныеПрибыльВТеченииГода',
					},
					{
						name:'ОСПрибыльНаНачало',
					},
					{
						name:'ОСПрибыльВТеченииГода',
					},
					{
						name:'НМАПрибыльНаНачало',
					},
					{
						name:'НМАПрибыльВТеченииГода',
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
						var грид = Ext.getCmp('ТабличноеПолеОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Список консолидируемых организаций',
			style: 'position:absolute;left:0px;top:51px;width:640px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Для каждой консолидируемой организации укажите прибыль от внутригрупповых операций в разрезе указанных активов.',
			style: 'position:absolute;left:0px;top:311px;width:640px;height:15px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Операция:',
			style: 'position:absolute;left:0px;top:22px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Операция',
			width: 570,
			height: 19,
			style: 'position:absolute;left:70px;top:22px;width:570px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Элиминирование статей отчетности',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:16px;',
		},
		{
			id: 'ТабличноеПолеДвижения',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:640px;height:280px;',
			height: 280,width: 640,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'120',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'120',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('ТабличноеПолеДвижения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Сформированная консолидированная отчетность',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:16px;',
		},
		{
			id: 'ТабличноеПолеРезультат',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:640px;height:305px;',
			height: 305,width: 640,
			columns:
			[
				{
					text:'Отчет',
					width:'300',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'21',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Отчет',
					},
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТабличноеПолеРезультат');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияДанныхСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:656px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});