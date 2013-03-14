Ext.define('Справочники.ВложенияЭлектронныхПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вложение электронного письма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:396px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:396px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:85px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:85px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:8px;top:60px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:92px;top:60px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:92px;top:33px;width:296px;height:19px;',
		},
	]
});