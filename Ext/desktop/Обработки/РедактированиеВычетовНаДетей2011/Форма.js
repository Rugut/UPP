Ext.define('Обработки.РедактированиеВычетовНаДетей2011.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:996px;height:589px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Стандартные вычеты - 2011',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:564px;width:996px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Записать вычеты и закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокГлавногоОкна',
			text: 'Выделение вычетов на второго, третьего (четвертого, ...) ребенка',
			style: 'position:absolute;left:8px;top:8px;width:709px;height:25px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:121px;width:206px;height:435px;',
			height: 435,width: 206,
			columns:
			[
				{
					text:'Сотрудник',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:121px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Период (с ... по)',
					width:'140',
				},
				{
					text:'С',
					width:'70',
				},
				{
					text:'по',
					width:'70',
				},
				{
					text:'Код и количество детей',
					width:'83',
				},
				{
					text:'Применение',
					width:'70',
				},
				{
					text:'Вычет на детей',
					width:'60',
				},
				{
					text:'Количество детей',
					width:'24',
				},
				{
					text:'Основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:39px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:39px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:226px;top:436px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Период (с ... по)',
					width:'140',
				},
				{
					text:'С',
					width:'70',
				},
				{
					text:'по',
					width:'70',
				},
				{
					text:'Код и количество детей',
					width:'83',
				},
				{
					text:'Применение',
					width:'70',
				},
				{
					text:'Вычет на детей',
					width:'60',
				},
				{
					text:'Количество детей',
					width:'24',
				},
				{
					text:'Основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Сотрудники',
			style: 'position:absolute;left:8px;top:98px;width:96px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:226px;top:411px;width:762px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Вычеты, применявшиеся ранее',
			style: 'position:absolute;left:226px;top:98px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Вычеты, действующие с января 2011 в соответствии с Законом № 330-ФЗ и приказом ФНС об изменении перечня вычетов',
			style: 'position:absolute;left:226px;top:389px;width:762px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПояснения',
			text: 'Первая строка пояснения
Вторая строка пояснения',
			style: 'position:absolute;left:8px;top:63px;width:980px;height:32px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:226px;top:246px;width:762px;height:140px;',
			height: 140,width: 762,
			items:
			[
				{
					title:'Страница переключателей',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОбработать',
			text: 'Обработать вычеты сотрудника',
			style: 'position:absolute;left:0px;top:116px;width:186px;height:24px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Вычеты с кодом 108',
			style: 'position:absolute;left:0px;top:0px;width:126px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'Страница многих детей',
					items:
					[
					]
				},
				{
					title:'Страница одного ребенка',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:254px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Вычеты с кодом 110',
			style: 'position:absolute;left:0px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'Страница многих детей',
					items:
					[
					]
				},
				{
					title:'Страница одного ребенка',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:508px;top:0px;width:254px;height:110px;',
			height: 110,width: 254,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Вычеты с кодом 111',
			style: 'position:absolute;left:0px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:254px;height:85px;',
			height: 85,width: 254,
			items:
			[
				{
					title:'Страница многих детей',
					items:
					[
					]
				},
				{
					title:'Страница одного ребенка',
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
				},
			]
		},
	]
});