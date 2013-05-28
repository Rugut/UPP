Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'План движения денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:359px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:96px;top:359px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПланирования',
			text: 'Дата планирования (период-ть: квартал):',
			style: 'position:absolute;left:336px;top:57px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПланирования',
			width: 95,
			height: 19,
			style: 'position:absolute;left:549px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:174px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид движения',
					width:'100',
					dataIndex:'ПриходРасход',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'128',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'86',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Сумма',
					width:'86',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'159',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'118',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'143',
					dataIndex:'Сделка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланДвиженияДенежныхСредств/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПриходРасход',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'Проект',
					},
					{
						name:'Сумма',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:652px;height:25px;',
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
					text:'ОК',
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
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;',
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
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Сценарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаДокумента',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидДенежныхСредств',
			width: 95,
			height: 19,
			style: 'position:absolute;left:549px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид денежных средств',
			style: 'position:absolute;left:336px;top:81px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоПриход',
			text: 'Итого поступления:',
			style: 'position:absolute;left:420px;top:287px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоРасход',
			text: 'Итого платежи:',
			style: 'position:absolute;left:420px;top:311px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоПоток',
			text: 'Чистый денежный поток: ',
			style: 'position:absolute;left:420px;top:335px;width:136px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИтогоПлатежи',
			style: 'position:absolute;left:556px;top:311px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЧДП',
			style: 'position:absolute;left:556px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИтогоПоступления',
			style: 'position:absolute;left:556px;top:287px;width:88px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Движения денежных средств',
			style: 'position:absolute;left:8px;top:129px;width:636px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:150px;width:636px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
	]
});