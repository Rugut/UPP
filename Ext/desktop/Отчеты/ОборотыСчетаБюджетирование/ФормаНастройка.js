Ext.define('Отчеты.ОборотыСчетаБюджетирование.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:298px;width:490px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:8px;top:8px;width:474px;height:283px;',
			height: 283,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:68px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам',
			style: 'position:absolute;left:258px;top:242px;width:96px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:68px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:168px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:250px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:12px;top:126px;width:128px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:126px;top:169px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:192px;top:169px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:126px;top:193px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:192px;top:193px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:126px;top:218px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:192px;top:218px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:126px;top:242px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:192px;top:242px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Все периоды',
			style: 'position:absolute;left:286px;top:78px;width:100px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по количеству',
			style: 'position:absolute;left:192px;top:126px;width:140px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В валюте сценария',
			style: 'position:absolute;left:12px;top:146px;width:120px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:68px;top:54px;width:398px;height:19px;',
		},
					]
				},
				{
					title:'Детализация счета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:460px;height:210px;',
			height: 210,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:232px;',
			height: 232,width: 460,
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