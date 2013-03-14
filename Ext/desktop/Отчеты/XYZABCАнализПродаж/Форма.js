Ext.define('Отчеты.XYZABCАнализПродаж.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'XYZ/ABC-анализ продаж',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Диаграмма',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:519px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:539px;top:33px;width:113px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнализируемыйПараметр',
			text: 'Анализируемый параметр:',
			style: 'position:absolute;left:8px;top:58px;width:145px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Анализируемый объект:',
			style: 'position:absolute;left:333px;top:58px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:644px;height:44px;',
			height: 44,width: 644,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:326px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'XYZ-класс',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:18px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:644px;height:19px;',
			height: 19,width: 644,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКлассABC',
			style: 'position:absolute;left:326px;top:0px;width:318px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ABC-класс',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:18px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Количество периодов:',
			style: 'position:absolute;left:333px;top:33px;width:130px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовАнализа',
			style: 'position:absolute;left:467px;top:33px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичность',
			text: 'Периодичность:',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:157px;top:33px;width:167px;height:19px;',
		},
	]
});