Ext.define('Документы.ОперацияБух.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Операции (бухгалтерский и налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:157px;',
			height: 157,width: 764,
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
					width:'200',
				},
				{
					text:'Сумма операции',
					width:'120',
				},
				{
					text:'Содержание',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Структура подчиненности документа',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:220px;width:764px;height:242px;',
			height: 242,width: 764,
			items:
			[
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:210px;',
			height: 210,width: 750,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'№',
					width:'28',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто Дт',
					width:'98',
				},
				{
					text:'',
					width:'98',
				},
				{
					text:'',
					width:'98',
				},
				{
					text:'Количество Дт',
					width:'100',
				},
				{
					text:'Валюта Дт',
					width:'100',
				},
				{
					text:'Вал. сумма Дт',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'106',
				},
				{
					text:'',
					width:'65',
				},
				{
					text:'',
					width:'65',
				},
				{
					text:'Количество Кт',
					width:'100',
				},
				{
					text:'Валюта Кт',
					width:'100',
				},
				{
					text:'Вал. сумма Кт',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Содержание',
					width:'100',
				},
				{
					text:'Номер журнала',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:750px;height:210px;',
			height: 210,width: 750,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'№',
					width:'28',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Количество Дт',
					width:'80',
				},
				{
					text:'Вид учета Дт',
					width:'100',
				},
				{
					text:'Субконто Дт',
					width:'150',
				},
				{
					text:'',
					width:'150',
				},
				{
					text:'',
					width:'150',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Количество Кт',
					width:'80',
				},
				{
					text:'Вид учета Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'150',
				},
				{
					text:'',
					width:'150',
				},
				{
					text:'',
					width:'150',
				},
				{
					text:'Сумма',
					width:'150',
				},
				{
					text:'Содержание',
					width:'150',
				},
				{
					text:'№ журнала',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});