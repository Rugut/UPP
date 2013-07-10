Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:346px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков сотрудника',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:8px;top:33px;width:330px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:330px;height:315px;',
			height: 315,width: 330,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Один отпуск',
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
			style: 'position:absolute;left:10px;top:25px;width:320px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДней',
			text: 'Количество дней:',
			style: 'position:absolute;left:0px;top:84px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:239px;top:82px;width:91px;height:21px;',
		},
					]
				},
				{
					title:'Несколько отпусков',
					items:
					[
		{
			xtype: 'button',
			name: 'ДетальныйВвод1',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОстатков1',
			text: 'Дата остатков:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстатковПоВидамОтпусков',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков3',
			text: 'Дата, на которую вводятся остатки. С даты, следующей после даты остатков, начнется новый рабочий год. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты остатков.',
			style: 'position:absolute;left:10px;top:25px;width:320px;height:52px;',
		},
		{
			id: 'ОстаткиБезРабочихЛет',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:111px;width:330px;height:178px;',
			height: 178,width: 330,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'1800',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Количество дней',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ОстаткиОтпусковОрганизаций").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусковОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
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
						var грид = Ext.getCmp('ОстаткиБезРабочихЛет');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Отпуска с рабочими годами',
					items:
					[
		{
			id: 'Остатки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:330px;height:206px;',
			height: 206,width: 330,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
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
				data: Ext.create("Данные.Справочники.ОстаткиОтпусковОрганизаций").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусковОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:155px;top:294px;width:175px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ПодсказкаДатаОстатков2',
			text: 'В табличной части указываются остатки в разрезе рабочих лет. Введенные остатки будут учитываться для всех отпусков, заканчивающихся после даты окончания САМОГО ПОСЛЕДНЕГО рабочего года.',
			style: 'position:absolute;left:10px;top:236px;width:320px;height:53px;',
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
			style: 'position:absolute;left:0px;top:0px;width:346px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:346px;height:25px;',
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
				},
			]
		},
	]
});