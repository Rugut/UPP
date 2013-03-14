Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2010Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статистика: Форма П-2',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:716px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата подписи:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:343px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:343px;width:445px;height:19px;',
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'Организация:',
			style: 'position:absolute;left:369px;top:33px;width:75px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '/',
			style: 'position:absolute;left:299px;top:35px;width:7px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:311px;top:33px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Статус:',
			style: 'position:absolute;left:8px;top:343px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:58px;top:343px;width:119px;height:19px;',
		},
	]
});