Ext.define('Отчеты.МСФОПрибылиИУбытки.ФормаДопПараметров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:334px;height:140px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:115px;width:334px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для автоматического расчета отчетности необходимо заполнить следующие параметры:',
			style: 'position:absolute;left:8px;top:6px;width:318px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'СуммаДивидендовКон',
			text: 'Сумма дивидендов на конец 2003 г.:',
			style: 'position:absolute;left:14px;top:41px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'СуммаДивидендовПред',
			text: 'Сумма дивидендов на конец',
			style: 'position:absolute;left:14px;top:65px;width:190px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСуммаДивидендовКон',
			style: 'position:absolute;left:206px;top:41px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСуммаДивидендовПред',
			style: 'position:absolute;left:206px;top:65px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсеСуммы',
			text: '(Все суммы в рублях)',
			style: 'position:absolute;left:8px;top:92px;width:318px;height:15px;text-align:right;',
		},
	]
});