Ext.define('Отчеты.ИнвентарнаяКнигаОСБухгалтерскийУчет.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:674px;height:451px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентарная книга ОС (бухгалтерский учет)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
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
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:344px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:34px;width:50px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:63px;top:34px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'по:',
			style: 'position:absolute;left:148px;top:34px;width:15px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:168px;top:34px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:34px;width:19px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:134px;width:658px;height:309px;',
			height: 309,width: 658,
			items:
			[
				{
					title:'Страницы',
				},
				{
					title:'Обложка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:82px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:110px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'МОЛ:',
			style: 'position:absolute;left:14px;top:107px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛ',
			style: 'position:absolute;left:110px;top:107px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:351px;top:82px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:446px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:446px;top:33px;width:220px;height:19px;',
		},
	]
});