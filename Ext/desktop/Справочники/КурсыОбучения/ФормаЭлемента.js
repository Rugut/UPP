Ext.require(['Данные.Справочники.КурсыОбучения'], function () 
{
	Ext.define('Справочники.КурсыОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:414px;height:477px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Курс обучения',
	
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
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 312,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеКурса',
			style: 'position:absolute;left:8px;top:110px;width:398px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьКурса',
			text: 'Объем курса*, часов:',
			style: 'position:absolute;left:8px;top:175px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДлительностьКурса',
			style: 'position:absolute;left:188px;top:175px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗатратыНаОдногоОбучающегося',
			text: 'Затраты на одного обучающегося:',
			style: 'position:absolute;left:8px;top:200px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗатратыНаОдногоОбучающегося',
			style: 'position:absolute;left:188px;top:200px;width:61px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокументаОбОбразовании',
			text: 'При прохождении курса может быть выдан документ:',
			style: 'position:absolute;left:8px;top:224px;width:398px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидДокументаОбОбразовании',
			width: 398,
			height: 19,
			style: 'position:absolute;left:8px;top:243px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:267px;top:200px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Валюта',
			width: 94,
			height: 19,
			style: 'position:absolute;left:312px;top:200px;width:94px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:268px;width:398px;height:176px;',
			height: 176,width: 398,
			items:
			[
				{
					title:'Состав курса',
					items:
					[
		{
			id: 'ЗанятияКурса',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:384px;height:120px;',
			height: 120,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Занятие',
					width:'349',
					dataIndex:'Занятие',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КурсыОбучения").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КурсыОбучения/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Занятие',
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
						var грид = Ext.getCmp('ЗанятияКурса');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КурсыОбучения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КурсыОбучения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Изучаемые компетенции*',
					items:
					[
		{
			id: 'ИзучаемыеКомпетенции',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:384px;height:120px;',
			height: 120,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Компетенция',
					width:'241',
					dataIndex:'Компетенция',
					flex:1,
				},
				{
					text:'Вес изучения %',
					width:'97',
					dataIndex:'Вес',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КурсыОбучения").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КурсыОбучения/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Компетенция',
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
						var грид = Ext.getCmp('ИзучаемыеКомпетенции');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КурсыОбучения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КурсыОбучения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Регламентированный учет',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать в регламентированном учете',
			style: 'position:absolute;left:6px;top:22px;width:384px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Описание курса:',
			style: 'position:absolute;left:8px;top:94px;width:398px;height:14px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 312,
			height: 19,
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:414px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:414px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'*Составить по занятиям',
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
});