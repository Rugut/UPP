Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиГражданство',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:418px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Гражданство физического лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись о гражданстве действует с:',
			style: 'position:absolute;left:8px;top:365px;width:187px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 80,
			height: 19,
			style: 'position:absolute;left:203px;top:365px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГражданинСтраны.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:145px;top:8px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:354px;width:402px;height:6px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПФР',
			text: 'На физическое лицо распространяется обязательное пенсионное страхование в РФ. Таковыми являются граждане РФ, а также постоянно или временно проживающие на территории РФ иностранные граждане и лица без гражданства.',
			style: 'position:absolute;left:8px;top:144px;width:402px;height:65px;',
		},
		{
			id: 'ПринятыеПоДолгосрочнымДоговорам',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:402px;height:100px;',
			height: 100,width: 402,
			columns:
			[
				{
					text:'Заключен трудовой договор на длительный срок',
					width:'156',
					dataIndex:'ПринятПоДолгосрочномуДоговору',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'С ...',
					width:'70',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'по',
					width:'70',
					dataIndex:'ПериодЗавершения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['ПринятПоДолгосрочномуДоговору','Организация','Период','ПериодЗавершения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПринятПоДолгосрочномуДоговору',
					},
					{
						name:'Организация',
					},
					{
						name:'Период',
					},
					{
						name:'ПериодЗавершения',
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
						var грид = Ext.getCmp('ПринятыеПоДолгосрочнымДоговорам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаЗаписиГражданствоСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Для временно пребывающих на территории РФ иностранных граждан и лиц без гражданства',
			style: 'position:absolute;left:8px;top:213px;width:402px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для иностранных граждан и лиц без гражданства',
			style: 'position:absolute;left:8px;top:53px;width:402px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Гражданин страны:',
			style: 'position:absolute;left:8px;top:8px;width:135px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Лицо без гражданства',
			style: 'position:absolute;left:8px;top:31px;width:135px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Постоянно проживает на территории РФ',
			style: 'position:absolute;left:14px;top:78px;width:260px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Временно проживает на территории РФ',
			style: 'position:absolute;left:14px;top:98px;width:260px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Временно пребывает на территории РФ',
			style: 'position:absolute;left:14px;top:118px;width:260px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:418px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'История...',
				},
				'-',
				{
					text:'OK',
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