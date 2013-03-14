Ext.define('Отчеты.КассоваяКнига.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:639px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассовая книга за период',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:319px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:411px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:639px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:91px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:173px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:191px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:273px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пересчитать номера листов с начала года',
			style: 'position:absolute;left:8px;top:60px;width:284px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить основания кассовых ордеров',
			style: 'position:absolute;left:8px;top:81px;width:284px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:319px;top:60px;width:312px;height:58px;',
			height: 58,width: 312,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Обычный',
			style: 'position:absolute;left:92px;top:0px;width:72px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Последний в месяце',
			style: 'position:absolute;left:92px;top:21px;width:128px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Последний в году',
			style: 'position:absolute;left:92px;top:42px;width:112px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоследнийЛист',
			text: 'Последний лист:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Всегда выводить листы на начало и конец периода',
			style: 'position:absolute;left:8px;top:102px;width:284px;height:15px;',
		},
	]
});