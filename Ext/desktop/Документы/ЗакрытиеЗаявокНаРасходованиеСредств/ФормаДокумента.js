Ext.define('Документы.ЗакрытиеЗаявокНаРасходованиеСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:433px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие заявок на расходование средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:354px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:166px;width:656px;height:180px;',
			height: 180,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заявка',
					width:'220',
					dataIndex:'Заявка',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Сумма расчетов',
					width:'100',
					dataIndex:'ОстатокЗаявка',
					flex:1,
				},
				{
					text:'Валюта остатка',
					width:'98',
					dataIndex:'ВалютаЗаявка',
					flex:1,
				},
				{
					text:'Остаток резерва',
					width:'108',
					dataIndex:'ОстатокРезерва',
					flex:1,
				},
				{
					text:'Остаток размещение',
					width:'108',
					dataIndex:'ОстатокРазмещение',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'95',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗакрытиеЗаявокНаРасходованиеСредств/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Заявка',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ОстатокЗаявка',
					},
					{
						name:'ВалютаЗаявка',
					},
					{
						name:'ОстатокРезерва',
					},
					{
						name:'ОстатокРазмещение',
					},
					{
						name:'Ответственный',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
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
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:672px;height:25px;',
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
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Подразделение',
			style: 'position:absolute;left:444px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение:',
			style: 'position:absolute;left:338px;top:78px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:14px;top:102px;width:82px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор по реквизитам',
			style: 'position:absolute;left:8px;top:57px;width:656px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтветственныйЗаявка',
			style: 'position:absolute;left:444px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:338px;top:102px;width:104px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Заявки для закрытия',
			style: 'position:absolute;left:8px;top:126px;width:656px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:444px;top:354px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Состояние:',
			style: 'position:absolute;left:338px;top:354px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:98px;top:381px;width:566px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:381px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата расхода с:',
			style: 'position:absolute;left:14px;top:78px;width:82px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ОтборДатаНач',
			style: 'position:absolute;left:98px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:188px;top:78px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ОтборДатаКон',
			style: 'position:absolute;left:207px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:298px;top:78px;width:20px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:142px;width:656px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});