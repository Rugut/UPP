Ext.define('Отчеты.РегистрУчетаРасходовБудущихПериодов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:372px;height:328px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистр учета расходов будущих периодов (настройка)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:372px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:8px;width:358px;height:288px;',
			height: 288,width: 358,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:41px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:16px;top:41px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:94px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:207px;top:14px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:16px;top:14px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:180px;top:14px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:294px;top:14px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Виды расходов',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:326px;top:6px;width:24px;height:256px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
	]
});