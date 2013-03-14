Ext.define('Документы.ОперацияМеждународная.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Журнал операций (международный учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:159px;',
			height: 159,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:222px;width:764px;height:240px;',
			height: 240,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто Дт',
					width:'120',
				},
				{
					text:'',
					width:'80',
				},
				{
					text:'',
					width:'80',
				},
				{
					text:'Количество Дт',
					width:'8',
				},
				{
					text:'Валюта Дт',
					width:'54',
				},
				{
					text:'Вал. сумма Дт',
					width:'98',
				},
				{
					text:'Счет Кт',
					width:'110',
				},
				{
					text:'Субконто Кт',
					width:'110',
				},
				{
					text:'',
					width:'115',
				},
				{
					text:'',
					width:'115',
				},
				{
					text:'Количество Кт',
					width:'95',
				},
				{
					text:'Валюта Кт',
					width:'52',
				},
				{
					text:'Вал. сумма Кт',
					width:'96',
				},
				{
					text:'Сумма',
					width:'66',
				},
				{
					text:'Содержание',
					width:'184',
				},
				{
					text:'Номер журнала',
					width:'45',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
	]
});