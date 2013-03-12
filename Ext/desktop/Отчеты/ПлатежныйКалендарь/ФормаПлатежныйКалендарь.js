Ext.define('Отчеты.ПлатежныйКалендарь.ФормаПлатежныйКалендарь',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:698px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:698px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Заголовок',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Отбор',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:164px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:182px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:280px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:62px;width:682px;height:49px;',
			height: 49,width: 682,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидДенежныхСредств',
			style: 'position:absolute;left:313px;top:0px;width:369px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид денежных средств',
			style: 'position:absolute;left:0px;top:0px;width:145px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиБанковскийСчетКасса',
			style: 'position:absolute;left:313px;top:24px;width:369px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Банковский счет, касса',
			style: 'position:absolute;left:0px;top:24px;width:146px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДетализацияПоПериодам',
			style: 'position:absolute;left:470px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Детализация по периодам:',
			style: 'position:absolute;left:322px;top:33px;width:143px;height:19px;',
		},
	]
});