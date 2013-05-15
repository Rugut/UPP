Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПротоколаФСГС',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:403px;height:298px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Протокол',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время отправки:',
			style: 'position:absolute;left:8px;top:8px;width:150px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Протокол положительный?',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:18px;',
		},
		{
			xtype: 'fieldset',
			title: 'Содержимое',
			style: 'position:absolute;left:8px;top:60px;width:387px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: '',
			style: 'position:absolute;left:165px;top:8px;width:230px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПротоколЯвляетсяПоложительным',
			text: '',
			style: 'position:absolute;left:165px;top:35px;width:230px;height:16px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПротокола',
			style: 'position:absolute;left:8px;top:80px;width:387px;height:185px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:403px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});