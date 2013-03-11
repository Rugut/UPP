Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.УведомлениеОБлокировкеФормыИЛИФормата',
	{
	extend: 'Ext.window.Window',
	height: 335,width: 545,
	iconCls: 'bogus',
	title: 'Внимание!',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:258px;width:529px;height:35px;',
			height: 35,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:302px;width:529px;height:25px;',
			height: 25,width: 529,
			items:
			[
				{
					title:'МягкаяБлокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПродолжить',
			text: 'Продолжить',
			style: 'position:absolute;left:0px;top:0px;width:98px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьОбновления',
			text: 'Проверить обновления',
			style: 'position:absolute;left:108px;top:0px;width:175px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗакрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:293px;top:0px;width:113px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСправка',
			text: 'Справка',
			style: 'position:absolute;left:416px;top:0px;width:113px;height:25px;',
		},
					]
				},
				{
					title:'ЖесткаяБлокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПроверитьОбновленияЖесткая',
			text: 'Проверить обновления',
			style: 'position:absolute;left:0px;top:0px;width:268px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗакрытьЖесткая',
			text: 'Закрыть',
			style: 'position:absolute;left:278px;top:0px;width:120px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСправкаЖесткая',
			text: 'Справка',
			style: 'position:absolute;left:409px;top:0px;width:120px;height:25px;',
		},
					]
				},
			]
		},
	]
});