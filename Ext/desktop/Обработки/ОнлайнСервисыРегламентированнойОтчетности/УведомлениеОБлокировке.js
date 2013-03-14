Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.УведомлениеОБлокировке',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:545px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внимание!',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:302px;width:529px;height:25px;',
			height: 25,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Мягкая блокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПродолжить',
			text: 'Продолжить',
			style: 'position:absolute;left:0px;top:0px;width:97px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьОбновления',
			text: 'Проверить обновления',
			style: 'position:absolute;left:109px;top:0px;width:174px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗакрыть',
			text: 'Закрыть',
			style: 'position:absolute;left:295px;top:0px;width:112px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСправка',
			text: 'Справка',
			style: 'position:absolute;left:417px;top:0px;width:112px;height:25px;',
		},
					]
				},
				{
					title:'Жесткая блокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПроверитьОбновленияЖесткая',
			text: 'Проверить обновления',
			style: 'position:absolute;left:0px;top:0px;width:256px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗакрытьЖесткая',
			text: 'Закрыть',
			style: 'position:absolute;left:269px;top:0px;width:124px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСправкаЖесткая',
			text: 'Справка',
			style: 'position:absolute;left:405px;top:0px;width:124px;height:25px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:258px;width:529px;height:35px;',
			height: 35,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Продолжить действие, несмотря на предупреждение (не рекомендуется).',
			style: 'position:absolute;left:0px;top:9px;width:396px;height:15px;',
		},
					]
				},
			]
		},
	]
});