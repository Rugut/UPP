Ext.define('Отчеты.ОборотноСальдоваяВедомостьХозрасчетный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:237px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:428px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:412px;height:196px;',
			height: 196,width: 412,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по забалансовым счетам',
			style: 'position:absolute;left:16px;top:152px;width:194px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:31px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:31px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детализация по субсчетам и субконто',
			style: 'position:absolute;left:16px;top:112px;width:214px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:197px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:4px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:170px;top:4px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:16px;top:132px;width:128px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:284px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернутое сальдо',
			style: 'position:absolute;left:16px;top:92px;width:126px;height:15px;',
		},
					]
				},
				{
					title:'Развернутое сальдо',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:4px;width:400px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:28px;width:400px;height:142px;',
			height: 142,width: 400,
			columns:
			[
				{
					text:'Счет',
					width:'100',
				},
				{
					text:'По субсчетам',
					width:'90',
				},
				{
					text:'По субконто',
					width:'200',
				},
			]
		},
					]
				},
				{
					title:'Детализация',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:4px;width:400px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:28px;width:400px;height:142px;',
			height: 142,width: 400,
			columns:
			[
				{
					text:'Счет',
					width:'100',
				},
				{
					text:'По субсчетам',
					width:'90',
				},
				{
					text:'По субконто',
					width:'200',
				},
			]
		},
					]
				},
			]
		},
	]
});