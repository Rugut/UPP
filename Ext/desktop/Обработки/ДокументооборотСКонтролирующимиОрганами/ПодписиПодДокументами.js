Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументами',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:832px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Электронно-цифровые подписи',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Подписи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:158px;width:816px;height:256px;',
			height: 256,width: 816,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Сертификат ключа подписи',
					width:'250',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Имя файла подписи',
					width:'270',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'124',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Статус проверки',
					width:'124',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Имя подписанного файла',
					width:'232',
					dataIndex:'ЭЦПИмяПодписанногоФайла',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'21',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Размер',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ЭЦПИмяПодписанногоФайла',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
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
						var грид = Ext.getCmp('Подписи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументПредставление',
			width: 675,
			height: 19,
			style: 'position:absolute;left:149px;top:97px;width:675px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТранспортноеСообщениеПредставление',
			width: 675,
			height: 19,
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Транспортное сообщение:',
			style: 'position:absolute;left:8px;top:70px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:97px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:126px;width:816px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:133px;width:816px;height:24px;',
			width: 816,
			height: 24,
			items:
			[
				{
					text:'Добавить',
					tooltip:'a0c2238-cb59-4473-ada6-352b60f3c0a',
				},
				{
					text:'Удалить',
					tooltip:'cbf8f9a-3d2f-427b-bfce-5e2bc7a8589',
				},
				'-',
				{
					text:'Проверить',
					tooltip:'cd23a32-5c7c-43f2-9021-80d98128556',
				},
				'-',
				{
					text:'Показать сертификат',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Обратите внимание, что изменения, производимые в форме, вступают в силу незамедлительно. Отмена изменений невозможна.',
			style: 'position:absolute;left:8px;top:8px;width:816px;height:15px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:32px;width:816px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ЦиклОбмена.Представление',
			width: 675,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:43px;width:675px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Цикл обмена:',
			style: 'position:absolute;left:8px;top:43px;width:136px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ТранспортноеСообщение.Представление',
			width: 675,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:149px;top:70px;width:675px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ДокументооборотСКонтролирующимиОрганами.ПодписиПодДокументамиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});