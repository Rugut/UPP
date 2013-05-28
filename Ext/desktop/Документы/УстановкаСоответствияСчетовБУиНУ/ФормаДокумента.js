Ext.define('Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:594px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка соответствия счетов БУ и НУ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:245px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 490,
			height: 19,
			style: 'position:absolute;left:96px;top:245px;width:490px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:269px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 490,
			height: 19,
			style: 'position:absolute;left:96px;top:269px;width:490px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:578px;height:159px;',
			height: 159,width: 578,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Учитывается',
					flex:1,
				},
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет БУ',
					width:'79',
					dataIndex:'СчетБУ',
					flex:1,
				},
				{
					text:'Счет корр БУ',
					width:'93',
					dataIndex:'СчетКоррБУ',
					flex:1,
				},
				{
					text:'Вид затрат НУ',
					width:'114',
					dataIndex:'ВидЗатратНУ',
					flex:1,
				},
				{
					text:'Счет НУ',
					width:'85',
					dataIndex:'СчетНУ',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'91',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСоответствияСчетовБУиНУ/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Учитывается',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетБУ',
					},
					{
						name:'СчетКоррБУ',
					},
					{
						name:'ВидЗатратНУ',
					},
					{
						name:'СчетНУ',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:594px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:578px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Установить Флажки',
				},
				{
					text:'Снять Флажки',
				},
				'-',
			]
		},
	]
});