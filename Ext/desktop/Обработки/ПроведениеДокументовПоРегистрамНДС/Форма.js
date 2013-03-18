Ext.define('Обработки.ПроведениеДокументовПоРегистрамНДС.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:338px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проведение документов по регистрам НДС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:338px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:338px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодС',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:53px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:70px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:152px;top:53px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:171px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:53px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы только выбранного периода',
			style: 'position:absolute;left:8px;top:33px;width:322px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:153px;width:322px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:178px;width:322px;height:187px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы по оперативным регистрам',
			style: 'position:absolute;left:8px;top:77px;width:322px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проводить документы по регистрам партий',
			style: 'position:absolute;left:8px;top:97px;width:322px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить суммовые и курсовые разницы в регистрах НДС',
			style: 'position:absolute;left:8px;top:117px;width:322px;height:15px;',
		},
	]
});