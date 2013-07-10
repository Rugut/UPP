Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПрогрессОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:418px;height:54px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подождите, пожалуйста...',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: '',
			style: 'position:absolute;left:56px;top:8px;width:354px;height:38px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
	]
});