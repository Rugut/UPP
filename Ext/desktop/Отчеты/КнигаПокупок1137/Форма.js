Ext.define('Отчеты.КнигаПокупок1137.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Книга покупок по Постановлению № 1137',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
				'-',
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
			style: 'position:absolute;left:364px;top:33px;width:428px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать дополнительные листы',
			style: 'position:absolute;left:8px;top:57px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныеЛистыЗаТекущийПериод',
			style: 'position:absolute;left:224px;top:57px;width:165px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:784px;height:491px;',
			height: 491,width: 784,
			items:
			[
				{
					title:'Основной раздел',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить только доп. листы',
			style: 'position:absolute;left:394px;top:57px;width:167px;height:19px;',
		},
	]
});