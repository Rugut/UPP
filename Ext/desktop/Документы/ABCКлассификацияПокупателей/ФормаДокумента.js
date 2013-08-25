Ext.require(['Данные.Документы.ABCКлассификацияПокупателей'], function () 
{
	Ext.define('Документы.ABCКлассификацияПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'ABC-классификация покупателей',
	
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
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			width: 630,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:614px;height:290px;',
			height: 290,width: 614,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Анализировать за период с:',
			style: 'position:absolute;left:6px;top:6px;width:153px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 77,
			height: 19,
			style: 'position:absolute;left:163px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:244px;top:6px;width:19px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 77,
			height: 19,
			style: 'position:absolute;left:265px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:31px;width:600px;height:24px;',
			width: 600,
			height: 24,
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			id: 'ТаблицаРаспределенияКонтрагентов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:600px;height:209px;',
			height: 209,width: 600,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'ABC -класс',
					width:'80',
					dataIndex:'ABCКлассификация',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'220',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Параметр (значение)',
					width:'120',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
				{
					text:'Параметр (%)',
					width:'80',
					dataIndex:'ПроцентПараметра',
					flex:1,
				},
				{
					text:'Менеджер контрагента',
					width:'120',
					dataIndex:'МенеджерКонтрагента',
					flex:1,
				},
				{
					text:'Старый ABC-класс',
					width:'100',
					dataIndex:'ABCКлассификацияСтарая',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ABCКлассификацияПокупателей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ABCКлассификация',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ЗначениеПараметра',
					},
					{
						name:'ПроцентПараметра',
					},
					{
						name:'МенеджерКонтрагента',
					},
					{
						name:'ABCКлассификацияСтарая',
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
						var грид = Ext.getCmp('ТаблицаРаспределенияКонтрагентов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ABCКлассификацияПокупателей.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ABCКлассификацияПокупателей.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:348px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПараметраРаспределения',
			text: 'ПараметрРаспределения',
			style: 'position:absolute;left:12px;top:27px;width:594px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'А-класс:',
			style: 'position:absolute;left:12px;top:72px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:66px;top:72px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'B-класс:',
			style: 'position:absolute;left:12px;top:97px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:66px;top:97px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'С-класс:',
			style: 'position:absolute;left:12px;top:122px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:66px;top:122px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: '%',
			style: 'position:absolute;left:148px;top:97px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: '%',
			style: 'position:absolute;left:148px;top:72px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: '%',
			style: 'position:absolute;left:148px;top:122px;width:13px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Критерии распределения (процент от общей суммы параметров распределения)',
			style: 'position:absolute;left:6px;top:50px;width:600px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметр распределения (из учетной политики)',
			style: 'position:absolute;left:6px;top:6px;width:600px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:382px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 526,
			height: 19,
			style: 'position:absolute;left:96px;top:382px;width:526px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:168px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:358px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 526,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:358px;width:526px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ABCКлассификацияПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ABCКлассификацияПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ABCКлассификацияПокупателей.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ABCКлассификацияПокупателей.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:630px;height:25px;',
			width: 630,
			height: 25,
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
	]
	});
});