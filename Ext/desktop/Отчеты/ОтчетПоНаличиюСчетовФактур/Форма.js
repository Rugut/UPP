Ext.require(['Данные.Отчеты.ОтчетПоНаличиюСчетовФактур'], function () 
{
	Ext.define('Отчеты.ОтчетПоНаличиюСчетовФактур.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:367px;height:375px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет по наличию счетов-фактур',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
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
			name: 'НачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:139px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:251px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:139px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОтчетПоНаличиюСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОтчетПоНаличиюСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОтчетПоНаличиюСчетовФактур.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОтчетПоНаличиюСчетовФактур.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеСчетаФактуры',
			text: 'Наличие счета-фактуры:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:19px;text-align:left;',
		},
		{
			id: 'СписокДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:351px;height:54px;',
			height: 54,width: 351,
			columns:
			[
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоНаличиюСчетовФактур/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Документ',
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
						var грид = Ext.getCmp('СписокДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетПоНаличиюСчетовФактур.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетПоНаличиюСчетовФактур.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:215px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетФактура',
			width: 220,
			height: 19,
			style: 'position:absolute;left:139px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсеКромеСпискаДокументов',
			width: 88,
			height: 19,
			style: 'position:absolute;left:271px;top:126px;width:88px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Список документов:',
			style: 'position:absolute;left:8px;top:107px;width:351px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Отбор:',
			style: 'position:absolute;left:230px;top:126px;width:37px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'по:',
			style: 'position:absolute;left:228px;top:33px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:340px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Результат:',
			style: 'position:absolute;left:8px;top:215px;width:351px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});