Ext.define('Документы.БюджетнаяОперация.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Бюджетные операции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:702px;height:260px;',
			height: 260,width: 702,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'73',
				},
				{
					text:'Номер',
					width:'71',
				},
				{
					text:'Период планирования',
					width:'80',
				},
				{
					text:'Сценарий',
					width:'107',
				},
				{
					text:'Статья оборотов',
					width:'159',
				},
				{
					text:'Валюта',
					width:'67',
				},
				{
					text:'Сумма',
					width:'102',
				},
				{
					text:'ЦФО',
					width:'133',
				},
				{
					text:'Проект',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'Пакетный ввод бюджетных операций',
				},
				'-',
				{
					text:'Изменение документов бюджетирования',
				},
				'-',
				{
					text:'Обороты по статьям бюджетов',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:702px;height:99px;',
			height: 99,width: 702,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборСценарийЗначение',
			style: 'position:absolute;left:105px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сценарий:',
			style: 'position:absolute;left:0px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЦФОЗначение',
			style: 'position:absolute;left:445px;top:48px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:345px;top:48px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборСтатьяОборотовЗначение',
			style: 'position:absolute;left:105px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:0px;top:24px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборПроектЗначение',
			style: 'position:absolute;left:105px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:48px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланированияС',
			style: 'position:absolute;left:445px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланированияПо',
			style: 'position:absolute;left:573px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Период с:',
			style: 'position:absolute;left:345px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по',
			style: 'position:absolute;left:555px;top:0px;width:14px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборОтветственный',
			style: 'position:absolute;left:445px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:345px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборКонтрагент',
			style: 'position:absolute;left:105px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:72px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборНоменклатура',
			style: 'position:absolute;left:445px;top:72px;width:257px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:345px;top:72px;width:99px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:682px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
	]
});