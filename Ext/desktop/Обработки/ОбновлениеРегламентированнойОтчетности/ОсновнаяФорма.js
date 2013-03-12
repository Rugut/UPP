Ext.define('Обработки.ОбновлениеРегламентированнойОтчетности.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:83px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обновление регламентированной отчетности',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Данная форма используется в регламентных операциях и не предназначена для визуального показа.',
			style: 'position:absolute;left:8px;top:9px;width:384px;height:40px;',
		},
	]
});