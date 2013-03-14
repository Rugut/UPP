Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:161px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строки финансового расчета',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вид строки:',
			style: 'position:absolute;left:8px;top:61px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтроки',
			style: 'position:absolute;left:94px;top:61px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзмерение',
			text: 'Измерение:',
			style: 'position:absolute;left:8px;top:85px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Измерение',
			style: 'position:absolute;left:94px;top:85px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:8px;top:109px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Формула',
			style: 'position:absolute;left:94px;top:109px;width:304px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:136px;width:406px;height:25px;',
			items:
			[
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:277px;top:33px;width:40px;height:19px;text-align:center;',
		},
	]
});