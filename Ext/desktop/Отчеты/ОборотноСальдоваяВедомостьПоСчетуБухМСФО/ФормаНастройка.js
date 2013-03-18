Ext.define('Отчеты.ОборотноСальдоваяВедомостьПоСчетуБухМСФО.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:311px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:286px;width:490px;height:25px;',
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
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:270px;',
			height: 270,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет РСБУ:',
			style: 'position:absolute;left:6px;top:7px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:88px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:88px;top:54px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:14px;top:107px;width:128px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по количеству',
			style: 'position:absolute;left:14px;top:127px;width:140px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетМеждународный',
			style: 'position:absolute;left:262px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Детализация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:66px;width:460px;height:169px;',
			height: 169,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:42px;width:460px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам счета РСБУ',
			style: 'position:absolute;left:6px;top:6px;width:160px;height:15px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:220px;',
			height: 220,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'240',
				},
				{
					text:'С',
					width:'120',
				},
				{
					text:'По',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});