Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Занятия курсов обучения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:298px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ОписаниеЗанятия',
			style: 'position:absolute;left:8px;top:75px;width:384px;height:82px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьЗанятия',
			text: 'Длительность занятия, часов:',
			style: 'position:absolute;left:8px;top:162px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьЗанятия',
			style: 'position:absolute;left:170px;top:162px;width:75px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:384px;height:24px;',
			items:
			[
				'-',
				{
					text:'Коррекция весов',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:384px;height:110px;',
			height: 110,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Компетенция',
					width:'244',
				},
				{
					text:'Вес изучения %',
					width:'96',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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
			name: 'Надпис��ВидЗанятия',
			text: 'Форма проведения занятия:',
			style: 'position:absolute;left:8px;top:186px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗанятия',
			style: 'position:absolute;left:170px;top:186px;width:222px;height:19px;',
		},
	]
});