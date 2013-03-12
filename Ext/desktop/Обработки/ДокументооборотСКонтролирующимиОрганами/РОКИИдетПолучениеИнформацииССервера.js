Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИИдетПолучениеИнформацииССервера',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:52px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подождите, пожалуйста...',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:416px;height:36px;',
		},
	]
});