Ext.define('Документы.ПодготовкаКПередачеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:723px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка к передаче ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:200px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:346px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:371px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:371px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:80px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Событие',
			style: 'position:absolute;left:96px;top:80px;width:225px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:432px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:506px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:707px;height:194px;',
			height: 194,width: 707,
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
					width:'216',
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
					width:'91',
					dataIndex:'Амортизация',
					flex:1,
				},
				{
					text:'Аморт. за месяц',
					width:'100',
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
					width:'116',
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
					width:'112',
					dataIndex:'СтоимостьНУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (НУ)',
					width:'102',
					dataIndex:'ОстСтоимостьНУ',
					flex:1,
				},
				{
					text:'Амортизация (НУ)',
					width:'119',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаКПередачеОС/ВыбратьПоСсылке/100'},
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
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:346px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:580px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:344px;top:80px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:432px;top:80px;width:283px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Основные средства',
			style: 'position:absolute;left:8px;top:107px;width:707px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:707px;height:24px;',
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
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
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
			style: 'position:absolute;left:0px;top:398px;width:723px;height:25px;',
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