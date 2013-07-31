Ext.require(['Данные.Справочники.ЗанятияКурсовОбучения'], function () 
{
	Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Занятия курсов обучения',
	
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
			width: 298,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:298px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеЗанятия',
			style: 'position:absolute;left:8px;top:75px;width:384px;height:82px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьЗанятия',
			text: 'Длительность занятия, часов:',
			style: 'position:absolute;left:8px;top:162px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДлительностьЗанятия',
			style: 'position:absolute;left:170px;top:162px;width:75px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:384px;height:24px;',
			items:
			[
				'-',
				{
					text:'Коррекция весов',
				},
			]
		},
		{
			id: 'ИзучаемыеКомпетенции',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:384px;height:110px;',
			height: 110,width: 384,
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
					width:'244',
					dataIndex:'Компетенция',
					flex:1,
				},
				{
					text:'Вес изучения %',
					width:'96',
					dataIndex:'Вес',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ЗанятияКурсовОбучения").data,
					fields: ['НомерСтроки','Компетенция','Вес',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗанятияКурсовОбучения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						Ext.require(['Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Изучаемые компетенции',
			style: 'position:absolute;left:8px;top:223px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпис��ВидЗанятия',
			text: 'Форма проведения занятия:',
			style: 'position:absolute;left:8px;top:186px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидЗанятия.Представление',
			width: 222,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:170px;top:186px;width:222px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ЗанятияКурсовОбучения.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Описание занятия:',
			style: 'position:absolute;left:8px;top:56px;width:384px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:400px;height:25px;',
			dock: 'bottom',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});