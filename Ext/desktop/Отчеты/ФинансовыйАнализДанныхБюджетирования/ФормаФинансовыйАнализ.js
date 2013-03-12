Ext.define('Отчеты.ФинансовыйАнализДанныхБюджетирования.ФормаФинансовыйАнализ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Настройка...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантНастройки',
			style: 'position:absolute;left:114px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вариант настройки:',
			style: 'position:absolute;left:8px;top:57px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:354px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:412px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:510px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:528px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:626px;top:33px;width:20px;height:19px;',
		},
	]
});