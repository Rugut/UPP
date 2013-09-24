Ext.require(['Данные.Справочники.ОстаткиОтпусков'], function () 
{
	Ext.define('Справочники.ОстаткиОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:288px;height:324px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Остатки отпуска прошлых лет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:288px;height:25px;',
			width: 288,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:58px;width:272px;height:233px;',
			height: 233,width: 272,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаОстатков',
			text: 'Дата остатков:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстатков',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков1',
			text: 'Дата, на которую вводятся остатки. С даты, следующей после даты остатков, начнется новый рабочий год. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты остатков.',
			style: 'position:absolute;left:10px;top:25px;width:262px;height:65px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДней',
			text: 'Количество дней:',
			style: 'position:absolute;left:0px;top:96px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:96px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:181px;top:95px;width:91px;height:21px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'Остатки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:272px;height:111px;',
			height: 111,width: 272,
			columns:
			[
				{
					text:'Год работы',
					width:'100',
					dataIndex:'ГодРаботы',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'ДатаНачалаРабочегоГода',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'ДатаОкончанияРабочегоГода',
					flex:1,
				},
				{
					text:'Количество дней',
					width:'70',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОстаткиОтпусков").data,
					fields: ['Ссылка','ГодРаботы','ДатаНачалаРабочегоГода','ДатаОкончанияРабочегоГода','Количество',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусков/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ГодРаботы',
					},
					{
						name:'ДатаНачалаРабочегоГода',
					},
					{
						name:'ДатаОкончанияРабочегоГода',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('Остатки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОстаткиОтпусков.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОстаткиОтпусков.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:208px;height:24px;',
			width: 208,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				'-',
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				'-',
				{
					text:'Рассчитать',
					tooltip:'Рассчитать остатки отпусков',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков2',
			text: 'В табличной части указываются остатки в разрезе рабочих лет. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты окончания САМОГО ПОСЛЕДНЕГО рабочего года.',
			style: 'position:absolute;left:10px;top:140px;width:262px;height:66px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'НадписьСотрудник',
			style: 'position:absolute;left:8px;top:33px;width:272px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:288px;height:25px;',
			width: 288,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'',
				},
				'-',
				{
					text:'Записать',
					tooltip:'',
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