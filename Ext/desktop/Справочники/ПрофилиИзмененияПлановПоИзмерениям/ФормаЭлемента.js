Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:474px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили изменения планов по измерениям',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:122px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРаспределения',
			text: 'Тип распределения:',
			style: 'position:absolute;left:8px;top:84px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРаспределения',
			style: 'position:absolute;left:122px;top:84px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзмерение',
			text: 'Измерение:',
			style: 'position:absolute;left:8px;top:57px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзмерениеБюджетирования',
			style: 'position:absolute;left:122px;top:57px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанных',
			text: 'Источник данных:',
			style: 'position:absolute;left:8px;top:108px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникДанных',
			style: 'position:absolute;left:122px;top:108px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказатель',
			text: 'Показатель:',
			style: 'position:absolute;left:8px;top:132px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательИсточника',
			style: 'position:absolute;left:122px;top:132px;width:344px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:458px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:474px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:474px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать проценты автоматически',
			style: 'position:absolute;left:8px;top:179px;width:230px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять значение по всем элементам',
			style: 'position:absolute;left:8px;top:159px;width:250px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:458px;height:160px;',
			height: 160,width: 458,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Элемент',
					width:'220',
				},
				{
					text:'Процент',
					width:'80',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:344px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:386px;top:33px;width:80px;height:19px;',
		},
	]
});