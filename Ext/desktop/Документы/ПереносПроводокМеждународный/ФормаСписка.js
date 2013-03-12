Ext.define('Документы.ПереносПроводокМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:776px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перенос проводок (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:760px;height:120px;',
			height: 120,width: 760,
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
					text:'Период',
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
			style: 'position:absolute;left:0px;top:0px;width:776px;height:25px;',
			items:
			[
				{
					text:'Открыть соответствия счетов',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:183px;width:760px;height:279px;',
			height: 279,width: 760,
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
					width:'80',
				},
				{
					text:'Валюта Дт',
					width:'54',
				},
				{
					text:'Вал. сумма Дт',
					width:'80',
				},
				{
					text:'Счет Кт',
					width:'80',
				},
				{
					text:'Субконто Кт',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'',
					width:'120',
				},
				{
					text:'Количество Кт',
					width:'80',
				},
				{
					text:'Валюта Кт',
					width:'80',
				},
				{
					text:'Вал. сумма Кт',
					width:'80',
				},
				{
					text:'Сумма',
					width:'168',
				},
				{
					text:'Содержание',
					width:'168',
				},
				{
					text:'Первичный документ',
					width:'120',
				},
				{
					text:'НЖ',
					width:'48',
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