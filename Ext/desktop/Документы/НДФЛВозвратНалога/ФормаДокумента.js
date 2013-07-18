Ext.require(['Данные.Документы.НДФЛВозвратНалога'], function () 
{
	Ext.define('Документы.НДФЛВозвратНалога.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:668px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Возврат налога на доходы физических лиц',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:322px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:410px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:490px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:510px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:314px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 576,
			height: 19,
			style: 'position:absolute;left:84px;top:314px;width:576px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:322px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:410px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВозврат',
			text: 'Возврат за:',
			style: 'position:absolute;left:8px;top:57px;width:76px;height:19px;text-align:left;',
		},
		{
			id: 'РаботникиОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:129px;width:652px;height:179px;',
			height: 179,width: 652,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'110',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Суммы возврата налога',
					width:'264',
					dataIndex:'КолонкаЗаголовок',
					flex:1,
				},
				{
					text:'По ставке 13 (30)%',
					width:'101',
					dataIndex:'СуммаВозвратаПоСтавке13',
					flex:1,
				},
				{
					text:'По ставке 9 (15, 30)%',
					width:'78',
					dataIndex:'СуммаВозвратаПоСтавке09',
					flex:1,
				},
				{
					text:'По ставке 35 (30)%',
					width:'83',
					dataIndex:'СуммаВозвратаПоСтавке35',
					flex:1,
				},
				{
					text:'Для обособленного подразделения',
					width:'200',
					dataIndex:'КолонкаКодовОП',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'100',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'КПП',
					width:'100',
					dataIndex:'КПП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛВозвратНалога/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'КолонкаЗаголовок',
					},
					{
						name:'СуммаВозвратаПоСтавке13',
					},
					{
						name:'СуммаВозвратаПоСтавке09',
					},
					{
						name:'СуммаВозвратаПоСтавке35',
					},
					{
						name:'КолонкаКодовОП',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КПП',
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
						var грид = Ext.getCmp('РаботникиОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НДФЛВозвратНалога.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НДФЛВозвратНалога.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:668px;height:25px;',
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
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:8px;top:89px;width:652px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцНалоговогоПериода',
			width: 220,
			height: 19,
			style: 'position:absolute;left:84px;top:57px;width:220px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:105px;width:652px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сотрудниками, имеющими переплату по НДФЛ',
				},
			]
		},
	]
	});
});