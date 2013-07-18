Ext.require(['Данные.Документы.СписаниеОС'], function () 
{
	Ext.define('Документы.СписаниеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:689px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Списание ОС',
	
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
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:337px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 587,
			height: 19,
			style: 'position:absolute;left:94px;top:337px;width:587px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:361px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 587,
			height: 19,
			style: 'position:absolute;left:94px;top:361px;width:587px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:105px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Событие',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:72px;height:19px;',
		},
		{
			id: 'ОС',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:172px;width:673px;height:160px;',
			height: 160,width: 673,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'215',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'63',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Списано при принятии',
					width:'146',
					dataIndex:'СписаноНаЗатраты',
					flex:1,
				},
				{
					text:'Списано при принятии (БУ)',
					width:'146',
					dataIndex:'СписаноНаЗатратыБУ',
					flex:1,
				},
				{
					text:'Стоимость',
					width:'102',
					dataIndex:'Стоимость',
					flex:1,
				},
				{
					text:'Ост. стоимость',
					width:'102',
					dataIndex:'ОстСтоимость',
					flex:1,
				},
				{
					text:'Амортизация',
					width:'90',
					dataIndex:'Амортизация',
					flex:1,
				},
				{
					text:'Аморт. за месяц',
					width:'99',
					dataIndex:'АмортизацияЗаМесяц',
					flex:1,
				},
				{
					text:'Стоимость (БУ)',
					width:'110',
					dataIndex:'СтоимостьБУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'115',
					dataIndex:'ОстСтоимостьБУ',
					flex:1,
				},
				{
					text:'Амортизация (БУ)',
					width:'119',
					dataIndex:'АмортизацияБУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'122',
					dataIndex:'АмортизацияЗаМесяцБУ',
					flex:1,
				},
				{
					text:'Стоимость (НУ)',
					width:'111',
					dataIndex:'СтоимостьНУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (НУ)',
					width:'101',
					dataIndex:'ОстСтоимостьНУ',
					flex:1,
				},
				{
					text:'Амортизация (НУ)',
					width:'118',
					dataIndex:'АмортизацияНУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (НУ)',
					width:'103',
					dataIndex:'АмортизацияЗаМесяцНУ',
					flex:1,
				},
				{
					text:'Сумма аморт. премии, вкл. в расходы (НУ)',
					width:'120',
					dataIndex:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписаниеОС/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'СписаноНаЗатраты',
					},
					{
						name:'СписаноНаЗатратыБУ',
					},
					{
						name:'Стоимость',
					},
					{
						name:'ОстСтоимость',
					},
					{
						name:'Амортизация',
					},
					{
						name:'АмортизацияЗаМесяц',
					},
					{
						name:'СтоимостьБУ',
					},
					{
						name:'ОстСтоимостьБУ',
					},
					{
						name:'АмортизацияБУ',
					},
					{
						name:'АмортизацияЗаМесяцБУ',
					},
					{
						name:'СтоимостьНУ',
					},
					{
						name:'ОстСтоимостьНУ',
					},
					{
						name:'АмортизацияНУ',
					},
					{
						name:'АмортизацияЗаМесяцНУ',
					},
					{
						name:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
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
						var грид = Ext.getCmp('ОС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СписаниеОС.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписаниеОС.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:334px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:572px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПричинаСписания',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричина',
			text: 'Причина:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияБУ',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:334px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетСписанияБУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:416px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:334px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетСписанияНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:416px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоБУ',
			text: 'Субконто :',
			style: 'position:absolute;left:498px;top:57px;width:59px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоБУ',
			width: 120,
			height: 19,
			style: 'position:absolute;left:561px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ',
			text: 'Субконто :',
			style: 'position:absolute;left:498px;top:81px;width:59px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ',
			width: 120,
			height: 19,
			style: 'position:absolute;left:561px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Основные средства',
			style: 'position:absolute;left:8px;top:132px;width:673px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписаниеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:334px;top:105px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеРегл',
			width: 265,
			height: 19,
			style: 'position:absolute;left:416px;top:105px;width:265px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:148px;width:673px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Для списка ОС',
				},
				{
					text:'По наименованию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:689px;height:25px;',
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
				},
			]
		},
	]
	});
});