Ext.define('Отчеты.СправкаРасчетПостоянныхИВременныхРазниц.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:203px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:178px;width:413px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:162px;',
			height: 162,width: 399,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:6px;top:6px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:84px;top:6px;width:98px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:385px;height:103px;',
			height: 103,width: 385,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:385px;height:24px;',
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