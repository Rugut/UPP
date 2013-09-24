Ext.require(['Данные.Справочники.РабочиеЦентры'], function () 
{
	Ext.define('Справочники.РабочиеЦентры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:439px;height:318px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Рабочие центры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:325px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:367px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 225,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеКомпании',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании.Представление',
			width: 333,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:57px;width:333px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.РабочиеЦентры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РабочиеЦентры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.РабочиеЦентры.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РабочиеЦентры.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			width: 439,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:84px;width:423px;height:201px;',
			height: 201,width: 423,
			items:
			[
				{
					items:
					[
		{
			id: 'ПодчиненныеРабочиеЦентры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:409px;height:123px;',
			height: 123,width: 409,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'100',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.РабочиеЦентры").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','РабочийЦентр',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочиеЦентры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'РабочийЦентр',
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
						var грид = Ext.getCmp('ПодчиненныеРабочиеЦентры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочиеЦентры.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочиеЦентры.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:27px;width:409px;height:24px;',
			width: 409,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется загрузка подчиненных рабочих центров',
			style: 'position:absolute;left:6px;top:6px;width:409px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:6px;top:6px;width:409px;height:169px;',
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
			style: 'position:absolute;left:0px;top:293px;width:439px;height:25px;',
			width: 439,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});