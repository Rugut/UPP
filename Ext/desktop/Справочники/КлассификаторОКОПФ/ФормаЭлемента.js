Ext.define('Справочники.КлассификаторОКОПФ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:130px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор ОКОПФ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:290px;top:33px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:325px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:140px;top:33px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:140px;top:57px;width:252px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включить элемент в список быстрого выбора',
			style: 'position:absolute;left:8px;top:82px;width:258px;height:15px;',
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
			style: 'position:absolute;left:0px;top:105px;width:400px;height:25px;',
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
	]
});