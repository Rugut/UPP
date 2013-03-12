Ext.define('Справочники.КассыККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:216px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассы ККМ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:357px;top:57px;width:27px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:384px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:57px;width:263px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:191px;width:452px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:89px;top:33px;width:355px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать нефискальные чеки',
			style: 'position:absolute;left:8px;top:81px;width:198px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ручной режим формирования чека',
			style: 'position:absolute;left:223px;top:105px;width:221px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШиринаЛенты',
			text: 'Ширина ленты:',
			style: 'position:absolute;left:25px;top:105px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапретНефискальныхЧеков',
			text: '',
			style: 'position:absolute;left:8px;top:129px;width:436px;height:54px;',
		},
	]
});