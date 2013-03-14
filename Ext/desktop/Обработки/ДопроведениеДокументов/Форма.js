Ext.define('Обработки.ДопроведениеДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:427px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Допроведение документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:427px;height:25px;',
			items:
			[
				{
					text:'Выполнить допроведение',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНастройкаДопроведения',
			text: 'Настройка:',
			style: 'position:absolute;left:8px;top:33px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаДопроведенияДокументов',
			style: 'position:absolute;left:74px;top:33px;width:345px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбрабатыватьДокументы',
			text: 'Документы:',
			style: 'position:absolute;left:8px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоИнтервалаДопроведения',
			style: 'position:absolute;left:78px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:163px;top:126px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецИнтервалаДопроведения',
			style: 'position:absolute;left:183px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:126px;width:19px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'только требующие допроведения',
			style: 'position:absolute;left:31px;top:81px;width:194px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'все',
			style: 'position:absolute;left:31px;top:102px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:427px;height:25px;',
			items:
			[
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизации',
			text: 'Организации:',
			style: 'position:absolute;left:8px;top:150px;width:83px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:126px;width:69px;height:19px;',
		},
	]
});