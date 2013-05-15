Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ИдетОбновлениеИнформацииМеханизмаОнлайнСервисов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:52px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подождите, пожалуйста...',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '  Производится обновление служебной информации из Интернет...',
			style: 'position:absolute;left:14px;top:8px;width:391px;height:36px;text-align:center;',
		},
	],
	dockedItems:
	[
	]
});