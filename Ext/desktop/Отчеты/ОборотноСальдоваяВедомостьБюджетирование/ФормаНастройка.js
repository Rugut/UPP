Ext.define('Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:310px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:310px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:8px;width:294px;height:270px;',
			height: 270,width: 294,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по забалансовым счетам',
			style: 'position:absolute;left:12px;top:158px;width:196px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:64px;top:30px;width:222px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детализация по субсчетам и субконто',
			style: 'position:absolute;left:12px;top:118px;width:220px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:164px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:12px;top:138px;width:128px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:246px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернутое сальдо',
			style: 'position:absolute;left:12px;top:98px;width:128px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В валюте сценария',
			style: 'position:absolute;left:12px;top:78px;width:124px;height:15px;',
		},
					]
				},
				{
					title:'Развернутое сальдо',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:280px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:280px;height:220px;',
			height: 220,width: 280,
			columns:
			[
				{
					text:'Счет',
					width:'80',
				},
				{
					text:'По субсчетам',
					width:'80',
				},
				{
					text:'По субконто',
					width:'120',
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
			style: 'position:absolute;left:6px;top:0px;width:280px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:280px;height:220px;',
			height: 220,width: 280,
			columns:
			[
				{
					text:'Счет',
					width:'80',
				},
				{
					text:'По субсчетам',
					width:'80',
				},
				{
					text:'По субконто',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
	]
});