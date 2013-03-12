Ext.define('Справочники.ДоходыНДФЛ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:471px;height:247px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Код дохода для исчисления НДФЛ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:29px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:38px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:100px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:183px;top:33px;width:280px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНалогообложенияРезидента',
			text: 'Ставка налогообложения (для налоговых резидентов):',
			style: 'position:absolute;left:8px;top:81px;width:172px;height:31px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНалогообложенияРезидента',
			style: 'position:absolute;left:183px;top:86px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодДляОтчетности',
			text: 'Код для отражения в отчетности:',
			style: 'position:absolute;left:8px;top:57px;width:172px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчетности',
			style: 'position:absolute;left:183px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Доход не облагается у налогового агента',
			style: 'position:absolute;left:16px;top:195px;width:276px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не отражается в отчетности с 2010 г.',
			style: 'position:absolute;left:248px;top:57px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУчитыватьПоПериодуДействия',
			text: 'Порядок учета дохода при исчислении НДФЛ:',
			style: 'position:absolute;left:8px;top:122px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:471px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:222px;width:471px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});