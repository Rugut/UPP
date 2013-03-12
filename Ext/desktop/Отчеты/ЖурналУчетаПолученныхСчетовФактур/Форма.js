Ext.define('Отчеты.ЖурналУчетаПолученныхСчетовФактур.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:530px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Журнал учета полученных счетов-фактур',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сохранить значения...',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:364px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сформировать отчет по стандартной форме',
			style: 'position:absolute;left:8px;top:57px;width:247px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:76px;width:581px;height:48px;',
			height: 48,width: 581,
			items:
			[
				{
					title:'Дополнительные настройки',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:392px;top:6px;width:183px;height:18px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту',
			style: 'position:absolute;left:6px;top:6px;width:149px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентДляОтбора',
			style: 'position:absolute;left:157px;top:6px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеСтандартныхНастроек',
			text: 'Выбранный режим формирования отчета соответствует правилам ведения журнала учета полученных счетов-фактур. Для использования дополнительных возможностей отчета снимите установленный флажок "Сформировать отчет по стандартной форме".',
			style: 'position:absolute;left:6px;top:0px;width:569px;height:48px;',
		},
					]
				},
				{
					title:'Стандартные настройки',
				},
			]
		},
	]
});