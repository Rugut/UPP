Ext.require(['Данные.Справочники.НоменклатурныеГруппы'], function () 
{
	Ext.define('Справочники.НоменклатурныеГруппы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатурные группы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:59px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 242,
			height: 19,
			style: 'position:absolute;left:94px;top:59px;width:242px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:452px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'fieldset',
			title: 'Единицы измерения',
			style: 'position:absolute;left:8px;top:110px;width:436px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:338px;top:59px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:380px;top:59px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая единица:',
			style: 'position:absolute;left:16px;top:131px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'БазоваяЕдиницаИзмерения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:114px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЕдиницаХраненияОстатков',
			width: 80,
			height: 19,
			style: 'position:absolute;left:364px;top:131px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаХраненияОстатков',
			text: 'Единица хранения остатков:',
			style: 'position:absolute;left:214px;top:131px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьБазовойЕдиницыИзмерения',
			text: 'Полное наименование базовой единицы измерения',
			style: 'position:absolute;left:16px;top:153px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьЕдиницыХраненияОстатков',
			text: 'Информация о единице хранения остатков',
			style: 'position:absolute;left:214px;top:154px;width:230px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 350,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:350px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:178px;width:436px;height:239px;',
			height: 239,width: 436,
			items:
			[
				{
					title:'Состав группы',
					items:
					[
		{
			id: 'СписокГруппы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вес вхождения',
					width:'120',
					dataIndex:'Вес',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НоменклатурныеГруппы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НоменклатурныеГруппы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Наименование',
					},
					{
						name:'Вес',
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
						var грид = Ext.getCmp('СписокГруппы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'119',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НоменклатурныеГруппы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НоменклатурныеГруппы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:422px;height:183px;',
			height: 183,width: 422,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'220',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НоменклатурныеГруппы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НоменклатурныеГруппы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НоменклатурныеГруппы.ФормаЭлементаСобытия");
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
	]
	});
});