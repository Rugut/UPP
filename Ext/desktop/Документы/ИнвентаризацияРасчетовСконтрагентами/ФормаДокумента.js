Ext.define('Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация расчетов с контрагентами',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:411px;top:33px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:496px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:728px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:713px;height:303px;',
			height: 303,width: 713,
			items:
			[
				{
					title:'Дебиторская задолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Заполнить дебиторскую задолженность',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'158',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'79',
					dataIndex:'СчетРасчетов',
					flex:1,
				},
				{
					text:'Всего',
					width:'109',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Подтверждено',
					width:'104',
					dataIndex:'Подтверждено',
					flex:1,
				},
				{
					text:'Не подтверждено',
					width:'100',
					dataIndex:'НеПодтверждено',
					flex:1,
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
					dataIndex:'ИстекСрокДавности',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'107',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Контрагент',
					},
					{
						name:'СчетРасчетов',
					},
					{
						name:'Всего',
					},
					{
						name:'Подтверждено',
					},
					{
						name:'НеПодтверждено',
					},
					{
						name:'ИстекСрокДавности',
					},
					{
						name:'ВидЗадолженности',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиДт',
			text: '',
			style: 'position:absolute;left:6px;top:257px;width:699px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеНомер',
			text: 'Номер:',
			style: 'position:absolute;left:228px;top:26px;width:49px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Кредиторская задолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'148',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'78',
					dataIndex:'СчетРасчетов',
					flex:1,
				},
				{
					text:'Всего',
					width:'110',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Подтверждено',
					width:'100',
					dataIndex:'Подтверждено',
					flex:1,
				},
				{
					text:'Не подтверждено',
					width:'100',
					dataIndex:'НеПодтверждено',
					flex:1,
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
					dataIndex:'ИстекСрокДавности',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'106',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Контрагент',
					},
					{
						name:'СчетРасчетов',
					},
					{
						name:'Всего',
					},
					{
						name:'Подтверждено',
					},
					{
						name:'НеПодтверждено',
					},
					{
						name:'ИстекСрокДавности',
					},
					{
						name:'ВидЗадолженности',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиКт',
			text: '',
			style: 'position:absolute;left:6px;top:258px;width:699px;height:19px;',
		},
					]
				},
				{
					title:'Счета расчетов',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:699px;height:229px;',
			height: 229,width: 699,
			columns:
			[
				{
					text:'Счет',
					width:'124',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование',
					width:'360',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Счет',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеВид',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:26px;width:80px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Инвентаризационная комиссия',
			style: 'position:absolute;left:6px;top:106px;width:699px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:146px;width:699px;height:130px;',
			height: 130,width: 699,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Члены комиссии',
					width:'265',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Председатель',
					width:'92',
					dataIndex:'Председатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияРасчетовСконтрагентами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'Председатель',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:122px;width:699px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеВид',
			style: 'position:absolute;left:88px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДокументОснованиеДата',
			style: 'position:absolute;left:435px;top:26px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНомер',
			style: 'position:absolute;left:285px;top:26px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеДата',
			text: 'от:',
			style: 'position:absolute;left:409px;top:26px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Проведение инвентаризации',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:16px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаИнвентаризации',
			style: 'position:absolute;left:88px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияИнвентаризации',
			text: 'Дата окончания:',
			style: 'position:absolute;left:188px;top:50px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОкончанияИнвентаризации',
			style: 'position:absolute;left:285px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаИнвентаризации',
			style: 'position:absolute;left:88px;top:74px;width:617px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:395px;width:616px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:395px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:371px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:105px;top:371px;width:616px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});