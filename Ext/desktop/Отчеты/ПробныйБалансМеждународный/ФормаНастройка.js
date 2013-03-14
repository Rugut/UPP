Ext.define('Отчеты.ПробныйБалансМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:311px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Пробный баланс',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:286px;width:356px;height:25px;',
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
			style: 'position:absolute;left:8px;top:8px;width:340px;height:270px;',
			height: 270,width: 340,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по забалансовым счетам',
			style: 'position:absolute;left:16px;top:141px;width:200px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:248px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Детализация по субсчетам и субконто',
			style: 'position:absolute;left:16px;top:101px;width:220px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:16px;top:121px;width:128px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернутое сальдо',
			style: 'position:absolute;left:16px;top:81px;width:128px;height:15px;',
		},
					]
				},
				{
					title:'Фильтр счетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:326px;height:220px;',
			height: 220,width: 326,
			columns:
			[
				{
					text:'',
					width:'0',
				},
				{
					text:'',
					width:'0',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:326px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Развернутое сальдо',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:326px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:326px;height:220px;',
			height: 220,width: 326,
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
			style: 'position:absolute;left:6px;top:0px;width:326px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:326px;height:220px;',
			height: 220,width: 326,
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