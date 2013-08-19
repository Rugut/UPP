Ext.require(['Данные.Документы.НачислениеПоБольничномуЛисту'], function () 
{
	Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаОтраженияВУчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:344px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отражение в учете пособия по документу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Отражать в учете:',
			style: 'position:absolute;left:8px;top:8px;width:98px;height:18px;',
		},
		{
			id: 'ОтражениеНачислений',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:156px;width:628px;height:155px;',
			height: 155,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Период начисления',
					width:'116',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Сумма',
					width:'79',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'100',
					dataIndex:'ДополнительныйРезультат',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'60',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Подразделение Дт',
					width:'101',
					dataIndex:'ПодразделениеДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'100',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'60',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Подразделение Кт',
					width:'100',
					dataIndex:'ПодразделениеКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'100',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'40',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Код для ЕСН',
					width:'80',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Счет Дт НУ',
					width:'60',
					dataIndex:'СчетДтНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
					dataIndex:'СубконтоДтНУ1',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоДтНУ2',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоДтНУ3',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'60',
					dataIndex:'СчетКтНУ',
					flex:1,
				},
				{
					text:'Субконто Кт НУ',
					width:'100',
					dataIndex:'СубконтоКтНУ1',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоКтНУ2',
					flex:1,
				},
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'СубконтоКтНУ3',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Сумма НУ',
					width:'100',
					dataIndex:'СуммаНУ',
					flex:1,
				},
				{
					text:'Сумма ПР',
					width:'100',
					dataIndex:'СуммаПР',
					flex:1,
				},
				{
					text:'Сумма ВР',
					width:'100',
					dataIndex:'СуммаВР',
					flex:1,
				},
				{
					text:'Вид начислений оплаты труда по статье255 НК',
					width:'100',
					dataIndex:'ВидНачисленийОплатыТрудаПоСтатье255НК',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'Сумма',
					},
					{
						name:'ДополнительныйРезультат',
					},
					{
						name:'СчетДт',
					},
					{
						name:'ПодразделениеДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'Колонка1',
					},
					{
						name:'СчетКт',
					},
					{
						name:'ПодразделениеКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'СчетДтНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'СуммаНУ',
					},
					{
						name:'СуммаПР',
					},
					{
						name:'СуммаВР',
					},
					{
						name:'ВидНачисленийОплатыТрудаПоСтатье255НК',
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
						var грид = Ext.getCmp('ОтражениеНачислений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаОтраженияВУчетеСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаОтраженияВУчетеСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:628px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:54px;width:628px;height:62px;',
			height: 62,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ЕНВД',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПодпадаетПодЕНВД',
			style: 'position:absolute;left:153px;top:37px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодпадаетПодЕНВД4',
			text: 'Доля ЕНВД:',
			style: 'position:absolute;left:0px;top:0px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент4',
			text: '%',
			style: 'position:absolute;left:230px;top:37px;width:19px;height:19px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'определяется по базовым начислениям',
			style: 'position:absolute;left:71px;top:1px;width:258px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'определяется по состоянию на дату события',
			style: 'position:absolute;left:71px;top:19px;width:258px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'составляет',
			style: 'position:absolute;left:71px;top:38px;width:80px;height:18px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Проводки и данные для ЕСН',
			style: 'position:absolute;left:8px;top:116px;width:628px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'документом Отражение в учете, в конце месяца',
			style: 'position:absolute;left:107px;top:8px;width:296px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по данным текущего документа',
			style: 'position:absolute;left:107px;top:29px;width:296px;height:18px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:319px;width:644px;height:25px;',
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
					text:'Справка',
				},
			]
		},
	]
	});
});