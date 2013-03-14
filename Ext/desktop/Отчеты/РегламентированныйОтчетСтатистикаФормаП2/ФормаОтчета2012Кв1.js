Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2012Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:438px;',
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
					text:'Проверить в Интернете',
				},
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Показать отправки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:413px;width:716px;height:25px;',
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
			style: 'position:absolute;left:8px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:90px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:386px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:386px;width:445px;height:19px;',
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
			style: 'position:absolute;left:445px;top:76px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'Организация:',
			style: 'position:absolute;left:369px;top:76px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '/',
			style: 'position:absolute;left:299px;top:78px;width:7px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:311px;top:76px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Статус:',
			style: 'position:absolute;left:8px;top:386px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:58px;top:386px;width:119px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:43px;',
			height: 43,width: 700,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:35px;',
			height: 35,width: 700,
			tabBar:{hidden:true},
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
					]
				},
			]
		},
	]
});