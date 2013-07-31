Ext.require(['Данные.Документы.УстановкаНаценокПоУсловиямПродаж'], function () 
{
	Ext.define('Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка наценок по условиям продаж',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:656px;height:25px;',
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
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			id: 'Наценки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:640px;height:246px;',
			height: 246,width: 640,
			columns:
			[
				{
					text:'№',
					width:'20',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатурная или ценовая группа',
					width:'208',
					dataIndex:'НоменклатурнаяЦеноваяГруппа',
					flex:1,
				},
				{
					text:'Условие продаж',
					width:'246',
					dataIndex:'УсловиеПродаж',
					flex:1,
				},
				{
					text:'% наценки',
					width:'100',
					dataIndex:'ПроцентНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаНаценокПоУсловиямПродаж/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НоменклатурнаяЦеноваяГруппа',
					},
					{
						name:'УсловиеПродаж',
					},
					{
						name:'ПроцентНаценки',
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
						var грид = Ext.getCmp('Наценки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:56px;width:640px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:354px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 552,
			height: 19,
			style: 'position:absolute;left:96px;top:354px;width:552px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 552,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:331px;width:552px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:331px;width:88px;height:19px;text-align:left;',
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
	]
	});
});