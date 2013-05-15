Ext.define('Справочники.ОформленияСтрокПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оформление строки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:93px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:299px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Жирный',
			style: 'position:absolute;left:93px;top:135px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Зачеркнутый',
			style: 'position:absolute;left:251px;top:156px;width:141px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Наклонный',
			style: 'position:absolute;left:93px;top:156px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подчеркнутый',
			style: 'position:absolute;left:251px;top:135px;width:141px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦветТекста',
			text: 'Цвет текста:',
			style: 'position:absolute;left:8px;top:83px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦветФона',
			text: 'Цвет фона:',
			style: 'position:absolute;left:8px;top:108px;width:79px;height:19px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:184px;width:400px;height:25px;',
			dock: 'bottom',
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
	]
});