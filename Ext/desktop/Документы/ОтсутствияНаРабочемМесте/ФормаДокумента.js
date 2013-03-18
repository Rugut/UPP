Ext.define('Документы.ОтсутствияНаРабочемМесте.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:378px;height:313px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отсутствие на рабочем месте',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:378px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:288px;width:378px;height:25px;',
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
			name: 'НадписьДата',
			text: 'Дата регистрации:',
			style: 'position:absolute;left:8px;top:237px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:114px;top:237px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:163px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:182px;width:362px;height:41px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Зарегистрировал:',
			style: 'position:absolute;left:8px;top:261px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:261px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаОтсутствия',
			text: 'Причина:',
			style: 'position:absolute;left:8px;top:131px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаОтсутствия',
			style: 'position:absolute;left:74px;top:131px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:33px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:74px;top:33px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВТеченииДняУйдет',
			style: 'position:absolute;left:169px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНесколькоДнейДатаОкончания',
			text: 'По:',
			style: 'position:absolute;left:8px;top:107px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНесколькоДнейДатаОкончания',
			style: 'position:absolute;left:74px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВТеченииДняПридет',
			style: 'position:absolute;left:169px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНесколькоДнейДатаНачала',
			text: 'С:',
			style: 'position:absolute;left:8px;top:83px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНесколькоДнейДатаНачала',
			style: 'position:absolute;left:74px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтсутствует',
			text: 'Отсутствует',
			style: 'position:absolute;left:8px;top:61px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:247px;top:237px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:290px;top:237px;width:80px;height:19px;',
		},
	]
});